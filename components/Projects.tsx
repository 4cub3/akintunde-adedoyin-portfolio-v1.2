"use client"
import { motion } from "motion/react"
import { useState } from "react"
import { Title } from "./Title"
import { PROJECT_DATA } from "@/app/db"
import { ProjectCard } from "./ProjectCards"


export const Projects = () => {
    const [isSticky, setIsSticky] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-20"
            >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                id="projects"
                onViewportEnter={() => {
                    setIsSticky(true)
                    window.location.hash = "#projects"
                }}
                onViewportLeave={() => {
                    setIsSticky(false)
                }}
            >
                <Title isSticky={isSticky}>
                    Projects
                </Title>
                <div className='px-15 mt-10 '>
                    <ul className="">
                        {PROJECT_DATA.map((item,idx)=>(<li key={idx} className="group">
                            <ProjectCard project={item}/>
                        </li>))}
                    </ul>
                </div>
            </motion.div>
        </motion.div >
    )
}