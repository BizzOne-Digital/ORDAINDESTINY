export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
export const formatPrice = (value: number) => usd.format(value);
