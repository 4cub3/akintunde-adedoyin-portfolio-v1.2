import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Selected work"
            description="Strongest client products first, followed by additional shipped work."
          />
        </FadeIn>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              as="li"
              delay={Math.min(index * 0.03, 0.12)}
              className={`group h-full overflow-hidden rounded-xl border bg-surface transition-colors duration-300 ease-out hover:border-accent/50 ${
                project.elevated
                  ? "border-accent/30 sm:col-span-1"
                  : "border-border"
              }`}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
              >
                <div
                  className={`relative w-full overflow-hidden border-b border-border bg-background ${
                    project.elevated ? "aspect-[16/10]" : "aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {project.elevated ? (
                    <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-accent">
                      Highlight
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
