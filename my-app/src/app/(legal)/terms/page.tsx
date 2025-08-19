import { Container } from "@/components/UI";
export default function Terms() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p className="mt-3 text-foreground/80 max-w-prose">
        By using {`Morrow`}, you agree to these terms. (Add your full terms
        here.)
      </p>
    </Container>
  );
}
