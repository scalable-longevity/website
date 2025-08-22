export default function Logo({ size = 25 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block rounded-full bg-sunrise-gradient"
        aria-hidden
        style={{ width: size, height: size }}
      />
      <span className="font-semibold text-2xl tracking-tight text-black">
        ENDURA
      </span>
    </div>
  );
}
