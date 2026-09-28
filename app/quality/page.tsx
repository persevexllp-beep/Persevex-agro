import type { Metadata } from "next";
import Link from "next/link";
import { ImagePanel } from "../components/image-panel";
export const metadata: Metadata = { title: "Quality" };
export default function Quality() {
  return <section className="section quality inner-page"><div className="wrap split"><ImagePanel kind="husk" label="Raw coconut husks"/><div><span className="section-kicker">OUR APPROACH</span><h1>Good growing starts with the material.</h1><p className="lead">Product requirements vary by crop, application and order size.</p><p>Tell us how you plan to use cocopeat or coir fiber, and we can discuss the right format and specifications for your enquiry.</p><div className="quality-points"><div><b>01</b><span>Raw husk sourcing</span></div><div><b>02</b><span>Careful separation and preparation</span></div><div><b>03</b><span>Product and packing discussions</span></div></div><Link className="text-link" href="/contact">Ask about specifications →</Link></div></div></section>;
}
