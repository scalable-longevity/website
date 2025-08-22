import { Container } from "./UI";
import { Card } from "./Card";

const features = [
  {
    title: "Insight Hub",
    desc: "Know what actually drives aging for you. Clear explanations, no jargon.",
  },
  {
    title: "Life Path Analyzer",
    desc: "Simulate habits to see your projected healthy years change, in real time.",
  },
  {
    title: "Habit Engine",
    desc: "Turn insights into daily action. Reminders, streak protection, and gentle nudges.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="mt-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Built for lasting change
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <div className="mt-3 font-semibold  text-white">{f.title}</div>
              <p className="mt-2 text-sm text-white/60">{f.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
