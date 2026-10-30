import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiFileTextLine,
} from "@remixicon/react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    detail: site.email,
    icon: RiMailFill,
  },
  {
    label: "GitHub",
    href: site.github,
    detail: "github.com/4cub3",
    icon: RiGithubFill,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    detail: "Adedoyin Akintunde",
    icon: RiLinkedinBoxFill,
  },
  {
    label: "Resume",
    href: site.resume,
    detail: "Download PDF",
    icon: RiFileTextLine,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Get in touch"
            description="Open to senior frontend roles and product collaborations across web and mobile."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors duration-300 ease-out hover:border-accent/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="block text-sm text-muted">{link.detail}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-8">
            <Button href={`mailto:${site.email}`}>Email me</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
