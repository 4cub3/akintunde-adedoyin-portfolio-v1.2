import { Container } from "@/components/Container";
import { site } from "@/lib/content";

const links = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Resume", href: site.resume },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <Container>
        <h2
          id="contact-heading"
          className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          contact.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Open to senior frontend roles and product collaborations across web
          and mobile.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") || link.href.startsWith("/") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") || link.href.startsWith("/")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
