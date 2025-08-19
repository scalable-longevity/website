export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block rounded-full"
        style={{ width: size, height: size, background: "hsl(var(--brand))" }}
        aria-hidden
      />
      <span className="font-semibold tracking-tight">Morrow</span>
    </div>
  );
}
