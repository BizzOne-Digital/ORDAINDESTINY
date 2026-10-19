import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the editions in your cart.",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <div className="container-lux">
        <p className="text-xs uppercase tracking-eyebrow text-gold-dark">YOUR CART</p>
        <h1 className="mb-10 mt-3 text-4xl text-navy sm:text-5xl">Shopping cart</h1>
        <CartView />
      </div>
    </section>
  );
}
