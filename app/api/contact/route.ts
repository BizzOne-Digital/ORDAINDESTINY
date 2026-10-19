import { NextResponse } from "next/server";
import { inquiryTypes } from "@/lib/site-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Reject silently-ish.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const inquiry = String(body.inquiry ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 120) return NextResponse.json({ error: "Please provide your name." }, { status: 422 });
  if (!EMAIL_RE.test(email) || email.length > 200) return NextResponse.json({ error: "Please provide a valid email." }, { status: 422 });
  if (!(inquiryTypes as readonly string[]).includes(inquiry)) return NextResponse.json({ error: "Please choose an inquiry type." }, { status: 422 });
  if (message.length < 10 || message.length > 5000) return NextResponse.json({ error: "Please write a message of at least 10 characters." }, { status: 422 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("[contact] Email delivery is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return NextResponse.json(
      { error: "Our contact form is temporarily unavailable. Please email or call us directly." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New inquiry: ${inquiry} from ${name}`,
        html: `<p><strong>Name:</strong> ${escape(name)}</p>
<p><strong>Email:</strong> ${escape(email)}</p>
<p><strong>Inquiry:</strong> ${escape(inquiry)}</p>
<p><strong>Message:</strong></p><p>${escape(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Provider error", res.status, await res.text());
      return NextResponse.json({ error: "We could not send your message. Please try again or email us directly." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Network error", err);
    return NextResponse.json({ error: "We could not send your message. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
