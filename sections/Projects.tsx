import Image from "next/image";
import { Container } from "@/components/Container";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border py-16 md:py-24"
      aria-labelledby="projects-heading"
    >
      <Container>
        <h2
          id="projects-heading"
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          projects.
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div className="relative aspect-[16/10] w-full border-b border-border bg-background">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="text-xs leading-relaxed text-muted">
                  {project.tech.join(" · ")}
                </p>
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
