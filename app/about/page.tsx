import type { Metadata } from "next";
import Link from "next/link";
import { ImagePanel } from "../components/image-panel";
export const metadata: Metadata = { title: "About" };
export default function About() {
  return <section className="section about inner-page"><div className="wrap split"><div><span className="section-kicker">ABOUT PERSEVEX AGRO</span><h1>From coconut husk to a better growing medium.</h1><p className="lead">A practical use for every part of the husk.</p><p>Coir fiber and cocopeat begin with the same raw material. The husk is separated into long fibers and fine pith, then prepared for the people who use them—from plant growers to product manufacturers.</p><p>We believe useful agricultural materials can come from what would otherwise be left behind.</p><Link className="text-link" href="/contact">Talk to us about your requirements →</Link></div><ImagePanel kind="yard" label="Coconut husk processing yard"/></div></section>;
}
