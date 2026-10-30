import { Navbar } from "@/components/Navbar";
import {
  About,
  Contact,
  Experience,
  FeaturedProject,
  Hero,
  Projects,
} from "@/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-5 text-sm text-muted sm:px-8">
          © {new Date().getFullYear()} Akintunde Adedoyin Afolabi
        </div>
      </footer>
    </div>
  );
}
