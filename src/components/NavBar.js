import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterXIcon } from './icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

export default function NavBar() {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4'></CustomLink>
                <CustomLink href='/about' title='About' className='mx-4'></CustomLink>
                <CustomLink href='/projects' title='Projects' className='mx-4'></CustomLink>
                <CustomLink href='/articles' title='Articles' className='ml-4'></CustomLink>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
                <Logo />
            </div>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://twitter.com/zaomarfarid' target='_blank' whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
                    <TwitterXIcon />
                </motion.a>
                <motion.a href='https://github.com/zaomarfarid' target='_blank' whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
                    <GithubIcon />
                </motion.a>
                <motion.a href='https://www.linkedin.com/in/zaomarfarid' target='_blank' whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
                    <LinkedInIcon />
                </motion.a>
            </nav>
        </header>
    )
}
