'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function JoinUs() {
  const [data, setData] = useState({
    name: '',
    dob: '',
    dom: '',
  })
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <section id="join" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Join the Astro Club</h2>
        <p className="text-center text-gray-300 mb-8">Become a part of our interstellar gaming adventure. Sign up for exclusive events, beta testing, and astro updates!</p>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-gray-800 text-white border-gray-700" defaultValue={''} onChange={(e: any) => setData({ ...data, name: e.target.value })} />
            <Input type="text" placeholder="Your Day of birth" className="bg-gray-800 text-white border-gray-700" defaultValue={''} onChange={(e: any) => setData({ ...data, dob: e.target.value })} />
            <Input type="text" placeholder="Your Domicile" className="bg-gray-800 text-white border-gray-700" defaultValue={''} onChange={(e: any) => setData({ ...data, dom: e.target.value })} />
            <Link href={`https://wa.me/6287875766178?text=Halo%20kak%2C%20saya%20ingin%20bergabung%20dengan%20club%20astrophile.%20Berikut%20data%20diri%20saya%3A%0A%0ANama%3A%20${data.name}%0ADOB%3A%20${data.dob}%0ADOM%3A%20${data.dom}%0A%0A%5BHarap%20cantumkan%20foto%20terbaik%20kamu%5D`} target='_blank' >
              <Button className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-4 ${!data.name || !data.dob || !data.dom ? 'hidden' : 'flex'}`} disabled={!data.name || !data.dob || !data.dom}>Contact Admin</Button>
            </Link>
            <div className={`text-gray-700 italic ${!data.name || !data.dob || !data.dom ? 'flex' : 'hidden'}`}>Need too full fill form above before submitting!</div>
          </div>
        </div>
      </div>
    </section>
  )
}