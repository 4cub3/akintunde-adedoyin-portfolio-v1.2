"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import {
  featuredProjects,
  type FeaturedCaseStudy,
  type FeaturedSlide,
} from "@/lib/content";

export function FeaturedProject() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const project = featuredProjects[projectIndex];
  const slides = project.slides;
  const active = slides[slideIndex];

  const selectProject = (next: number) => {
    setProjectIndex(next);
    setSlideIndex(0);
  };

  const goTo = useCallback(
    (next: number) => {
      setSlideIndex((next + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest("input, textarea, select, [contenteditable=true]")
      ) {
        return;
      }
      if (event.key === "ArrowRight") goTo(slideIndex + 1);
      if (event.key === "ArrowLeft") goTo(slideIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, slideIndex]);

  return (
    <section
      id="featured"
      className="scroll-mt-24 border-t border-border py-20 md:py-28"
      aria-labelledby="featured-heading"
    >
      <Container>
        <FadeIn>
          <div className="mb-8 space-y-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Featured projects
              </p>
              <h2
                id="featured-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Case studies
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Deep dives into production platforms I led or took over and kept
                shipping.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Featured case studies"
            >
              {featuredProjects.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === projectIndex}
                  aria-controls="featured-case-panel"
                  id={`featured-project-${item.id}`}
                  onClick={() => selectProject(index)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ease-out ${
                    index === projectIndex
                      ? "bg-accent text-white"
                      : "border border-border text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {item.shortName}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div
            id="featured-case-panel"
            role="tabpanel"
            aria-labelledby={`featured-project-${project.id}`}
          >
            <CaseStudy
              key={project.id}
              project={project}
              slideIndex={slideIndex}
              active={active}
              reducedMotion={!!reducedMotion}
              onSelectSlide={setSlideIndex}
              onPrev={() => goTo(slideIndex - 1)}
              onNext={() => goTo(slideIndex + 1)}
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function CaseStudy({
  project,
  slideIndex,
  active,
  reducedMotion,
  onSelectSlide,
  onPrev,
  onNext,
}: {
  project: FeaturedCaseStudy;
  slideIndex: number;
  active: FeaturedSlide;
  reducedMotion: boolean;
  onSelectSlide: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="text-sm text-muted">
            {project.role} · {project.client}
          </p>
          {project.context ? (
            <p className="text-sm leading-relaxed text-muted/90">
              {project.context}
            </p>
          ) : null}
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label={`${project.shortName} views`}
        >
          {project.slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === slideIndex}
              aria-controls="featured-slide-panel"
              id={`featured-tab-${project.id}-${slide.id}`}
              onClick={() => onSelectSlide(index)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ease-out ${
                index === slideIndex
                  ? "border border-accent/40 bg-accent-soft text-accent"
                  : "border border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>

      <div
        id="featured-slide-panel"
        role="tabpanel"
        aria-labelledby={`featured-tab-${project.id}-${active.id}`}
        className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
      >
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_0_0_1px_rgba(59,130,246,0.08)]">
            <div className="relative aspect-[16/10] bg-background">
              {project.slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                    index === slideIndex
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={index !== slideIndex}
                >
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 640px"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background/80 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-md border border-border/60 bg-background/90 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur-sm">
                {active.title}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                aria-label="Previous slide"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                aria-label="Next slide"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {project.slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => onSelectSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                    index === slideIndex
                      ? "w-8 bg-accent"
                      : "w-1.5 bg-border hover:bg-muted"
                  }`}
                  aria-label={`Show ${slide.label}`}
                />
              ))}
            </div>

            <p className="min-w-12 text-right text-sm text-muted">
              {String(slideIndex + 1).padStart(2, "0")} /{" "}
              {String(project.slides.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${project.id}-${active.id}-details`}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col"
          >
            <SlideDetails slide={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function SlideDetails({ slide }: { slide: FeaturedSlide }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {slide.label}
      </p>
      <h4 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {slide.title}
      </h4>
      <p className="mt-3 text-base leading-relaxed text-muted">{slide.summary}</p>

      <dl className="mt-8 space-y-5">
        <Detail term="Problem" detail={slide.problem} />
        <Detail term="What I built" detail={slide.built} />
        <Detail term="Result" detail={slide.result} muted />
      </dl>

      <div className="mt-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {slide.highlightsLabel}
        </p>
        <ol className="grid grid-cols-2 gap-2">
          {slide.highlights.map((item) => (
            <li
              key={item.detail}
              className="rounded-xl border border-border bg-background/80 px-3 py-3"
            >
              <span className="block text-[11px] font-medium text-accent">
                {item.label}
              </span>
              <span className="mt-1 block text-sm text-foreground">
                {item.detail}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {slide.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-6">
        <Button href={slide.link.href}>{slide.link.label}</Button>
      </div>
    </div>
  );
}

function Detail({
  term,
  detail,
  muted = false,
}: {
  term: string;
  detail: string;
  muted?: boolean;
}) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
        {term}
      </dt>
      <dd
        className={`mt-1.5 text-sm leading-relaxed ${
          muted ? "text-muted" : "text-foreground/90"
        }`}
      >
        {detail}
      </dd>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M10 3.5L5.5 8L10 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
