import Link from "next/link";
import Image from "next/image";
import { email } from "./site-data";

const footerAddress = [
  ["Building No./Flat No.", "No 9"],
  ["Road/Street", "5th block, 3rd phase"],
  ["Locality/Sub Locality", "2 Bhuvaneshwarinagar, Bsk 3rd stage"],
  ["City/Town/Village", "Bengaluru"],
  ["District", "Bengaluru Urban"],
  ["State", "Karnataka"],
  ["PIN Code", "560085"],
];

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <Image
              className="brand-logo"
              src="/logo-persevex-agro.png"
              alt="Persevex logo"
              width={299}
              height={400}
            />
            <span>
              <strong>Persevex</strong>
              <small>WHERE SUSTAINABLE MEETS GROWTH</small>
            </span>
          </Link>
          <p>Turning coconut husk into useful coir fiber and cocopeat.</p>
        </div>
        <div>
          <h4>EXPLORE</h4>
          <Link href="/about">About</Link>
          <Link href="/process">Our Process</Link>
          <Link href="/products">Products</Link>
          <Link href="/quality">Quality</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <h4>CONTACT</h4>
          <a href={`mailto:${email}`}>{email}</a>
          <address className="footer-address">
            {footerAddress.map(([label, value]) => (
              <span key={label}>
                <strong>{label}:</strong> {value}
              </span>
            ))}
          </address>
        </div>
      </div>
      <div className="wrap footer-bottom">
        © {new Date().getFullYear()} Persevex. All rights reserved.
      </div>
    </footer>
  );
}
