import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { phone } from "../components/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Explore Persevex chicken, mutton and meat cuts for home cooking, restaurants and catering, alongside fruits, vegetables and growing essentials.",
};

export default function About() {
  return <>
    <section className="section about inner-page"><div className="wrap split">
      <div><span className="section-kicker">ABOUT PERSEVEX</span><h1>Good meals begin with the right ingredients.</h1><p className="lead">Chicken, mutton and meat cuts for everyday kitchens and bigger occasions.</p><p>At Persevex, meat is at the heart of our food range. We offer chicken, mutton and other meat cuts for household meals, restaurant menus and catering requirements, alongside fruits and vegetables that help complete your shopping list.</p><p>Every kitchen has different needs. Whether you are preparing a family curry, planning a biryani for a gathering or buying for a commercial kitchen, tell us the cuts, quantities and preparation you prefer so we can discuss a suitable order.</p><div className="button-row"><Link className="button primary" href="/products">Explore our meat & produce</Link><a className="button outline" href={`tel:${phone}`}>Call {phone}</a></div></div>
      <div className="about-meat-image"><Image src="/meat-veg-prod/mutton.jpeg" alt="Mutton cuts from the Persevex meat range" fill sizes="(max-width: 720px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div>
    </div></section>
    <section className="section process-section about-story"><div className="wrap"><div className="section-heading"><span className="section-kicker">OUR MEAT RANGE</span><h2>Choose the meat to match your menu.</h2><p>From quick weekday dishes to meals that take their time, start with the product and cut that suit your recipe.</p></div><div className="process-grid">
      <article className="process-card"><h3>Chicken</h3><p>Chicken is a versatile choice for curries, grilling, roasting and everyday meal preparation. Share your preference for bone-in or boneless portions, the cuts you need and the quantity for your household or kitchen.</p><p className="text-link">₹500 per kg</p><Link className="text-link" href="/products/mixed-meat">Explore chicken →</Link></article>
      <article className="process-card"><h3>Mutton</h3><p>Plan mutton curries, biryanis, stews and slow-cooked dishes around your preferred portions. Tell us your cut and preparation requirements when enquiring, whether you are cooking for family or catering for a larger gathering.</p><p className="text-link">₹1,000 per kg</p><Link className="text-link" href="/products/mutton">Explore mutton →</Link></article>
      <article className="process-card"><h3>Other meat cuts</h3><p>For recipes or menus with specific meat requirements, discuss the meat type, cut and portion size with our team. Availability and preparation are confirmed for your enquiry, helping you plan the quantities your kitchen needs.</p><Link className="text-link" href="/products/meat-cuts">Explore meat cuts →</Link></article>
    </div></div></section>
    <section className="section about-story"><div className="wrap split"><div><span className="section-kicker">HOME & BULK ORDERS</span><h2>Tell us what your kitchen needs.</h2><p>We welcome enquiries from households, restaurants, caterers and businesses. A family meal and a busy service call for different quantities and portions; sharing those details helps us discuss the right selection with you.</p><p>Include the product, weight in kilograms, preferred cuts, bone-in or boneless requirements, delivery location and preferred date. For larger orders, add any portioning or packing preferences so availability and arrangements can be confirmed.</p><Link className="text-link" href="/contact">Discuss your order →</Link></div><div><span className="section-kicker">BEYOND THE MEAT COUNTER</span><h2>Produce and growing essentials, too.</h2><p>Complete your ingredient list with fruits and vegetables, from apples, bananas and oranges to potatoes, peppers and seasonal assortments. Browse individual products or share a produce list for a larger kitchen order.</p><p>Our agricultural range includes cocopeat for gardening and growing systems, and coir fiber for manufacturing applications. These materials make practical use of coconut husk, connecting our wider range with the growers and businesses who use them.</p><Link className="text-link" href="/products">Browse the full range →</Link></div></div></section>
    <section className="cta-band"><div className="wrap"><h2>Planning your next meat order?</h2><p>Talk to us about chicken, mutton, preferred cuts and quantities for your home or business.</p><a className="button light" href={`tel:${phone}`}>Call {phone}</a></div></section>
  </>;
}
