import { Target, Lightbulb, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Are</h2>
          <div className="w-24 h-1 bg-[#F5C242] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F5C242]">Innovation-Driven Technology Firm</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              TechInnosphere is an innovation-driven technology firm offering end-to-end software solutions, AI-powered analytics, automation, and enterprise digital systems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently operating as a proprietorship, the startup aims to transition into TechInnosphere Pvt. Ltd., expanding into a future global innovation hub.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              We transform bold ideas into high-performance, scalable digital products—serving startups, mid-market companies, and large enterprises across all industries.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#F5C242] mb-6">End-to-End Capabilities</h3>
            {[
              'Custom software & web applications',
              'AI automation & machine learning',
              'Mobile app development',
              'Business intelligence & analytics',
              'Cybersecurity solutions',
              '360° digital marketing services'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-[#121212] p-4 rounded-lg border border-[#F5C242]/10 hover:border-[#F5C242]/30 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-[#F5C242] flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] p-8 rounded-2xl border border-[#F5C242]/20 hover:shadow-xl hover:shadow-[#F5C242]/10 transition-all duration-300">
            <div className="w-16 h-16 bg-[#F5C242]/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#F5C242]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To transform the digital ecosystem by creating intelligent, scalable, and future-ready technology solutions that redefine how businesses operate and compete.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] p-8 rounded-2xl border border-[#F5C242]/20 hover:shadow-xl hover:shadow-[#F5C242]/10 transition-all duration-300">
            <div className="w-16 h-16 bg-[#F5C242]/20 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-[#F5C242]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To empower businesses through innovation, AI integration, cybersecurity excellence, and world-class engineering—bridging the gap between ambitious business goals and cutting-edge modern technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
