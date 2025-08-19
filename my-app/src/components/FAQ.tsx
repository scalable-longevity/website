import { Container } from "./UI";
import { Card } from "./Card";

const faqs = [
  {
    q: "Is this a medical device?",
    a: "No. It’s a wellness product. We collaborate with professionals but do not diagnose.",
  },
  {
    q: "How do you estimate biological age?",
    a: "From your questionnaire and connected data, using validated proxies and confidence bands.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. You can export or delete data anytime.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold">Questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {faqs.map((f, i) => (
            <Card key={i}>
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-foreground/80">{f.a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
