import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#121212]/95 backdrop-blur-sm z-50 border-b border-[#F5C242]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F5C242] to-[#d4a736] rounded-lg flex items-center justify-center">
                <span className="text-[#121212] font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">TechInnosphere</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-[#F5C242] transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-300 hover:text-[#F5C242] transition-colors duration-300">About</a>
              <a href="#services" className="text-gray-300 hover:text-[#F5C242] transition-colors duration-300">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-[#F5C242] transition-colors duration-300">IIT Projects</a>
              <a href="#founders" className="text-gray-300 hover:text-[#F5C242] transition-colors duration-300">Founders</a>
              <a href="#roadmap" className="text-gray-300 hover:text-[#F5C242] transition-colors duration-300">Roadmap</a>
              <a href="#contact" className="bg-[#F5C242] text-[#121212] px-6 py-2 rounded-lg font-semibold hover:bg-[#d4a736] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5C242]/30">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-[#F5C242]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#121212] border-t border-[#F5C242]/10">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#home" className="block text-gray-300 hover:text-[#F5C242] py-2">Home</a>
            <a href="#about" className="block text-gray-300 hover:text-[#F5C242] py-2">About</a>
            <a href="#services" className="block text-gray-300 hover:text-[#F5C242] py-2">Services</a>
            <a href="#projects" className="block text-gray-300 hover:text-[#F5C242] py-2">IIT Projects</a>
            <a href="#founders" className="block text-gray-300 hover:text-[#F5C242] py-2">Founders</a>
            <a href="#roadmap" className="block text-gray-300 hover:text-[#F5C242] py-2">Roadmap</a>
            <a href="#contact" className="block bg-[#F5C242] text-[#121212] px-6 py-2 rounded-lg font-semibold text-center">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
