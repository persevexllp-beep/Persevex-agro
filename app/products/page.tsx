import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "../components/add-to-cart";
import { formatPrice } from "../components/pricing";
import { products } from "../components/products-data";
import { ImagePanel } from "../components/image-panel";

export const metadata: Metadata = { title: "Products" };

export default function Products() {
  return <section className="section products inner-page"><div className="wrap">
    <div className="section-heading"><span className="section-kicker">OUR PRODUCTS</span><h1>Meat, produce and growing essentials.</h1><p>Explore meat first, followed by fruits and vegetables, then cocopeat and coir fiber for your home or business. Enquire about availability and bulk requirements.</p></div>
    <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}>
      <Link className="product-image-link" href={`/products/${product.id}`} aria-label={`View ${product.name} details`}>{product.image ? <div className="image-panel"><Image src={product.image} alt={product.imageLabel} fill sizes="(max-width: 600px) calc(100vw - 36px), (max-width: 720px) calc((100vw - 56px) / 2), (max-width: 1000px) calc((100vw - 76px) / 2), (max-width: 1236px) calc((100vw - 96px) / 3), 380px" style={{ objectFit: "cover" }} /></div> : <ImagePanel kind={product.kind!} label={product.imageLabel} />}</Link>
      <div className="product-copy"><span>{product.category}</span><h3><Link href={`/products/${product.id}`}>{product.name}</Link></h3><p>{product.description}</p>
        <div className="product-price"><span>PRICE</span><strong>{formatPrice(product.price)}</strong><small>per {product.unit}</small></div>
        <div className="product-actions"><AddToCart productId={product.id} /><Link href={`/products/${product.id}`}>View details →</Link></div>
      </div>
    </article>)}</div>
    <p className="market-price-note">Prices include taxes. Delivery is free. Select your quantities to see the full order total at checkout.</p>
  </div></section>;
}
