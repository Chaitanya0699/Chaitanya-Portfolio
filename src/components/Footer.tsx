import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ Dynamic Experience
  const startDate = new Date('2024-04-01'); // Replace with your real start date
  const now = new Date();
  const experienceInYears = ((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-footer-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Logo and Description */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Chaitanya Pajjuri
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A passionate UI/UX designer with {experienceInYears} years of experience, dedicated to creating 
              meaningful digital experiences that make a difference in people's lives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <a href="#home" className="hover:text-purple-400 transition-colors font-medium">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors font-medium">About</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors font-medium">Projects</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors font-medium">Skills</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors font-medium">Contact</a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center space-x-2 text-gray-400 justify-center">
                <span>Crafted with</span>
                <Heart size={16} className="text-red-500 fill-current animate-pulse" />
                <span>by Chaitanya Pajjuri</span>
              </div>
              <button 
                onClick={scrollToTop}
                className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300 group"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Chaitanya Pajjuri. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Building the future, one pixel at a time ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
