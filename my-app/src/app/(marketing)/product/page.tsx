import { Container } from "@/components/UI";
import { Card } from "@/components/Card";

export default function Product() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold">Product</h1>
      <p className="mt-3 text-foreground/80 max-w-prose">
        Insight Hub, Life Path Analyzer, and Habit Engine—designed for
        sustainable change.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card>
          <div className="font-semibold">Insight Hub</div>
          <p className="mt-2 text-sm">Explainers tailored to your risks.</p>
        </Card>
        <Card>
          <div className="font-semibold">Analyzer</div>
          <p className="mt-2 text-sm">
            Simulate habits. See projected healthy years.
          </p>
        </Card>
        <Card>
          <div className="font-semibold">Habit Engine</div>
          <p className="mt-2 text-sm">
            Reminders, streak protection, weekly reviews.
          </p>
        </Card>
      </div>
    </Container>
  );
}
