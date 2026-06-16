"use client"
import { motion } from "motion/react"
import { Title } from "./Title"
import { useState } from "react"
import { experiences } from "@/app/db"
import { ExperienceItem } from "./ExperienceItem"
import { RiExternalLinkLine } from "@remixicon/react"

export const Experience = () => {
    const [isSticky, setIsSticky] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                id="experience"
                onViewportEnter={() => {
                    setIsSticky(true)
                    window.location.hash = "#experience"
                }}
                onViewportLeave={() => {
                    setIsSticky(false)
                }}
            >
                <Title isSticky={isSticky}>
                    Experience
                </Title>
                <ul className="px-15 space-y-20">
                    {experiences.map((item, idx) => (
                        <li key={idx} className="group">
                            <ExperienceItem {...item} />
                        </li>
                    ))}
                </ul>
            </motion.div>
            <footer className="my-10 px-15">
                <a href="/file/Akintunde-Adedoyin-Afolabi-CV.pdf" download={"Akintunde_Adedoyin_Afolabi.pdf"} className="capitalize flex gap-4 items-center text-zinc-50">
                    View Full resume <RiExternalLinkLine />
                </a>
            </footer>
        </motion.div>
    )
}