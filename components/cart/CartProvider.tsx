"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, type Product } from "@/lib/products";

const STORAGE_KEY = "ordain-destiny-cart";
const MAX_QTY = 99;

export interface CartLine {
  slug: string;
  quantity: number;
}

interface CartContextValue {
  lines: Array<CartLine & { product: Product }>;
  count: number;
  subtotal: number;
  hydrated: boolean;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const clamp = (n: number) => Math.max(1, Math.min(MAX_QTY, Math.floor(n) || 1));

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        setItems(parsed.filter((l) => getProduct(l.slug)).map((l) => ({ slug: l.slug, quantity: clamp(l.quantity) })));
      }
    } catch {
      /* storage unavailable or corrupt: start with an empty cart */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [items, hydrated]);

  const add = useCallback((slug: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) return prev.map((l) => (l.slug === slug ? { ...l, quantity: clamp(l.quantity + quantity) } : l));
      return [...prev, { slug, quantity: clamp(quantity) }];
    });
  }, []);

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setItems((prev) => prev.map((l) => (l.slug === slug ? { ...l, quantity: clamp(quantity) } : l)));
  }, []);

  const remove = useCallback((slug: string) => setItems((prev) => prev.filter((l) => l.slug !== slug)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const lines = items.flatMap((l) => {
      const product = getProduct(l.slug);
      return product ? [{ ...l, product }] : [];
    });
    return {
      lines,
      count: lines.reduce((s, l) => s + l.quantity, 0),
      subtotal: lines.reduce((s, l) => s + l.quantity * l.product.price, 0),
      hydrated,
      add,
      setQuantity,
      remove,
      clear,
    };
  }, [items, hydrated, add, setQuantity, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
