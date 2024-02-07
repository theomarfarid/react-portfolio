import Link from "next/link"
import Layout from "./Layout"

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With
          <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          By&nbsp;
          <Link href='/' className="underline underline-offset-2" target="_blank">OmarFarid</Link>
        </div>
        <Link href='https://wa.me/+201016871948' className="underline underline-offset-2" target="_blank">
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}
