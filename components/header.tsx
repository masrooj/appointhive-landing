import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "./site-nav";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <Image src="/brand/logo.png" alt="AppointHive" width={1024} height={696} priority />
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
