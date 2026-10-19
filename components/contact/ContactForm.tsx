"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { inquiryTypes } from "@/lib/site-config";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; inquiry: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "loading" | "success" | "error";

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.inquiry) e.inquiry = "Please choose an inquiry type.";
  if (f.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
  return e;
}

const fieldClass = (invalid: boolean) =>
  cn(
    "mt-2 block w-full rounded-[3px] border bg-ivory-50 px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold",
    invalid ? "border-burgundy" : "border-gold/50"
  );

export function ContactForm({ defaultInquiry = "" }: { defaultInquiry?: string }) {
  const initialInquiry = (inquiryTypes as readonly string[]).includes(defaultInquiry) ? defaultInquiry : "";
  const [fields, setFields] = useState<Fields>({ name: "", email: "", inquiry: initialInquiry, message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setStatus("loading");
    setServerError("");
    const company = (new FormData(e.currentTarget).get("company") as string) ?? "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, company }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("success");
      setFields({ name: "", email: "", inquiry: "", message: "" });
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/50 bg-ivory-50 p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-dark" strokeWidth={1.3} aria-hidden="true" />
        <h2 className="mt-4 text-3xl text-navy">Thank you for reaching out</h2>
        <p className="mt-3 text-ink/75">Your message has been sent. We will respond as soon as we can.</p>
        <button type="button" onClick={() => setStatus("idle")} className={buttonClass("outline-dark", "mt-6")}>
          Send another message
        </button>
      </div>
    );
  }

  const err = (k: keyof Fields) =>
    errors[k] && (
      <p id={`contact-${k}-error`} className="mt-1.5 text-sm text-burgundy">
        {errors[k]}
      </p>
    );
  const aria = (k: keyof Fields) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `contact-${k}-error` : undefined });

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-describedby={serverError ? "contact-server-error" : undefined}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="font-serif text-lg text-navy">
            Name <span className="text-burgundy" aria-hidden="true">*</span>
          </label>
          <input id="contact-name" name="name" autoComplete="name" required value={fields.name} onChange={update("name")} className={fieldClass(!!errors.name)} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="contact-email" className="font-serif text-lg text-navy">
            Email <span className="text-burgundy" aria-hidden="true">*</span>
          </label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required value={fields.email} onChange={update("email")} className={fieldClass(!!errors.email)} {...aria("email")} />
          {err("email")}
        </div>
      </div>

      <div>
        <label htmlFor="contact-inquiry" className="font-serif text-lg text-navy">
          Inquiry type <span className="text-burgundy" aria-hidden="true">*</span>
        </label>
        <select id="contact-inquiry" name="inquiry" required value={fields.inquiry} onChange={update("inquiry")} className={fieldClass(!!errors.inquiry)} {...aria("inquiry")}>
          <option value="">Select an option</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {err("inquiry")}
      </div>

      <div>
        <label htmlFor="contact-message" className="font-serif text-lg text-navy">
          Message <span className="text-burgundy" aria-hidden="true">*</span>
        </label>
        <textarea id="contact-message" name="message" rows={6} required value={fields.message} onChange={update("message")} className={fieldClass(!!errors.message)} {...aria("message")} />
        {err("message")}
      </div>

      {status === "error" && (
        <div id="contact-server-error" role="alert" className="flex gap-3 rounded-sm border border-burgundy/40 bg-burgundy/5 p-4 text-sm text-burgundy">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <p>{serverError}</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className={buttonClass("gold", "w-full sm:w-auto")}>
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
