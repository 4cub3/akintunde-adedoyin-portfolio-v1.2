import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Where I've shipped"
          />
        </FadeIn>

        <ol className="relative space-y-0 border-l border-border pl-6 md:pl-8">
          {experiences.map((item, index) => (
            <FadeIn
              key={`${item.company}-${item.year}`}
              as="li"
              delay={index * 0.04}
              className="relative pb-12 last:pb-0"
            >
              <span
                className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background md:-left-[2.4rem]"
                aria-hidden
              />
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                {item.year}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {item.company}
                </Link>
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">{item.role}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
