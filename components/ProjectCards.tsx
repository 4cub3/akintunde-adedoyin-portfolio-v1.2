import { Projects } from '@/app/db';
import { RiExternalLinkLine } from '@remixicon/react';
import Image from 'next/image';
import { motion } from "motion/react"


type Props = { project: Projects }

export const ProjectCard = ({ project }: Props) => (
    <motion.a href={project.link}
        target="_blank" rel="noopener noreferrer" className='flex group-hover:bg-white/5 group-hover:border-t group-hover:border-t-white/10 border-t border-t-transparent group-hover:backdrop-blur-2xl  p-6 rounded-lg flex-col-reverse transition-all duration-300 md:flex-row items-start gap-10'>
        <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={48}
            style={{ objectFit: "cover" }}
            className='w-auto h-auto md:w-[200px] md:h-[120px] object-cover'
        />

        <article className='text-[1.6rem] '>
            <h3 className='text-zinc-50/70 flex items-center gap-2 group-hover:text-indigo-600 transition-all duration-300'> {project.title} <RiExternalLinkLine className='scale-60 transition-all duration-300 group-hover:scale-90'/></h3>
            <p className='text-zinc-50/40'>{project.description}</p>
        </article>
    </motion.a>
);