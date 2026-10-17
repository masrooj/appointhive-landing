import type { Metadata } from "next";
import { headers } from "next/headers";
import { Calistoga, Inter } from "next/font/google";
import { CookieNotice } from "@/components/cookie-notice";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import {
  homeMetadata,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({ weight: "400", subsets: ["latin"], variable: "--font-calistoga" });

export const metadata: Metadata = homeMetadata();

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`}>
      <body data-nonce={nonce}>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={softwareApplicationJsonLd()} />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
