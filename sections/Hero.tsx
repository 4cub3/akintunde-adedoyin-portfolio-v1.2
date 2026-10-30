"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { site } from "@/lib/content";

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]"
        aria-hidden
      />
      <HeroScene />

      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 md:py-28">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            {site.title}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {site.name}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {site.valueStatement}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#projects">View projects</Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
