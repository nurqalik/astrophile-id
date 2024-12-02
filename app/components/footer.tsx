// import { FaTwitter, FaDiscord, FaTwitch, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full items-center mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Roe. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              {/* <FaTwitter size={24} /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              {/* <FaDiscord size={24} /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              {/* <FaTwitch size={24} /> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              {/* <FaYoutube size={24} /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

