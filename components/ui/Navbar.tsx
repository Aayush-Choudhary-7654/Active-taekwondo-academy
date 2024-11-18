import Link from "next/link"
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/100 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Nav Items */}
          <div className="flex space-x-8">
            <Link 
              href="#about" 
              className="text-gray-800 hover:text-red-800 font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="#programs" 
              className="text-gray-800 hover:text-red-800 font-medium transition-colors"
            >
              Programs
            </Link>
          </div>

          {/* Logo in Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <span className="font-cinzel text-2xl font-bold text-red-800">
                Active Taekwondo Academy
              </span>
            </Link>
          </div>

          {/* Right Nav Items */}
          <div className="flex space-x-8">
            <Link 
              href="#schedule" 
              className="text-gray-800 hover:text-red-800 font-medium transition-colors"
            >
              Schedule
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-800 hover:text-red-800 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
