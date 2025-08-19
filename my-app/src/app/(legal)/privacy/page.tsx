import { Container } from "@/components/UI";
export default function Privacy() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-3 text-foreground/80 max-w-prose">
        We’re privacy-first. You can export or delete your data anytime. (Add
        your full policy here.)
      </p>
    </Container>
  );
}
