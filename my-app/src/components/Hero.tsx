// components/Hero.tsx
import { Button } from "./UI";

export default function Hero() {
  return (
    <section className="relative hero-section">
      {/* Video box */}
      <div className="relative overflow-hidden shadow-soft">
        <video
          className="h-[95vh] w-full object-cover"
          src="/videos/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/bg-video.jpg"
          aria-hidden
        />
        {/* legibility scrim */}
        <div className="absolute inset-0" />
        {/* fade to hero-bottom color (so it morphs to the page gradient) */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-b from-transparent" />

        {/* Text overlay: center-left */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-8 md:ml-12 max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight drop-shadow">
              Lower your <br />
              biological Age.
              <span className="block text-brand/90">Add healthy years.</span>
            </h1>

            <p className="mt-5 text-white/90 max-w-prose drop-shadow">
              Personalized insights, life-path projections, and a habit engine
              that helps changes stick — designed with physicians, trainers, and
              you.
            </p>

            <div className="mt-7 flex gap-3">
              <Button as="link" href="/pricing">
                Get started
              </Button>
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
        </div>
      </div>
    </section>
  );
}
