import type { Metadata } from "next";
import Link from "next/link";
import { ImagePanel } from "../components/image-panel";

export const metadata: Metadata = { title: "Products" };

const products = [
  {
    kind: "cocopeat",
    imageLabel: "Cured cocopeat",
    category: "01 / GROWING MEDIUM",
    name: "Cocopeat",
    description: "A light coconut pith medium valued for moisture retention and root aeration. Suitable for nurseries, gardening and growing systems when prepared to the required specification.",
    marketPrice: "₹200–₹400",
    priceUnit: "per 25 kg bag",
    enquiry: "Enquire about cocopeat →",
  },
  {
    kind: "fiber",
    imageLabel: "Coir fiber bales",
    category: "02 / NATURAL FIBER",
    name: "Coir Fiber",
    description: "Strong natural fiber separated from coconut husks for industrial applications such as ropes, mats, padding and geotextiles.",
    marketPrice: "₹20–₹30",
    priceUnit: "per kg",
    enquiry: "Enquire about coir fiber →",
  },
];

export default function Products() {
  return <section className="section products inner-page"><div className="wrap">
    <div className="section-heading"><span className="section-kicker">OUR PRODUCTS</span><h1>Two products, many possibilities.</h1><p>Choose the material that fits your growing or manufacturing need.</p></div>
    <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}>
      <ImagePanel kind={product.kind} label={product.imageLabel} />
      <div className="product-copy"><span>{product.category}</span><h3>{product.name}</h3><p>{product.description}</p>
        <div className="product-price"><span>INDICATIVE BENGALURU MARKET PRICE</span><strong>{product.marketPrice}</strong><small>{product.priceUnit}</small></div>
        <Link href="/contact">{product.enquiry}</Link>
      </div>
    </article>)}</div>
    <p className="market-price-note">Market reference only, checked 29 September 2026. These are not Persevex Agro quotations. Grade, order quantity, taxes and delivery can change the final price; request a quote for your requirement.</p>
  </div></section>;
}
