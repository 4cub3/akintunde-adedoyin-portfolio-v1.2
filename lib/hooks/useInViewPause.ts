"use client";

import { useEffect, useState, type RefObject } from "react";

/** Returns true when the element is in view AND the document tab is visible. */
export function useInViewPause(ref: RefObject<Element | null>) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let inView = true;
    let visible = !document.hidden;

    const sync = () => setActive(inView && visible);

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    observer.observe(node);

    const onVisibility = () => {
      visible = !document.hidden;
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [ref]);

  return active;
}
