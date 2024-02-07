import { motion, useScroll } from "framer-motion"
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;
          <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
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
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px]  h-full bg-dark origin-top dark:bg-light' />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details position="IT technician" company="English House"
            companyLink="javascript:void(0)"
            time="June 16 - September 16" address="Cairo"
            work="I worked as an IT technician, where my responsibilities involved all the technical related devices and other media related stuff. I was responsible for ensuring that the functionality were accurately efficiently."
          />
          <Details position="Graphic Designer" company="Upwork"
            companyLink="https://upwork.com/"
            time="June 16 - September 16" address="Freelance"
            work="I worked as a graphic designer involved proficiently using photoshop,indesign, and illustrator to create visually appealing designs such as book covers or business cards."
          />
          <Details position="Web Development Instructor" company="DSC Modern Academy for Computer Science"
            companyLink="javascript:void(0)"
            time="January 21 - January 21" address="Cairo"
            work="I volunteered as a web developer instructor where this course was about node.js. I was responsible for giving assignments and revise them."
          />
        </ul>
      </div>
    </div>
  )
}
