import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "../../components/add-to-cart";
import { formatPrice } from "../../components/pricing";
import { products } from "../../components/products-data";
import { productDetails } from "../../components/product-details";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map(product => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(product => product.id === id);
  if (!product) notFound();
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find(product => product.id === id);
  if (!product) notFound();
  const details = productDetails[product.id];
  const related = products.filter(item => item.id !== product.id && item.category.split(" / ")[1] === product.category.split(" / ")[1]).slice(0, 3);

  return <section className="section inner-page product-detail"><div className="wrap">
    <nav className="product-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Products</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav>
    <div className="product-detail-grid">
      <div className="product-detail-image"><Image src={product.image ?? (product.kind === "cocopeat" ? "/images/products1.jpeg" : "/images/products2.jpeg")} alt={product.imageLabel} fill sizes="(max-width: 800px) calc(100vw - 36px), (max-width: 1236px) 50vw, 570px" style={{ objectFit: "cover" }} /></div>
      <div className="product-detail-copy"><span className="section-kicker">{product.category}</span><h1>{product.name}</h1><p className="lead">{product.description}</p>
        <div className="product-price"><span>PRICE</span><strong>{formatPrice(product.price)}</strong><small>per {product.unit}</small></div>
        <p className="product-unit">Order unit: <strong>{product.unit}</strong>. Each click adds one {product.unit} to your cart.</p>
        <div className="product-detail-actions"><AddToCart productId={product.id} /><Link className="button outline" href="/cart">View cart →</Link></div>
        <Link className="text-link" href="/contact">{product.enquiry}</Link>
        <p className="product-detail-note">Prices include taxes and free delivery. Use checkout notes to share your selection and delivery requirements.</p>
      </div>
    </div>
    <div className="product-information"><section><h2>About {product.name}</h2><p>{details.overview}</p></section><section><h2>Common uses</h2><ul>{details.uses.map(use => <li key={use}>{use}</li>)}</ul></section><section><h2>Ordering details</h2><ul>{details.ordering.map(note => <li key={note}>{note}</li>)}</ul></section></div>
    <div className="related-products"><h2>Explore more products</h2><div className="related-product-grid">{related.map(item => <Link className="related-product" href={`/products/${item.id}`} key={item.id}><span>{item.category}</span><h3>{item.name}</h3><p>{item.description}</p><span className="text-link">View details →</span></Link>)}</div></div>
  </div></section>;
}
