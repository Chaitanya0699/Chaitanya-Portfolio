import React from 'react';
import { Palette, Code, Smartphone, Users, Lightbulb, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Palette,
      title: "UI Design",
      description: "Creating beautiful, intuitive interfaces with attention to detail",
      level: 90,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "UX Research",
      description: "Understanding user needs through research and testing",
      level: 85,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Prototyping",
      description: "Building interactive prototypes to validate design concepts",
      level: 80,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Designing responsive experiences for mobile devices",
      level: 88,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Design Systems",
      description: "Creating scalable design systems and component libraries",
      level: 75,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Interaction Design",
      description: "Crafting smooth animations and micro-interactions",
      level: 82,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const toolGroups = [
    {
      title: "Programming & Design Tools",
      tools: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Python", level: 80 },
        { name: "Figma", level: 95 },
        { name: "Canva", level: 85 },
        { name: "Adobe Creative Cloud", level: 80 },
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 75 },
        { name: "Sketch", level: 70 }
      ]
    },
    {
      title: "UI/UX Skills",
      tools: [
        { name: "Wireframing", level: 90 },
        { name: "Prototyping", level: 90 },
        { name: "User Flows", level: 85 },
        { name: "Personas", level: 80 },
        { name: "Design Systems", level: 85 },
        { name: "Usability Testing", level: 80 },
        { name: "Accessibility", level: 75 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Core & Soft Skills",
      tools: [
        { name: "Auto-CAD", level: 75 },
        { name: "Ansys", level: 70 },
        { name: "MS Excel", level: 80 },
        { name: "MS Word", level: 85 },
        { name: "Stakeholder Collaboration", level: 85 },
        { name: "UX Research", level: 90 },
        { name: "Agile Sprint Participation", level: 80 },
        { name: "Clear Communication", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-pink-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skill Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <skill.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-6">{skill.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Proficiency</span>
                  <span className="font-semibold text-gray-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grouped Tools Section in columns */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-10">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {toolGroups.map((group, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-4">
                  {group.title}
                </h4>
                <div className="space-y-4">
                  {group.tools.map((tool, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-sm font-semibold text-gray-900">
                        <span>{tool.name}</span>
                        <span className="text-purple-700 font-bold">{tool.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-700 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;