export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
