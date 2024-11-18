'use client';

import { useState } from 'react';
import Link from "next/link";
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Nav Items */}
            <div className="flex space-x-8">
              <Link 
                href="#about" 
                className="text-gray-800 hover:text-red-800 font-medium transition-colors">
                About
              </Link>
              <Link 
                href="#programs" 
                className="text-gray-800 hover:text-red-800 font-medium transition-colors">
                Programs
              </Link>
            </div>

            {/* Centered Logo */}
            <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex flex-col items-center">
                <span className="font-cinzel text-xl font-bold text-red-800">
                  Active Taekwondo Academy
                </span>
              </Link>
            </div>

            {/* Right Nav Items */}
            <div className="flex space-x-8">
              <Link 
                href="#schedule" 
                className="text-gray-800 hover:text-red-800 font-medium transition-colors">
                Schedule
              </Link>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-gray-800 hover:text-red-800 font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
