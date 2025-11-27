import { Brain, TrendingUp, Building, Pill, Landmark, Cloud } from 'lucide-react';

export default function Roadmap() {
  const roadmapItems = [
    {
      icon: Brain,
      title: 'AI Insight Engine',
      description: 'Automated analytics SaaS platform with machine learning-powered business intelligence.'
    },
    {
      icon: TrendingUp,
      title: 'AlgoTrade Tools / AlgoTrade Pro',
      description: 'Trading and financial automation powered by algorithmic intelligence and real-time market data.'
    },
    {
      icon: Building,
      title: 'Smart Construction ERP',
      description: 'Industry-specific enterprise resource planning for construction and project management.'
    },
    {
      icon: Pill,
      title: 'MedHub POS SaaS',
      description: 'Pharmacy SaaS solution with inventory management, billing, and compliance automation.'
    },
    {
      icon: Landmark,
      title: 'Aarohan GovTech Suite',
      description: 'Smart city and governance tools including digital transportation, education, and public services platforms.'
    },
    {
      icon: Cloud,
      title: 'Virtual Office 2.0',
      description: 'Subscription-based remote workspace platform for distributed teams.'
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Innovation Roadmap</h2>
          <div className="w-24 h-1 bg-[#F5C242] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Future products and platforms that will shape the next generation of business technology
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#F5C242]/30 hidden md:block"></div>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0 md:w-16 flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5C242] to-[#d4a736] rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-[#F5C242]/30">
                      <item.icon className="w-8 h-8 text-[#121212]" />
                    </div>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-[#121212] to-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-[#F5C242]/20 hover:border-[#F5C242]/40 hover:shadow-xl hover:shadow-[#F5C242]/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#121212] to-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-[#F5C242]/30 text-center">
          <p className="text-2xl text-gray-300 leading-relaxed mb-4">
            <span className="text-white font-bold">TechInnosphere</span> — <span className="text-[#F5C242] font-semibold">From Vision to Software, We Build It All</span>
          </p>
          <p className="text-lg text-gray-400">
            Partner with us to transform your business through intelligent technology, AI automation, and digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
