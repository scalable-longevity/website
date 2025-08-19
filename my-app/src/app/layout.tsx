// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { site } from "../lib/site";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://scalable-longevity.de"),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* gradient begins AFTER the hero height */}
        <div className="min-h-screen sunrise-bg flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
