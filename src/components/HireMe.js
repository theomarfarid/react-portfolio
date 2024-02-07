import Link from "next/link"
import { CircularText } from "./icons"

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />
        <Link href='mailto:omarfarid222@gmail.com'
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light text-lg shadow-md border border-solid border-dark w-28 h-28 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">
          Hire Me
        </Link>
      </div>
    </div>
  )
}