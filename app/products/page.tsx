import type { Metadata } from "next";
import Link from "next/link";
import { ImagePanel } from "../components/image-panel";
export const metadata: Metadata = { title: "Products" };
export default function Products() {
  return <section className="section products inner-page"><div className="wrap"><div className="section-heading"><span className="section-kicker">OUR PRODUCTS</span><h1>Two products, many possibilities.</h1><p>Choose the material that fits your growing or manufacturing need.</p></div><div className="product-grid"><article className="product-card"><ImagePanel kind="cocopeat" label="Cured cocopeat"/><div className="product-copy"><span>01 / GROWING MEDIUM</span><h3>Cocopeat</h3><p>A light coconut pith medium valued for moisture retention and root aeration. Suitable for nurseries, gardening and growing systems when prepared to the required specification.</p><Link href="/contact">Enquire about cocopeat →</Link></div></article><article className="product-card"><ImagePanel kind="fiber" label="Coir fiber bales"/><div className="product-copy"><span>02 / NATURAL FIBER</span><h3>Coir Fiber</h3><p>Strong natural fiber separated from coconut husks for industrial applications such as ropes, mats, padding and geotextiles.</p><Link href="/contact">Enquire about coir fiber →</Link></div></article></div></div></section>;
}
