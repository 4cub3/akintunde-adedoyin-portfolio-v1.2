import { Container } from "@/components/Container";
import { site } from "@/lib/content";

export function Intro() {
  return (
    <section id="top" className="pt-16 pb-4 md:pt-24 md:pb-8">
      <Container>
        <p className="text-sm text-muted">{site.title}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {site.valueStatement}
        </p>
      </Container>
    </section>
  );
}
