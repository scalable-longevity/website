// components/Hero.tsx
import { Button } from "./UI";

export default function Hero() {
  return (
    <section className="">
      {/* Video box with rounded edges & margins */}
      <div className="relative overflow-hidden shadow-soft">
        <video
          className="h-[95vh] w-full object-cover"
          src="/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/bg-video.jpg"
          aria-hidden
        />
        {/* overlay for legibility */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text content overlay: center-left but tucked closer */}
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
