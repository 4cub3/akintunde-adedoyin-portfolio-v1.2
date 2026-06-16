"use client"
import { profileSummary } from '@/app/db'
import { Title } from './Title'
import { motion } from "motion/react"
import { useState } from 'react'

export const About = () => {
    const [isSticky, setIsSticky] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onViewportEnter={() => {
                setIsSticky(true)
                window.location.hash = "#about"
            }}
            onViewportLeave={() => {
                setIsSticky(false)
                window.location.hash = "#experience"

            }}
            className='mt-20 lg:mt-26 w-full' id='about'
        >
            <Title isSticky={isSticky}>
                ABOUT
            </Title>
            <article className='px-15'>
                <ul className='flex flex-col gap-4'>

                    {profileSummary.map((item, idx) =>
                        <li key={idx}>
                            <p className='mt-10 text-zinc-50/50 text-[1.6rem]'>
                                {item}
                            </p>
                        </li>)}
                </ul>

            </article>
        </motion.div>
    )
}
