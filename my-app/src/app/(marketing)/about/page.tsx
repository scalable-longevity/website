import { Container } from "@/components/UI";
export default function About() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold">About {`Morrow`}</h1>
      <p className="mt-3 text-foreground/80 max-w-prose">
        We’re a small team of designers, doctors, and operators building tools
        that help everyday people add healthy years—without hype.
      </p>
    </Container>
  );
}
