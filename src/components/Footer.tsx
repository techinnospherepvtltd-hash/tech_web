import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#F5C242]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F5C242] to-[#d4a736] rounded-lg flex items-center justify-center">
                <span className="text-[#121212] font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-xl">TechInnosphere</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              From Vision to Software — We Build It All
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-[#F5C242] transition-colors text-sm">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-[#F5C242] transition-colors text-sm">About Us</a>
              <a href="#services" className="block text-gray-400 hover:text-[#F5C242] transition-colors text-sm">Services</a>
              <a href="#projects" className="block text-gray-400 hover:text-[#F5C242] transition-colors text-sm">IIT Projects</a>
              <a href="#founders" className="block text-gray-400 hover:text-[#F5C242] transition-colors text-sm">Founders</a>
              <a href="#roadmap" className="block text-gray-400 hover:text-[#F5C242] transition-colors text-sm">Roadmap</a>
              <a href="#contact" className="block text-gray-400 hover:text-[#F5C242] transition-colors text-sm">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/techinnosphere-pvt-ltd/" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#F5C242] hover:text-[#121212] transition-all duration-300 text-gray-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#F5C242] hover:text-[#121212] transition-all duration-300 text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5C242]/10 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 TechInnosphere Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
