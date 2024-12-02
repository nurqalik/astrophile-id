import Header from './components/header'
import Hero from './components/hero'
import MemberList from './components/member-list'
import Events from './components/events'
import Gallery from './components/gallery'
import JoinUs from './components/join-us'
import Footer from './components/footer'
import AboutUs from './components/about-us'
import { TracingBeam } from './components/tracing-beam'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 w-full items-center justify-center">
      <Header />
      <TracingBeam className="px-8">
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <MemberList />
        <Events />
        <Gallery />
        <JoinUs />
      </main>
      </TracingBeam>
      <Footer />
    </div>
  )
}