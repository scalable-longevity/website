"use client";
import { Container, Button } from "@/components/UI";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-foreground/80">
        We’ll reply within 2–3 business days.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-6 max-w-xl space-y-4"
      >
        <input
          required
          placeholder="Your name"
          className="w-full rounded-2xl bg-card/40 backdrop-blur-md border border-white/30 shadow-soft p-4"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-2xl bg-card/40 backdrop-blur-md border border-white/30 shadow-soft p-4"
        />
        <textarea
          required
          placeholder="How can we help?"
          className="w-full rounded-2xl bg-card/40 backdrop-blur-md border border-white/30 shadow-soft p-4 h-36"
        />
        <Button as="button">{sent ? "Sent ✓" : "Send message"}</Button>
      </form>
    </Container>
  );
}
