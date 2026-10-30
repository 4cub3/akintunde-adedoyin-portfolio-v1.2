import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { about } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <Container>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          About
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn className="space-y-6">
            <h2
              id="about-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              {about.headline}
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {about.paragraph}
            </p>

            <div>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                What I bring
              </h3>
              <ul className="space-y-3">
                {about.bring.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.05} className="space-y-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {about.stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-lg border border-border bg-surface px-4 py-5"
                >
                  <p className="text-sm font-medium text-foreground">{stat}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                Skills
              </h3>
              <ul className="flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
