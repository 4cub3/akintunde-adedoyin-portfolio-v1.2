import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-blue-500 border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent",
  ghost:
    "bg-transparent text-muted hover:text-accent border border-transparent",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-out ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const external = props.href.startsWith("http") || props.href.startsWith("mailto:");
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target ?? (external ? "_blank" : undefined)}
        rel={props.rel ?? (external ? "noopener noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      aria-label={buttonProps["aria-label"]}
    >
      {children}
    </button>
  );
}
