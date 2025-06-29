import React, { useRef, useState } from 'react';
import { InlineWidget } from "react-calendly";
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, MapPin, Send, Linkedin,
  Github, Dribbble, Calendar, Coffee, X
} from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yu0o7cq',
      'template_a2346k4',
      form.current!,
      'asvWUtZb3MyIHlByB'
    ).then(() => {
      alert("Message sent successfully!");
      form.current?.reset();
    }).catch((error) => {
      alert("Message failed to send.");
      console.error(error);
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: "Email",
      value: "chaitanya.pajjuri@gmail.com",
      link: "mailto:chaitanya.pajjuri@gmail.com"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      value: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600 hover:bg-blue-50"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-900 hover:bg-gray-50"
    },
    {
      icon: <Dribbble size={24} />,
      name: "Dribbble",
      url: "#",
      color: "hover:text-pink-600 hover:bg-pink-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-purple-500/30">
            <Coffee size={16} />
            Let's Connect
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Create Something
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Amazing?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Chaitanya Pajjuri, and I'm always excited to discuss new projects, creative ideas, or opportunities
            to be part of your vision. Let's turn your ideas into beautiful, functional designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Send className="text-purple-400" size={24} />
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input type="text" id="firstName" name="first_name" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input type="text" id="lastName" name="last_name" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="user_email" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm" placeholder="Project Discussion" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none backdrop-blur-sm" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-medium hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                As a growing UI/UX designer with 1.5 years of experience, I'm eager to take on new challenges
                and collaborate on exciting projects. Whether you have a specific project in mind or just want
                to chat about design, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {/* contactInfo.map here */}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {/* socialLinks.map here */}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="font-semibold text-white">Available for New Projects</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Currently accepting freelance projects and open to full-time opportunities. 
                Let's create something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setShowCalendly(true)} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/20 transition-colors group">
                <Calendar className="text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-white font-medium text-sm">Schedule Call</p>
              </button>
              <a
                href="https://wa.me/917036650028?text=Hi%20Chaitanya%2C%20I%27m%20interested%20in%20connecting%20with%20you%20via%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/20 transition-colors group w-full">
                  <FaWhatsapp className="text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-white font-medium text-sm">Whatsapp</p>
                </button>
              </a>
            </div>

            {showCalendly && (
              <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl w-full max-w-3xl relative">
                  <button onClick={() => setShowCalendly(false)} className="absolute top-3 right-3 text-black hover:text-red-500 transition">
                    <X size={24} />
                  </button>
                  <InlineWidget url="https://calendly.com/chaitanyapajjuri3/30min" styles={{ height: "700px" }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;