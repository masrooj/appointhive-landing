"use client";

import { Calistoga, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { MissingPage } from "@/components/missing-page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({ weight: "400", subsets: ["latin"], variable: "--font-calistoga" });

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`}>
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="brand">
              <Image src="/brand/logo.png" alt="AppointHive" width={1024} height={696} priority />
            </Link>
            <nav className="nav-links" aria-label="Primary">
              <div className="nav-panel">
                <a href="/">Home</a>
                <a href="/#solution">Solutions</a>
                <a href="/#tour">Tour</a>
                <a href="/#ways">Product</a>
                <a href="/#product">Features</a>
                <a href="/#services">Services</a>
                <a href="/#contact">Contact</a>
              </div>
            </nav>
          </div>
        </header>
        <main id="main">
          <MissingPage
            kicker="Something went wrong"
            title="We lost that cut mid-way."
            lede="Refresh, or use the menu to get back to AppointHive."
            showReset
            onReset={reset}
          />
        </main>
      </body>
    </html>
  );
}
