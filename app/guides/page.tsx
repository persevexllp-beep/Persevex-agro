import type { Metadata } from "next";
import { guides } from "../components/site-data";
export const metadata: Metadata = { title: "Guides" };
export default function Guides() {
  return <section className="section guides inner-page"><div className="wrap"><div className="section-heading"><span className="section-kicker">LEARN & GROW</span><h1>Cocopeat does more than most growers realise.</h1><p>A few simple ways to use this versatile material.</p></div><div className="guide-grid">{guides.map(([category, title, description]) => <article className="guide-card" key={title}><span>{category}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}
