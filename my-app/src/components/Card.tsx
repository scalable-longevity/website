// components/Card.tsx
import { ReactNode } from "react";
import { clsx } from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        // frosted glass core
        "rounded-2xl bg-card/20 backdrop-blur-md",
        // light border + soft shadow
        "border border-white/30 shadow-soft",
        // spacing
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
