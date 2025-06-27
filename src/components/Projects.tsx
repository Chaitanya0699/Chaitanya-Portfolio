import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Heart } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Food Delivery Mobile App",
      category: "Mobile Design",
      type: "Mobile",
      description: "Redesigned user flow for a food delivery app, focusing on reducing order completion time by 40%.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["UI/UX", "Mobile", "Figma", "User Research"],
      color: "from-orange-500 to-red-600",
      featured: true
    },
    {
      title: "Personal Finance Dashboard",
      category: "Web Application",
      type: "Web",
      description: "Clean, intuitive dashboard design for personal finance management with data visualization.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Dashboard", "Data Viz", "Web Design"],
      color: "from-blue-500 to-purple-600",
      featured: false
    },
    {
      title: "E-learning Platform",
      category: "Web Design",
      type: "Web",
      description: "Student-centered design for online learning platform with focus on engagement and accessibility.",
      image: "https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Education", "UX Research", "Accessibility"],
      color: "from-green-500 to-teal-600",
      featured: true
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Design",
      type: "Mobile",
      description: "Motivational fitness app design with gamification elements and social features.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Fitness", "Mobile", "Gamification"],
      color: "from-pink-500 to-rose-600",
      featured: false
    },
    {
      title: "Local Business Website",
      category: "Web Design",
      type: "Web",
      description: "Modern, responsive website design for local restaurant with online ordering system.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Restaurant", "Responsive", "Local Business"],
      color: "from-yellow-500 to-orange-600",
      featured: false
    },
    {
      title: "Task Management Tool",
      category: "Web Application",
      type: "Web",
      description: "Collaborative task management interface with team features and project tracking.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Productivity", "Collaboration", "SaaS"],
      color: "from-indigo-500 to-purple-600",
      featured: true
    }
  ];

  const filters = ['All', 'Mobile', 'Web'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Eye size={16} />
            My Work
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Featured 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing user-centered design solutions 
            across various industries and platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                project.featured ? 'ring-2 ring-purple-200' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
                  ⭐ Featured Project
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center`}>
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors border border-white/30">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors border border-white/30">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <Heart size={16} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and create amazing user experiences.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;