"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Flourish } from "@/components/ui/Ornaments";
import { buttonClass } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const { count, hydrated } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const cartLabel = hydrated && count > 0 ? `Cart, ${count} item${count === 1 ? "" : "s"}` : "Cart";

  return (
    <header className="sticky top-0 z-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
        Skip to content
      </a>
      <div className="bg-navy text-ivory">
        <div className="container-lux flex items-center justify-center gap-3 py-2 text-center text-sm sm:gap-5 sm:text-base">
          <Flourish className="hidden sm:block" />
          <Link href="/pricing#offer" className="font-serif tracking-wide hover:text-gold-light">
            {siteConfig.announcement}
          </Link>
          <Flourish flip className="hidden sm:block" />
        </div>
      </div>

      <div className="border-b border-gold/25 bg-ivory/95 backdrop-blur">
        <div className="container-lux flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {siteConfig.nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-2 font-serif text-[17px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform",
                        active ? "text-gold-dark after:scale-x-100" : "text-navy after:scale-x-0 hover:text-gold-dark hover:after:scale-x-100"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/shop" className={buttonClass("gold", "hidden px-6 py-3 text-base md:inline-flex")}>
              Shop the Book
            </Link>
            <Link href="/cart" className="relative grid h-11 w-11 place-items-center text-navy hover:text-gold-dark" aria-label={cartLabel}>
              <ShoppingBag className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
              {hydrated && count > 0 && (
                <span className="absolute right-0.5 top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-burgundy px-1 text-[11px] font-semibold text-ivory" aria-hidden="true">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" hidden={!open} className="border-t border-gold/25 bg-ivory lg:hidden">
          <nav aria-label="Mobile" className="container-lux max-h-[calc(100vh-110px)] overflow-y-auto py-6">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-gold/15">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn("block py-4 font-serif text-xl", active ? "text-gold-dark" : "text-navy")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link href="/shop" className={buttonClass("gold", "mt-6 w-full")}>
              Shop the Book
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
