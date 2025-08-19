// components/UI.tsx
import { clsx } from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={clsx("mx-auto max-w-7xl px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Button({
  as = "button",
  href,
  children,
  intent = "primary",
  className,
}: {
  as?: "button" | "a" | "link";
  href?: string;
  children: ReactNode;
  intent?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-brand px-5 py-3 text-sm font-medium transition-all";
  const styles = {
    // colored background → white text
    primary: "bg-brand text-white hover:opacity-90",
    secondary:
      "bg-muted text-foreground hover:bg-muted/80 border border-border/60",
    ghost: "text-foreground hover:bg-muted",
  } as const;

  if (as === "a" && href) {
    return (
      <a href={href} className={clsx(base, styles[intent], className)}>
        {children}
      </a>
    );
  }
  if (as === "link" && href) {
    return (
      <Link href={href} className={clsx(base, styles[intent], className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={clsx(base, styles[intent], className)}>
      {children}
    </button>
  );
}
