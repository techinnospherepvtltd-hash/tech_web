import { TrendingUp, Building2, Award } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F5C242]/10 border border-[#F5C242]/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-5 h-5 text-[#F5C242]" />
            <span className="text-[#F5C242] font-medium">IIT Bombay Techfest</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Innovation at IIT Bombay</h2>
          <div className="w-24 h-1 bg-[#F5C242] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            TechInnosphere's credibility is anchored in our founders' participation in Techfest IIT Bombay, one of Asia's biggest technology platforms.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-[#F5C242]/20 hover:shadow-xl hover:shadow-[#F5C242]/10 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#F5C242]/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#F5C242]" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Algorithmic Trading Challenge</h3>
                    <p className="text-[#F5C242] font-medium">Techfest, IIT Bombay</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Fehed and Omar are designing a rule-based algorithmic trading system using real market data. The project involves aptitude and strategy design, Python-based backtesting, and real-world equity trading simulation.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  This challenge combines finance, coding, and AI-driven analytics, preparing them to build TechInnosphere's future AI-based trading intelligence product.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10">
                  <h4 className="text-[#F5C242] font-semibold mb-2">Rule-Based Algorithmic Trading System</h4>
                  <p className="text-gray-400">Advanced trading strategies powered by data-driven rules</p>
                </div>
                <div className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10">
                  <h4 className="text-[#F5C242] font-semibold mb-2">Real Market Data Analysis</h4>
                  <p className="text-gray-400">Live market data integration and analysis</p>
                </div>
                <div className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10">
                  <h4 className="text-[#F5C242] font-semibold mb-2">Python Backtesting Framework</h4>
                  <p className="text-gray-400">Comprehensive backtesting and validation system</p>
                </div>
                <div className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10">
                  <h4 className="text-[#F5C242] font-semibold mb-2">AI-Driven Trading Intelligence</h4>
                  <p className="text-gray-400">Machine learning for predictive trading insights</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#121212] to-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-[#F5C242]/20 hover:shadow-xl hover:shadow-[#F5C242]/10 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <div className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10">
                  <h4 className="text-[#F5C242] font-semibold mb-2">Smart Transport & Traffic Systems</h4>
                  <p className="text-gray-400">Intelligent transportation and traffic management solutions</p>
                </div>
                <div className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10">
                  <h4 className="text-[#F5C242] font-semibold mb-2">Digital Governance Platforms</h4>
                  <p className="text-gray-400">Digital and inclusive governance technologies</p>
                </div>
                <div className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10">
                  <h4 className="text-[#F5C242] font-semibold mb-2">Next-Gen Education & Skilling</h4>
                  <p className="text-gray-400">Future-ready education and skill development prototypes</p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#F5C242]/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#F5C242]" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Aarohan - Viksit Bharat Challenge</h3>
                    <p className="text-[#F5C242] font-medium">Techfest, IIT Bombay</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Both founders are developing Aarohan, a national innovation project shaping India's Viksit Bharat 2047 vision.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  They are building tech prototypes focused on Public Transport and Traffic Management, Digital and Inclusive Governance, and Future of Education and Skilling.
                </p>
                <div className="inline-flex items-center space-x-2 bg-[#F5C242]/10 border border-[#F5C242]/20 rounded-lg px-4 py-2">
                  <span className="text-[#F5C242] font-medium">Viksit Bharat 2047 Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
