import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ChevronLeft, ChevronRight, ExternalLink, Instagram } from 'lucide-react';
import projectimage from "../assets/CurruntProject.png"

export const Contact = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Sample project data
  const projects = [
    
{
  title: "TrackSphere: AI-Powered Project Management & Risk Analytics Platform",
  description: "A production-level enterprise project management platform that enables organizations to track project progress, assign employee tasks, monitor budgets, analyze risks, manage milestones, and visualize workflows through interactive dashboards and Gantt charts. Integrated AI-based risk prediction and progress analytics for smarter project governance and decision-making.",
  technologies: ["ReactJS", "FastAPI", "PostgreSQL", "Tailwind CSS", "ShadCN UI", "JWT Authentication", "Recharts", "WebSockets", "Groq API", "Docker"],
  image: projectimage,
  link: "#"
}
    
    
  ];

  // const nextProject = () => {
  //   setCurrentProjectIndex((prevIndex) => 
  //     prevIndex === projects.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevProject = () => {
  //   setCurrentProjectIndex((prevIndex) => 
  //     prevIndex === 0 ? projects.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-2xl mb-6 shadow-lg">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Current Work / Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Feel free to explore them!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Let's talk
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Email</h3>
                    <a href="mailto:tusharfodse2003@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                      fodse.tushar.it035@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Phone</h3>
                    <a href="tel:+919765456789" className="text-slate-600 hover:text-indigo-600 transition-colors">
                      +91 9325854137
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">Location</h3>
                    <p className="text-slate-600">Shahapur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Follow me
              </h2>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/TusharFodse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-100 text-slate-700 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                &ensp;
                <a 
                  href="https://www.linkedin.com/in/tushar-fodse-093963329/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-100 text-slate-700 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>

                
                
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="group bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Currunt Project
            </h2>
            
            <div className="relative overflow-hidden rounded-xl mb-6">
              <img 
                src={projects[currentProjectIndex].image} 
                alt={projects[currentProjectIndex].title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">{projects[currentProjectIndex].title}</h3>
              </div>
              
              {/* Navigation arrows */}
              {/* <button 
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
              >
                {/* <ChevronLeft className="h-5 w-5 text-slate-700" /> */}
              {/* </button>
              <button 
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
              > */}
                {/* <ChevronRight className="h-5 w-5 text-slate-700" />
              // </button> */} 
            </div>
            
            <p className="text-slate-600 mb-6">
              {projects[currentProjectIndex].description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[currentProjectIndex].technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href="https://github.com/TusharFodse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Project on Github
              <ExternalLink className="h-4 w-4" />
            </a>
            
            {/* Project indicators */}
            
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-slate-500">
            Interested in working together? I'm always open to discussing new projects and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};