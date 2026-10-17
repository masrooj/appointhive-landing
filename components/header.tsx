import Image from "next/image";
import Link from "next/link";
import { InstagramButton } from "./instagram-button";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <Image src="/brand/logo.png" alt="AppointHive" width={1024} height={696} priority />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <InstagramButton />
          <Link className="btn btn-lime btn-small" href="/#contact">
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
