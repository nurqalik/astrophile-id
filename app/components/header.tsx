import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-gray-800/50 backdrop-blur-md supports-[backdrop-filter]:bg-gray-800/30 sticky top-0 z-50 w-full flex items-center justify-center px-8 md:px-0">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Astrophile</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {['About', 'Members', 'Events', 'Games', 'Gallery', 'Join'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors">
              {item}
            </Link>
          ))}
        </nav>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">Join Us</Button>
      </div>
    </header>
  )
}

