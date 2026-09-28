"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const items = document.querySelectorAll<HTMLElement>(
      ".hero-copy, .hero-image, .trust-grid > div, .section-heading, .split > *, .process-card, .product-card, .guide-card, .faq-grid > *, .home-links a, .contact-grid > *, .footer-grid > div",
    );
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${(index % 3) * 55}ms`);
      item.classList.add("reveal-item");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
