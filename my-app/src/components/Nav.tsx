"use client";

import Link from "next/link";
import { site } from "../lib/site";
import { Button, Container } from "./UI";
import Logo from "./Logo";
import { useState } from "react";
import { clsx } from "clsx";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/40 backdrop-blur border-b border-border/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/80 hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Button as="link" href={site.cta.href}>
            {site.cta.label}
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-brand p-2 hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden border-t border-border/60 bg-background/95 backdrop-blur",
          open ? "block" : "hidden"
        )}
      >
        <Container className="py-3 flex flex-col gap-3">
          {site.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              {n.label}
            </Link>
          ))}
          <Button as="link" href={site.cta.href} className="mt-2">
            Get started
          </Button>
        </Container>
      </div>
    </header>
  );
}
