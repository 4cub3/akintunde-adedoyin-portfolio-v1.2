"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useInViewPause } from "@/lib/hooks/useInViewPause";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import { WireframeIcosahedron } from "./WireframeIcosahedron";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const active = useInViewPause(containerRef);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      pointer.current = { x, y };
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [isMobile, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden
    >
      {active ? (
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.4} />
          <WireframeIcosahedron
            detail={isMobile ? 0 : 1}
            reducedMotion={reducedMotion}
            enableTilt={!isMobile}
            pointer={pointer}
          />
        </Canvas>
      ) : null}
    </div>
  );
}
