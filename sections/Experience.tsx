import Link from "next/link";
import { Container } from "@/components/Container";
import { education, experiences } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-border py-16 md:py-24"
      aria-labelledby="work-heading"
    >
      <Container>
        <h2
          id="work-heading"
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          work.
        </h2>

        <ol className="mt-10 max-w-3xl space-y-10">
          {experiences.map((item) => (
            <li key={`${item.company}-${item.year}`}>
              <p className="text-sm text-muted">{item.year}</p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                >
                  {item.company}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          education.
        </h2>
        <ul className="mt-10 max-w-3xl space-y-8">
          {education.map((item) => (
            <li key={item.credential}>
              <h3 className="text-xl font-semibold text-foreground">
                {item.credential}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.school}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
