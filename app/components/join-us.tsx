import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function JoinUs() {
  return (
    <section id="join" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Join the Cosmic Community</h2>
        <p className="text-center text-gray-300 mb-8">Become a part of our interstellar gaming adventure. Sign up for exclusive events, beta testing, and cosmic updates!</p>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-gray-800 text-white border-gray-700" />
            <Input type="email" placeholder="Your Email" className="bg-gray-800 text-white border-gray-700" />
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">Launch into Adventure</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

