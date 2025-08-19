import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, Button } from "@/components/UI";
import { Card } from "@/components/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Book — ${site.name}`,
  description:
    "The companion book to our longevity approach—learn the principles, then turn them into action with the app.",
  openGraph: {
    title: `Book — ${site.name}`,
    description:
      "The companion book to our longevity approach—learn the principles, then turn them into action with the app.",
    type: "website",
  },
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 md:pt-20">
        <Container className="grid items-center gap-10 md:grid-cols-[1fr,1.1fr]">
          {/* Book cover placeholder — replace with your image later */}
          <div>
            <div
              className="bg-card border border-border rounded-2xl shadow-soft overflow-hidden"
              aria-label="Book cover placeholder"
            >
              <div className="aspect-[3/4] w-full bg-image-placeholder flex items-center justify-center"></div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="text-brand text-sm font-medium tracking-wide">
              From {site.name}
            </div>
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
              The Small Change Advantage
            </h1>
            <p className="mt-4 text-foreground/80 max-w-prose">
              A practical guide to lowering your biological age by turning
              evidence into daily habits. Learn the core ideas behind our{" "}
              <strong>Insight Hub</strong>, <strong>Life Path Analyzer</strong>,
              and <strong>Habit Engine</strong>—then bring them to life in the
              app.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="link" href="/pricing">
                Start your free trial
              </Button>
              <Button as="link" intent="secondary" href="/product">
                See how the app works
              </Button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
              <div className="bg-card border border-border rounded-2xl p-4">
                <div className="font-medium">Insight</div>
                <p className="mt-1 text-foreground/70">
                  What really moves aging for you—without hype.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-4">
                <div className="font-medium">Projection</div>
                <p className="mt-1 text-foreground/70">
                  See your healthspan trajectory and how it can change.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-4">
                <div className="font-medium">Action</div>
                <p className="mt-1 text-foreground/70">
                  Habits that stick—reminders, streaks, gentle nudges.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What you'll learn */}
      <section className="mt-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">
            What you’ll learn
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <div className="font-semibold">Biological age, simply</div>
              <p className="mt-2 text-sm text-foreground/80">
                Understand the key drivers—sleep regularity, aerobic base,
                strength, nutrition pattern—and how they interact.
              </p>
            </Card>
            <Card>
              <div className="font-semibold">From insight to plan</div>
              <p className="mt-2 text-sm text-foreground/80">
                Turn “what matters” into a personal plan with realistic
                intensity and fallback micro-habits.
              </p>
            </Card>
            <Card>
              <div className="font-semibold">Outcome tracking</div>
              <p className="mt-2 text-sm text-foreground/80">
                Measure progress with simple signals and avoid common adherence
                traps.
              </p>
            </Card>
            <Card>
              <div className="font-semibold">Sustainable change</div>
              <p className="mt-2 text-sm text-foreground/80">
                Use small steps, streak protection, and weekly reviews to
                compound gains.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* App bridge (from book → product) */}
      <section className="mt-16">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="text-sm font-medium text-foreground/70">
              Bring the book to life
            </div>
            <div className="mt-2 text-xl font-semibold">
              Try your plan in the app today
            </div>
            <p className="mt-2 text-sm text-foreground/80 max-w-prose">
              Build your habit plan in minutes, see your projected healthy
              years, and let gentle reminders keep you on track.
            </p>
            <div className="mt-5 flex gap-3">
              <Button as="link" href="/pricing">
                Start free trial
              </Button>
              <Button as="link" intent="secondary" href="/product">
                Explore features
              </Button>
            </div>
          </Card>

          {/* Simple “life path” visual to echo the book’s concept */}
          <Card className="p-0 overflow-hidden">
            <div className="p-4 pb-0">
              <div className="text-sm font-medium">
                Your Life Path (example)
              </div>
            </div>
            <svg viewBox="0 0 460 180" className="w-full h-[180px]">
              <rect
                x="0"
                y="0"
                width="460"
                height="180"
                fill="var(--color-muted)"
              />
              <polyline
                points="10,150 70,148 130,146 190,147 250,150 310,156 370,165 430,172"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                opacity="0.35"
              />
              <polyline
                points="10,145 70,138 130,130 190,122 250,114 310,108 370,102 430,98"
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth="4"
              />
            </svg>
            <div className="px-4 pb-4 text-xs text-foreground/70">
              Improve sleep & activity → projected +3.6 healthy years
            </div>
          </Card>
        </Container>
      </section>

      {/* Testimonial / credibility (optional placeholder) */}
      <section className="mt-16">
        <Container>
          <Card className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] items-center">
              <div>
                <div className="text-sm font-medium text-foreground/70">
                  Reader feedback
                </div>
                <blockquote className="mt-2 text-lg">
                  “Clear, compassionate, and practical. It finally made
                  longevity feel doable.”
                </blockquote>
                <div className="mt-2 text-sm text-foreground/70">
                  — Early reviewer
                </div>
              </div>
              <div className="bg-muted rounded-2xl p-4 border border-border text-sm text-foreground/70">
                <div className="font-medium">What readers get</div>
                <ul className="mt-2 space-y-1">
                  <li>• Plain-language explanations</li>
                  <li>• Habit templates that fit busy weeks</li>
                  <li>• A companion app that turns insight into action</li>
                </ul>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="mt-16 mb-24">
        <Container>
          <Card className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8">
            <div>
              <div className="text-xl font-semibold">
                Turn the ideas into results
              </div>
              <p className="text-sm text-foreground/80 mt-1">
                Start your free trial—cancel anytime.
              </p>
            </div>
            <div className="flex gap-3">
              <Button as="link" href="/pricing">
                Start free trial
              </Button>
              <Button as="link" intent="secondary" href="/product">
                Learn more
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      {/* Micro-footer prompt back to site */}
      <section className="mb-10">
        <Container className="text-center text-sm text-foreground/70">
          Prefer the full site?{" "}
          <Link className="text-brand underline" href="/">
            Go to {site.name} home
          </Link>
          .
        </Container>
      </section>
    </>
  );
}
