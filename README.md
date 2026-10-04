# Persevex Agro

Next.js site inspired by the layout and sections of the supplied reference website. The page uses Persevex branding and the requested Bengaluru address and email.

## Pages

The app bar links to dedicated routes: `/about`, `/process`, `/products`, `/faq`, and `/contact`. Shared navigation and footer live in `app/layout.tsx`.

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

The enquiry form currently shows a confirmation toast after valid fields are submitted. It does not send data to a backend. Visitors can use the direct email link to contact `yathin1779@gmail.com`.

## Build

`npx next build --webpack`
