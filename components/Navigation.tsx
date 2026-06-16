"use client"

import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "@remixicon/react"
import { motion } from "motion/react"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

export const NavigationComponent = () => {
  const [hash, setHash] = useState("#about")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const handleHashChange = () => {
    setHash(window.location.hash)
  }
  useEffect(() => {
    setHash(window.location.hash)
    window.location.hash = "#about"
    window.addEventListener("hashchange", handleHashChange)
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [pathname, searchParams])

  const navItems = [
    {
      label: "About",
      hash: "about",
    },
    {
      label: "Experience",
      hash: "experience",
    },
    {
      label: "Projects",
      hash: "projects",
    },
  ]

  return (
    <aside className=" flex px-15  flex-col h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-4 space-y-1"
      >
        <h1 className="font-bold text-[4rem] text-zinc-100/80">
          Akintunde Adedoyin A.
        </h1>
        <p className="text-[1.6rem] font-semibold text-zinc-100/80">
          Frontend/Mobile engineer
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[1.6rem] text-zinc-50/40 max-w-120"
      >
        I build Amazing web Application and mobile application
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-20 hidden md:block space-y-4"
      >
        {navItems.map((item) => {
          const isActive = hash.includes(item.hash)
          const isHovered = hoveredItem === item.hash

          return (
            <motion.li
              key={item.hash}
              onHoverStart={() => setHoveredItem(item.hash)}
              onHoverEnd={() => setHoveredItem(null)}
              className={`text-zinc-50 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-40"
                } hover:opacity-100`}
            >
              <a href={`#${item.hash}`} className="flex items-center gap-4">
                <motion.hr
                  initial={false}
                  animate={{
                    width: isActive || isHovered ? 60 : 40,
                  }}
                  transition={{ duration: 0.2 }}
                  className="border-zinc-50"
                />

                {item.label}
              </a>
            </motion.li>
          )
        })}
      </motion.ul>
      <section className="mt-40 md:mt-auto flex items-center gap-2 ">
        <motion.a href="https://github.com/4cub3" target="blank" initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }}>
          <RiGithubFill className="text-zinc-100" />
        </motion.a>
        <motion.a href="https://linkedin.com/akintunde-adedoyin" target="blank" initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }}>
          <RiLinkedinBoxFill className="text-zinc-100" />
        </motion.a>

        <motion.a href="mailto:akintunde_afolabi@yahoo.com" initial={{ opacity: 0.5 }} whileHover={{ opacity: 1 }}>
          <RiMailFill   className="text-zinc-100" />
        </motion.a>
      </section>
    </aside>
  )
}

export  function Navigation() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <NavigationComponent />
    </Suspense>
  );
}