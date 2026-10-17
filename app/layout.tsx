import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import { CookieNotice } from "@/components/cookie-notice";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteOrigin } from "@/lib/links";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({ weight: "400", subsets: ["latin"], variable: "--font-calistoga" });

const title = "AppointHive — booking, staff floor ops, and revenue for salons";
const description =
  "AppointHive installs booking, the live floor, and staff pay for one salon. Write to hello@appointhive.com.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: title,
    template: "%s · AppointHive",
  },
  description,
  applicationName: "AppointHive",
  keywords: [
    "salon booking software",
    "barber shop appointment system",
    "salon queue management",
    "salon payroll software",
    "multi-location salon booking",
  ],
  openGraph: {
    title,
    description,
    siteName: "AppointHive",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`}>
      <body>
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
