import { Button, Container } from "./UI";
import { Card } from "./Card";

export default function CTA() {
  return (
    <section className="mt-20 mb-24">
      <Container>
        <Card className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          <div>
            <div className="text-xl font-semibold text-white">
              Ready to add healthy years?
            </div>
            <p className="text-sm text-white/60 mt-1">
              Start your free trial. Cancel anytime.
            </p>
          </div>
          <Button as="a" href="/pricing">
            Get started
          </Button>
        </Card>
      </Container>
    </section>
  );
}
