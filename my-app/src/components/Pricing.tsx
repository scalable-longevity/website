import { Button, Container } from "./UI";
import { Card } from "./Card";

export default function Pricing() {
  return (
    <section className="mt-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Simple pricing
        </h2>
        <p className="mt-2  text-white/60">
          Cancel anytime. No ads. Privacy-first.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-medium text-white/70">Starter</div>
            <div className="mt-2 text-3xl font-semibold text-white">Free</div>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>• Core insights</li>
              <li>• 1–2 habits, no reminders</li>
              <li>• Limited analyzer</li>
            </ul>
            <Button as="a" href="/contact" className="mt-6" intent="secondary">
              Try Starter
            </Button>
          </Card>

          <Card>
            <div className="text-sm font-medium text-white/70">Full</div>
            <div className="mt-2 text-3xl font-semibold text-white">
              € 30/month
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>• Habit Engine with reminders</li>
              <li>• Full Life Path Analyzer</li>
              <li>• Weekly reviews & reports</li>
            </ul>
            <Button as="a" href="/pricing" className="mt-6">
              Start 14-day trial
            </Button>
          </Card>
        </div>
      </Container>
    </section>
  );
}
