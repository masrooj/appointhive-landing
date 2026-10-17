import Image from "next/image";
import Link from "next/link";
import { legalNav } from "@/content/site";
import { InstagramButton } from "./instagram-button";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src="/brand/logo.png" alt="AppointHive" width={1024} height={696} />
          <p>
            <a href="mailto:hello@appointhive.com">hello@appointhive.com</a>
          </p>
          <InstagramButton />
        </div>
        <nav className="legal-links" aria-label="Legal">
          {legalNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
