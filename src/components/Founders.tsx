import { User, Briefcase, Award, Code } from 'lucide-react';

export default function Founders() {
  return (
    <section id="founders" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet the Founders</h2>
          <div className="w-24 h-1 bg-[#F5C242] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A dual-founder team determined to transform ideas into real products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-2xl overflow-hidden border border-[#F5C242]/20 hover:shadow-xl hover:shadow-[#F5C242]/10 transition-all duration-300">
            <div className="relative h-80 bg-gradient-to-br from-[#F5C242]/20 to-[#1a1a1a] flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#F5C242] to-[#d4a736] rounded-full flex items-center justify-center">
                <User className="w-24 h-24 text-[#121212]" />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Fehed Rehman Shaikh</h3>
              <p className="text-[#F5C242] text-xl font-semibold mb-6">Founder & Technical Lead</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#F5C242] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">AI, Data Science, BI & Cybersecurity Expert</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="w-5 h-5 text-[#F5C242] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Python, AI & ML specialist</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-[#F5C242] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Created 100+ analytical dashboards</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#121212] p-4 rounded-lg border border-[#F5C242]/10">
                  <p className="text-gray-300">Deep expertise in cybersecurity architecture</p>
                </div>
                <div className="bg-[#121212] p-4 rounded-lg border border-[#F5C242]/10">
                  <p className="text-gray-300">Leading IIT Bombay technical projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] rounded-2xl overflow-hidden border border-[#F5C242]/20 hover:shadow-xl hover:shadow-[#F5C242]/10 transition-all duration-300">
            <div className="relative h-80 bg-gradient-to-br from-[#F5C242]/20 to-[#1a1a1a] flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#F5C242] to-[#d4a736] rounded-full flex items-center justify-center">
                <User className="w-24 h-24 text-[#121212]" />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Omar Khan</h3>
              <p className="text-[#F5C242] text-xl font-semibold mb-6">Co-Founder & Engineering Lead</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#F5C242] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Full Stack Development Expert</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="w-5 h-5 text-[#F5C242] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">React.js, Node.js, Django, Android</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-[#F5C242] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Built enterprise & government systems</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#121212] p-4 rounded-lg border border-[#F5C242]/10">
                  <p className="text-gray-300">Worked with Pioneer Engineers, GSMASH Technologies, Air India Engineering</p>
                </div>
                <div className="bg-[#121212] p-4 rounded-lg border border-[#F5C242]/10">
                  <p className="text-gray-300">Scalable architecture specialist with strong backend engineering experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
