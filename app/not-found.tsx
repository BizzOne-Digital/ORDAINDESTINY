import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-ivory py-28 text-center">
      <div className="container-lux">
        <p className="text-xs uppercase tracking-eyebrow text-gold-dark">PAGE NOT FOUND</p>
        <h1 className="mt-4 text-5xl text-navy">This page could not be found</h1>
        <ButtonLink href="/" className="mt-8" arrow>
          Return Home
        </ButtonLink>
      </div>
    </section>
  );
}
