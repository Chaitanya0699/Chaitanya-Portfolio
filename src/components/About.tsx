import React from 'react';
import { User, Target, Heart, Award, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      year: "2020 - 2024",
      description: "Focused on Human-Computer Interaction and Software Engineering"
    },
    {
      degree: "UI/UX Design Certification",
      institution: "Design Institute",
      year: "2023",
      description: "Specialized certification in User Experience Design and Interface Design"
    }
  ];

  const experience = [
    {
      role: "UI/UX Designer",
      company: (
        <a
          href="https://www.novisync.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Novisync India Pvt Ltd (Cadrac Labs)
        </a>
      ),
    period: "Jan 2023 - Present",
    description: "Leading design initiatives for mobile and web applications, conducting user research, and creating design systems.",
    achievements: [
      "Improved user engagement by 40% through redesigned mobile app interface",
      "Created comprehensive design system used across 5+ products",
      "Led user research sessions with 50+ participants"
    ]
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Chaitanya</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-purple-600">
                <User size={24} />
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm Chaitanya Pajjuri, a passionate UI/UX designer with 1.5 years of experience in creating 
                digital experiences that are not only visually appealing but also highly functional and 
                user-centered. My journey in design started with a curiosity about how people interact with technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I believe great design is invisible – it should feel natural and intuitive. Every project 
                I work on is an opportunity to solve real problems and create meaningful connections between 
                users and products.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-purple-600">
                <Target size={24} />
                <h3 className="text-2xl font-semibold">My Approach</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-2">User-Centered</h4>
                  <p className="text-gray-600 text-sm">Every design decision is backed by user research and testing</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Collaborative</h4>
                  <p className="text-gray-600 text-sm">Working closely with developers and stakeholders</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-500" size={20} />
                  <div>
                    <div className="font-bold text-gray-900">15+</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <Heart className="text-red-500" size={20} />
                  <div>
                    <div className="font-bold text-gray-900">8+</div>
                    <div className="text-xs text-gray-500">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-purple-600 mb-8">
            <GraduationCap size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-purple-600 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div>
          <div className="flex items-center gap-3 text-purple-600 mb-8">
            <Briefcase size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Professional Experience</h3>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h4>
                    <p className="text-purple-600 font-semibold text-lg mb-1">{exp.company}</p>
                    <p className="text-gray-500 font-medium">{exp.period}</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mt-4 lg:mt-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{exp.description}</p>
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;