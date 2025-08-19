// app/fonts.ts
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [{ path: "../../public/fonts/Satoshi-Variable.woff2", weight: "100 900", style: "normal" }],
  display: "swap",
  variable: "--font-satoshi",
});
