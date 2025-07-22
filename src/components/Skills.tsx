import React from 'react';
import {
  Palette,
  Code,
  Smartphone,
  Users,
  Lightbulb,
  Zap,
  LucideIcon
} from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
  level: number;
  color: string;
}

interface Tool {
  name: string;
  level: number;
}

interface ToolGroup {
  title: string;
  tools: Tool[];
}

const skills: Skill[] = [
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Creating beautiful, intuitive interfaces with attention to detail',
    level: 90,
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'UX Research',
    description: 'Understanding user needs through research and testing',
    level: 85,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Prototyping',
    description: 'Building interactive prototypes to validate design concepts',
    level: 80,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description: 'Designing responsive experiences for mobile devices',
    level: 88,
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Lightbulb,
    title: 'Design Systems',
    description: 'Creating scalable design systems and component libraries',
    level: 75,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Interaction Design',
    description: 'Crafting smooth animations and micro-interactions',
    level: 82,
    color: 'from-indigo-500 to-purple-500'
  }
];

const toolGroups: ToolGroup[] = [
  {
    title: 'Programming & Design Tools',
    tools: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Figma', level: 95 },
      { name: 'Canva', level: 85 },
      { name: 'Adobe Creative Cloud', level: 80 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Photoshop', level: 75 },
      { name: 'Sketch', level: 70 }
    ]
  },
  {
    title: 'UI/UX Skills',
    tools: [
      { name: 'Wireframing', level: 90 },
      { name: 'Prototyping', level: 90 },
      { name: 'User Flows', level: 85 },
      { name: 'Personas', level: 80 },
      { name: 'Design Systems', level: 85 },
      { name: 'Usability Testing', level: 80 },
      { name: 'Accessibility', level: 75 },
      { name: 'Responsive Design', level: 85 }
    ]
  },
  {
    title: 'Core & Soft Skills',
    tools: [
      { name: 'Auto-CAD', level: 75 },
      { name: 'Ansys', level: 70 },
      { name: 'MS Excel', level: 80 },
      { name: 'MS Word', level: 85 },
      { name: 'Stakeholder Collaboration', level: 85 },
      { name: 'UX Research', level: 90 },
      { name: 'Agile Sprint Participation', level: 80 },
      { name: 'Clear Communication', level: 90 }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            My{' '}
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto mt-2">
            A compact yet powerful skillset to craft exceptional user experiences.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-700 to-pink-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col justify-between bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      {/* Title + Icon */}
      <div className="flex justify-between items-center mb-3">
        <h3 className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
          {skill.title}
        </h3>
        <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center`}>
          <skill.icon size={18} className="text-white" />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">{skill.description}</p>

      {/* Proficiency Bar */}
      <div className="flex justify-between text-xs text-gray-500 font-medium mb-1">
        <span>Proficiency</span>
        <span className="text-purple-700 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  ))}
</div>


        {/* Tools & Technologies */}
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-md">
          <h3 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolGroups.map((group, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-4">
                  {group.title}
                </h4>
                <div className="space-y-3">
                  {group.tools.map((tool, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-sm font-medium text-gray-800">
                        <span>{tool.name}</span>
                        <span className="text-purple-700 font-semibold">{tool.level}%</span>
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
