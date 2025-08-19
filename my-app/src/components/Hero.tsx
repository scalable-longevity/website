// components/Hero.tsx
import { Button, Container } from "./UI";

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/bg-video.jpg" // optional: add this file in /public
        aria-hidden
      />
      {/* Subtle dark overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Content */}
      <Container className="min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight drop-shadow">
            Lower your biological age.
            <span className="block text-white/90">Add healthy years.</span>
          </h1>

          <p className="mt-5 text-white/90 max-w-prose drop-shadow">
            Personalized insights, life-path projections, and a habit engine
            that helps changes stick—designed with physicians, trainers, and
            you.
          </p>

          <div className="mt-7 flex gap-3">
            {/* Primary button already uses white text (from your Button component) */}
            <Button as="link" href="/pricing">
              Get started
            </Button>

            {/* Secondary button: glassy white-on-video for contrast */}
            <Button
              as="link"
              href="/product"
              intent="secondary"
              className="bg-white/15 border-white/30 text-white hover:bg-white/25 backdrop-blur"
            >
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
