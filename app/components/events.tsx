import { CalendarDays, Users, Gamepad2 } from 'lucide-react'

const events: any = [
  // {
  //   title: 'Meet',
  //   description: 'First time meet with the member',
  //   icon: Users,
  //   date: 'December 15, 2024'
  // }
]

export default function Events() {
  return (
    <section id="events" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Upcoming Astro Events</h2>
        <div className="w-full items-center justify-center flex flex-row gap-8">
          {events.length !== 0 ? events.map((event: any) => (
            <div key={event.title} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <event.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <p className="text-purple-400">{event.date}</p>
            </div>
          )) : <div className='text-white'>No events available at the moment.</div>}
        </div>
      </div>
    </section>
  )
}

