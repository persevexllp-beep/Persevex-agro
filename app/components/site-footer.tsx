import Link from "next/link";
import Image from "next/image";
import { address, email } from "./site-data";

export function SiteFooter() {
  return <footer><div className="wrap footer-grid"><div><Link className="brand footer-brand" href="/"><Image className="brand-logo" src="/logo-persevex-agro.png" alt="Persevex Agro logo" width={299} height={400} /><span><strong>Persevex Agro</strong><small>WHERE SUSTAINABLE MEETS GROWTH</small></span></Link><p>Turning coconut husk into useful coir fiber and cocopeat.</p></div><div><h4>EXPLORE</h4><Link href="/about">About</Link><Link href="/process">Our Process</Link><Link href="/products">Products</Link><Link href="/quality">Quality</Link><Link href="/guides">Guides</Link><Link href="/faq">FAQ</Link></div><div><h4>CONTACT</h4><a href={`mailto:${email}`}>{email}</a><address>{address}</address></div></div><div className="wrap footer-bottom">© {new Date().getFullYear()} Persevex Agro. All rights reserved.</div></footer>;
}
