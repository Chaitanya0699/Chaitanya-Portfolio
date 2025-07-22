import React from 'react';
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ✅ Dynamic Experience Years
  const startDate = new Date('2024-04-01'); // Replace with your actual start date
  const now = new Date();
  const experienceInYears = ((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-purple-300">
                <Sparkles size={20} className="animate-pulse" />
                <p className="font-medium text-lg">Hello, I'm</p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Chaitanya</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Pajjuri
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300">
                UI/UX Designer
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-purple-300 font-medium">{experienceInYears} Years Experience</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Passionate about crafting intuitive digital experiences that bridge the gap between 
              user needs and business goals. Specializing in modern, accessible design solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={scrollToContact}
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                Let's Connect
              </button>
              <a
                href="https://drive.google.com/file/d/162mPCNIQA1QagDIZbHI8gQC-1mjE3H9K/view?usp=drive_link.google.com/your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                  <Download size={20} />
                  View Resume
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-purple-300 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-purple-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{experienceInYears}</div>
                <div className="text-purple-300 text-sm">Years Exp</div>
              </div>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-96 h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center text-8xl backdrop-blur-sm">
                    🎨
                  </div>
                </div>
              </div>

              {/* Floating Design Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 animate-float shadow-2xl shadow-yellow-500/25"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl -rotate-12 animate-float-delayed shadow-2xl shadow-pink-500/25"></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-2xl shadow-blue-500/25"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
          >
            <ArrowDown size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
