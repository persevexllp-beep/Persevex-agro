import type { Metadata } from "next";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { ScrollReveal } from "./components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Persevex | Cocopeat & Coir Fiber", template: "%s | Persevex" },
  description: "Persevex turns coconut husk into cocopeat growing medium and useful coir fiber. Contact us for product and bulk enquiries.",
  icons: { icon: "/logo-persevex-agro.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /><ScrollReveal /></body></html>;
}
