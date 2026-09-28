# Persevex Agro

Next.js site inspired by the layout and sections of the supplied reference website. The page uses Persevex branding and the requested Bengaluru address and email.

## Pages

The app bar links to dedicated routes: `/about`, `/process`, `/products`, `/quality`, `/guides`, `/faq`, and `/contact`. Shared navigation and footer live in `app/layout.tsx`.

## Images

The site uses the image files already in `public/images/`:

| Filename | Placement |
| --- | --- |
| `heroimage.jpeg` | Home hero |
| `about-hero.jpeg` | About section |
| `products1.jpeg` | Cocopeat product |
| `products2.jpeg` | Coir fiber product |
| `products3.jpeg` | Quality section |

The paths are configured in `app/globals.css`.

## Contact form

The enquiry form opens the visitor's email app with a draft addressed to `yathin1779@gmail.com`. It does not send directly from the website.

## Build

`npx next build --webpack`
