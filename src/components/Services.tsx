import { Brain, Code, BarChart3, Shield, TrendingUp, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI, Machine Learning & Data Science Excellence',
      items: [
        {
          name: 'Machine Learning & Predictive Analytics',
          description: 'Build intelligent systems that learn from data, predict outcomes, and optimize decision-making with advanced ML algorithms and statistical modeling.'
        },
        {
          name: 'AI Automation & Smart Workflows',
          description: 'Streamline operations with intelligent automation—reducing manual effort, accelerating processes, and eliminating human error through AI-powered workflows.'
        },
        {
          name: 'Chatbots & AI Assistants',
          description: 'Deploy conversational AI that engages customers 24/7, handles inquiries instantly, and improves user experience with natural language processing.'
        },
        {
          name: 'Data Science & Advanced Modeling',
          description: 'Extract actionable insights from complex datasets using statistical analysis, data mining, and custom modeling to drive strategic business decisions.'
        }
      ]
    },
    {
      icon: Code,
      title: 'Software Development & Enterprise Solutions',
      items: [
        {
          name: 'Custom Software & Web Development',
          description: 'Custom software solutions, web applications, and enterprise portals tailored to your business needs.'
        },
        {
          name: 'Mobile App Development (Android & iOS)',
          description: 'Cross-platform and native mobile applications with complete UI/UX design and app modernization.'
        },
        {
          name: 'Backend & API Engineering',
          description: 'Robust backend systems and API development for seamless integration and scalability.'
        },
        {
          name: 'ERP, CRM, POS, E-commerce Platforms',
          description: 'Enterprise-grade systems including ERP development, CRM solutions, POS & inventory management, and e-commerce platforms.'
        }
      ]
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Automation',
      items: [
        {
          name: 'Power BI & Tableau Dashboards',
          description: 'Power BI, Tableau, and custom dashboards with automated reporting, real-time data visualization, and strategic insights.'
        },
        {
          name: 'Business Automation & RPA',
          description: 'Workflow automation, robotic process automation, and end-to-end automation of HR, sales, and operations processes.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Protection',
      items: [
        {
          name: 'Security Architecture & Assessment',
          description: 'Comprehensive security audits, vulnerability assessments, and penetration testing to identify and eliminate potential threats before they become problems.'
        },
        {
          name: 'Data Protection & Encryption',
          description: 'Enterprise-grade encryption, secure data storage solutions, and compliance with industry standards including GDPR, HIPAA, and ISO 27001.'
        },
        {
          name: 'Threat Detection & Response',
          description: 'Real-time monitoring, intrusion detection systems, and rapid incident response to protect your business from evolving cyber threats and attacks.'
        }
      ]
    },
    {
      icon: TrendingUp,
      title: '360° Digital Marketing Services',
      items: [
        {
          name: 'Social Media Management',
          description: 'Instagram, Facebook & LinkedIn management with daily posting, content planning, and strategic brand growth.'
        },
        {
          name: 'Digital Branding',
          description: 'Brand identity, storytelling, logo design, and creative content including reels, posters, and advertisements.'
        },
        {
          name: 'SEO & Digital Presence',
          description: 'On-page and off-page SEO, website optimization, and Google Business Profile management for maximum visibility.'
        },
        {
          name: 'Paid Ads & Lead Generation',
          description: 'Facebook, Instagram, YouTube, and Google Ads with ROI-focused campaigns and performance marketing.'
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#F5C242] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-[#F5C242]/10 hover:border-[#F5C242]/30 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#F5C242]/20 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#F5C242]" />
                </div>
                <h3 className="text-3xl font-bold text-white">{service.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-[#121212] p-6 rounded-xl border border-[#F5C242]/10 hover:border-[#F5C242]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#F5C242]/10">
                    <h4 className="text-xl font-semibold text-[#F5C242] mb-3">{item.name}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
