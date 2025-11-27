import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5C242] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5C242] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#F5C242]/10 border border-[#F5C242]/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-[#F5C242]" />
              <span className="text-[#F5C242] text-sm font-medium">Innovation-Driven Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              From Vision to Software
              <span className="block text-[#F5C242] mt-2">We Build It All</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              TechInnosphere delivers end-to-end software engineering, AI-powered automation, analytics, and digital transformation solutions built for the modern digital age.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center space-x-2 bg-[#F5C242] text-[#121212] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4a736] transition-all duration-300 hover:shadow-xl hover:shadow-[#F5C242]/30 transform hover:-translate-y-1">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="inline-flex items-center space-x-2 border-2 border-[#F5C242] text-[#F5C242] px-8 py-4 rounded-lg font-semibold hover:bg-[#F5C242]/10 transition-all duration-300">
                <span>Book Consultation</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              {['AI', 'Software Development', 'Cybersecurity', 'Business Intelligence', 'Automation', 'SaaS'].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#F5C242] rounded-full"></div>
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5C242]/20 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-2xl border border-[#F5C242]/20 p-8 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: `${i * 0.2}s` }}>
                        <div className="w-12 h-12 bg-[#F5C242]/20 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#F5C242] rounded"></div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-[#F5C242]/30 rounded" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                          <div className="h-2 bg-[#F5C242]/20 rounded" style={{ width: `${Math.random() * 30 + 40}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
