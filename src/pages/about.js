import { useEffect, useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

export default function about() {
  return (
    <>
      <Head>
        <title>Omar Farid | About Page</title>
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                Hi. I'm Omar Farid, a web developer with a passion for creating powerful, functional, creative and and user-centered digital experiences.
                Used to be from the top student in Computer Science with a GPA: 3.74. I currently studying more to develop my skills to keep pace with developments.
              </p>
              <p className='my-4 font-medium'>
                Since I was a kid, I always had an interest in computers and technology.
                This passion never went away, so I eventually decided to fully pursue my dream of becoming a developer.
              </p>
              <p className='my-4 font-medium'>
                I'm a technology enthusiast, perfect at self-learning, good at problem-solving,
                gained strong computer science skills in practice from different online courses from different fields (alongside the academic ones)
              </p>
              <p className='font-medium'>
                When I don't code, I play parkour, ride horses, watch movies or series, improve or learn new techs or languages.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='profilePic'
                className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Satisfied Clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  N/A
                </span>
                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years Of Experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}
