import { Experience } from '@/app/db'
import { Badge } from './Badge'
import { RiExternalLinkLine } from '@remixicon/react'
type Props = Experience & {

}

export const ExperienceItem = ({ year, company, role, description, tools, link }: Props) => {
    return (
        <a href={link} target='blank'>
            <section className='md:grid grid-cols-3 gap-6 text-[1.6rem] flex group-hover:bg-white/5 group-hover:border-t group-hover:border-t-white/10 border-t border-t-transparent group-hover:backdrop-blur-2xl  p-6 rounded-lg flex-col-reverse transition-all duration-300 md:flex-row items-start'>
                <label htmlFor="experience" className='uppercase text-zinc-50/40 '>
                    {year}
                </label>
                <article className='space-y-5 col-span-2'>
                    <div className='space-y-2'>
                        <h3 className='font-semibold text-zinc-100 flex items-center gap-2'>{company} <RiExternalLinkLine className='scale-60 transition-all duration-300 group-hover:scale-90' /></h3>
                        <p className='capitalize text-zinc-50/40 '>{role}</p>
                    </div>
                    <p className='text-zinc-50/50'>{description}</p>
                    <ul className='flex items-center flex-wrap gap-6 opacity-90'>
                        {tools.map((item, idx) => <Badge key={idx} label={item} />)}

                    </ul>
                </article>
            </section>
        </a>
    )
}