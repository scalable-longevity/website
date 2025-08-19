import { Button, Container } from "./UI";
import { Card } from "./Card";

export default function Pricing() {
  return (
    <section className="mt-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold">Simple pricing</h2>
        <p className="mt-2 text-foreground/80">
          Cancel anytime. No ads. Privacy-first.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-medium text-foreground/70">
              Starter
            </div>
            <div className="mt-2 text-3xl font-semibold">Free</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Core insights</li>
              <li>• 1–2 habits, no reminders</li>
              <li>• Limited analyzer</li>
            </ul>
            <Button as="a" href="/contact" className="mt-6" intent="secondary">
              Try Starter
            </Button>
          </Card>

          <Card>
            <div className="text-sm font-medium text-foreground/70">Full</div>
            <div className="mt-2 text-3xl font-semibold">€ 30/month</div>
            <ul className="mt-4 space-y-2 text-sm">
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
