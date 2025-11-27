import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#F5C242] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#F5C242]/10 hover:border-[#F5C242]/30 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#F5C242] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Fehed Rehman Shaikh</p>
                    <a href="tel:7710031550" className="text-gray-300 hover:text-[#F5C242] transition-colors">+91 7710031550</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#F5C242]/10 hover:border-[#F5C242]/30 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#F5C242] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Omar Khan</p>
                    <a href="tel:9152115523" className="text-gray-300 hover:text-[#F5C242] transition-colors">+91 9152115523</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#F5C242]/10 hover:border-[#F5C242]/30 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#F5C242] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a href="mailto:techinnospherepvtltd@gmail.com" className="text-gray-300 hover:text-[#F5C242] transition-colors break-all">techinnospherepvtltd@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#F5C242]/10">
                  <Clock className="w-6 h-6 text-[#F5C242] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Business Hours</p>
                    <p className="text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sunday: By Appointment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#F5C242]/10">
                  <MapPin className="w-6 h-6 text-[#F5C242] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Location</p>
                    <p className="text-gray-300">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#F5C242]/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#F5C242]/20 rounded-lg text-white focus:outline-none focus:border-[#F5C242] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#F5C242]/20 rounded-lg text-white focus:outline-none focus:border-[#F5C242] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#F5C242]/20 rounded-lg text-white focus:outline-none focus:border-[#F5C242] transition-colors"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">Company (optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#F5C242]/20 rounded-lg text-white focus:outline-none focus:border-[#F5C242] transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#F5C242]/20 rounded-lg text-white focus:outline-none focus:border-[#F5C242] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F5C242] text-[#121212] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4a736] transition-all duration-300 hover:shadow-xl hover:shadow-[#F5C242]/30 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
