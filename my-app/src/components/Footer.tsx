import { Container } from "./UI";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <Container className="py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">Morrow</div>
          <p className="mt-3 text-sm text-foreground/70">
            Evidence-based longevity for everyday life.
          </p>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/press">Press</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/product">Features</Link>
            </li>
            <li>
              <Link href="/science">Science</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border/60">
        <Container className="py-6 text-sm text-foreground/70">
          © {new Date().getFullYear()} Morrow. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
