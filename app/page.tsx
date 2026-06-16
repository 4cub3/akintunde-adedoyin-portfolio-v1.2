"use client"
import { About, Experience, Navigation, Projects } from "@/components";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [positions, setPosition] = useState({
    y: 0,
    x: 0
  })
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Convert cursor position to % of viewport, then offset by
    // half the blob size (40rem ≈ 20rem = ~16%) so it centres on the cursor
    const x = (e.clientX / window.innerWidth) * 100 - 16;
    const y = (e.clientY / window.innerHeight) * 100 - 16;
    setPosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])
  return (

    <div className="flex flex-col flex-1 bg-linear-to-br  overflow-hidden from-[#151426] scroll-smooth via-indigo-950 to-blue-950 font-sans relative">
       <div className={`w-200 h-200 lg:block hidden opacity-10 absolute  rounded-full blur-3xl bg-radial from-indigo-600/60 via-indigo-400/40 to-indigo-200/20`} style={{ top: `${positions.y}%`, left: `${positions.x}%` }}></div>
      <section className="grid md:grid-cols-7 md:overflow-hidden z-99 overflow-y-scroll  h-screen gap-6 max-w-[128.2rem] w-full mx-auto ">
        <div className="col-span-3 relative py-10 md:py-30">

          <Navigation />

        </div>
        <div className=" col-span-4 w-full space-y-40 md:overflow-y-scroll scroll-smooth scrollbar-none">
          <About />
          <Experience />
          <Projects />
        </div>
      </section>
    </div>
  );
}
