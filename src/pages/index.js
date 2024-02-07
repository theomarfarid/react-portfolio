import Layout from "@/components/Layout"
import Image from 'next/image'
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { LinkArrow } from "@/components/icons"
import HireMe from "@/components/HireMe"
import profilePic from '../../public/images/profile/developer-pic-1.png'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
      <Layout className='pt-0'>
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt='Omar Farid' className='w-full h-auto' />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text='Turning Vision Into Reality With Code And Design.' className="!text-left" />
            <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects, showcasing my expertise in web development.</p>
            <div className="flex items-center self-start mt-2">
              <Link href='/resume.pdf'
                target="_blank"
                download={true}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">
                Resume<LinkArrow className={'w-6 ml-1'} />
              </Link>
              <Link href='mailto:omarfarid222@gmail.com' target={'_blank'}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light" >Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className='absolute right-8 bottom-8 inline-block w-24'>
        <Image src={lightBulb} alt='lightBulb' className='w-full h-auto' />
      </div>
    </main>
  )
}
