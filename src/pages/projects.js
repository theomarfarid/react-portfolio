import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import project1 from "../../public/images/projects/placeholder.png"
import yummyPic from "../../public/images/projects/yummy-eats.png"
import pricingPic from "../../public/images/projects/pricing-panel.png"
import { GithubIcon } from '@/components/icons'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-2xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xl:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='py-2 flex items-center'>
          <Link href={github} className="w-10" target='_blank'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark p-6 relative dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} className="w-8 md:w-6" target='_blank'><GithubIcon /></Link>
        </div>
      </div>
    </article>
  )
}

export default function projects() {
  return (
    <>
      <Head>
        <title>Omar Farid | Projects Page</title>
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Gericht Restaurant"
                img={project1}
                github='/'
                summary='A restaurant website, built using the power of React JS! This is designed to showcase our delicious menu, inviting atmosphere, and exceptional customer service. With our use of React JS, we are able to create a seamless user experience that is both visually stunning and easy to navigate. From browsing our menu to making a reservation, our website makes it simple to enjoy the full experience of our restaurant. Whether you are a regular or a first-time visitor, we hope our website helps you get a taste of what we have to offer and entices you to come dine with us soon.'
                link="javascript:void(0)"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="THE HEALTHY Eating Experience"
                img={yummyPic}
                github='/'
                link="https://zaomarfarid.github.io/eats"
                type="Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Pricing Panel"
                img={pricingPic}
                github='/'
                link="https://zaomarfarid.github.io/pricing-panel"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
