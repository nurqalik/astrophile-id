import { CalendarDays, Users, Gamepad2 } from 'lucide-react'

const events = [
  {
    title: 'Cosmic Game Jam',
    description: 'Create a space-themed game in 48 hours',
    icon: Gamepad2,
    date: 'July 15-17, 2024'
  },
  {
    title: 'Virtual Space Station Tour',
    description: 'Explore our latest VR simulation',
    icon: Users,
    date: 'August 5, 2024'
  },
  {
    title: 'Astrophysics in Gaming Panel',
    description: 'Learn how real science inspires games',
    icon: CalendarDays,
    date: 'September 20, 2024'
  }
]

export default function Events() {
  return (
    <section id="events" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Upcoming Cosmic Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <event.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <p className="text-purple-400">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

