import { motion, useScroll } from "framer-motion"
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink = '/', time, address, work, style = {} }) => {
  const ref = useRef(null)
  return (
    <li ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
          <a style={style} href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px]  h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[28px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details position="IT technician" company="English House"
            style={{ pointerEvents: 'none' }}
            time="June 16 - September 16" address="Cairo"
            work="I worked as an IT technician, where my responsibilities involved all the technical related devices and other media related stuff. I was responsible for ensuring that the functionality were accurately efficiently."
          />
          <Details position="Graphic Designer" company="Upwork"
            companyLink="https://upwork.com/"
            time="June 16 - September 16" address="Freelance"
            work="I worked as a graphic designer involved proficiently using photoshop,indesign, and illustrator to create visually appealing designs such as book covers or business cards."
          />
          <Details position="Web Development Instructor" company="DSC Modern Academy for Computer Science"
            style={{ pointerEvents: 'none' }}
            time="January 21 - January 21" address="Cairo"
            work="I volunteered as a web developer instructor where this course was about node.js. I was responsible for giving assignments and revise them."
          />
        </ul>
      </div>
    </div>
  )
}
