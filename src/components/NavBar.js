import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterXIcon } from './icons'
import { motion } from 'framer-motion'
import useThemeSwicher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  )
}

export default function NavBar() {

  const [mode, setMode] = useThemeSwicher()

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4'></CustomLink>
        <CustomLink href='/about' title='About' className='mx-4'></CustomLink>
        <CustomLink href='/projects' title='Projects' className='mx-4'></CustomLink>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
        <Logo />
      </div>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href='https://twitter.com/zaomarfarid' target='_blank' whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
          <TwitterXIcon className='dark:fill-light' />
        </motion.a>
        <motion.a href='https://github.com/zaomarfarid' target='_blank' whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
          <GithubIcon />
        </motion.a>
        <motion.a href='https://www.linkedin.com/in/zaomarfarid' target='_blank' whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
          <LinkedInIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`w-6 ml-3 flex items-center justify-center rounded-full 
          ${mode === "light" ? "bg-dark text-light" : 'bg-light text-dark'}`}
        >
          {
            mode === 'dark' ?
              <SunIcon className={'fill-dark'} /> :
              <MoonIcon className={'fill-light'} />
          }
        </button>
      </nav>
    </header>
  )
}
