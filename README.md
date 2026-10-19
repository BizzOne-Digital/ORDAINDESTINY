# Ordain Destiny

The marketing and shop website for **Ordain Destiny** by Valerie Nong (writing as *Princess Elector*), featuring the book *God, Divine Dogs and Royals*.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS and Lucide icons.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com), used to deliver contact form messages. |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries (e.g. `vnong11@gmail.com`). |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend, e.g. `Ordain Destiny <no-reply@yourdomain.com>`. |

If these are missing, the contact form shows an error and asks the visitor to email or call. It never shows a false success message.

### Future payment integration

No payment provider is connected yet. The cart (saved in `localStorage`) shows a subtotal and asks visitors to contact you to order. To add checkout, for example with Stripe:

1. Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
2. Create an `app/api/checkout/route.ts` that builds a Checkout Session from the cart lines. Always look up prices on the server from `lib/products.ts`.
3. Replace the "Online checkout is not yet available" note in `components/cart/CartView.tsx` with a checkout button.

## Editing content

- **Products and prices:** `lib/products.ts`
- **Contact details, navigation, offer copy, images:** `lib/site-config.ts`
- **Generated images:** Six optimized WebP assets live in `public/images`. Local paths are centralized in `lib/site-config.ts`; `public/images/asset-manifest.json` records asset dimensions and generation directions. Images were created with the built-in image generator.
- **Book cover:** `components/ui/BookCover.tsx` renders the generated conceptual cover. Update `images.bookCover` when the actual client cover arrives; every print, eBook and audiobook mockup uses it.
- **Logo:** `components/ui/Logo.tsx`

## Structure

```
app/            routes: /, /about, /services, /pricing, /contact, /shop, /shop/[slug], /cart, /api/contact
components/
  layout/       header, footer
  home/         homepage sections
  about/ services/ contact/ shop/ cart/
  ui/           buttons, ornaments, book mockups, page hero
lib/            products, site config, utils
```
