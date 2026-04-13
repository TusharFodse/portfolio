import { useState } from 'react';
import { ExternalLink, Github, Filter, ArrowRight, Code, Cpu, Database, Coffee } from 'lucide-react';
import { ProjectComponent } from '../components/ProjectComponent';

// Your Asset Imports
import neuralNetwork from "../assets/image.png";
import chatbot from '../assets/chatbot.jpg';
import chattingapp from '../assets/chattingapp.jpg';
import copyrightDetection from '../assets/Copyrighted_detection_project.png';
import emartManagement from '../assets/EmartManagement.png';
import expenseTracker from '../assets/Expense_tracker.png';
import imageClassification from '../assets/imageClassification.jpg';
import resumeChecker from '../assets/Resume_checker.jpg';
import resumeAnalysis from '../assets/ResumeAnalysis.png';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projectsData = [
    {
      id: 1,
      title: "Image Classification with CNN",
      description: "A convolutional neural network model for image classification using TensorFlow and Keras.",
      image: imageClassification,
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
      category: ["ai-ml", "python"],
      githubUrl: "https://github.com/TusharFodse/Copyright-Dectection",
      liveUrl: null,
      featured: false
    },
    {
      id: 2,
      title: "E-Mart Python App",
      description: "A desktop e-commerce application with product filtering, cart functionality, and user authentication.",
      image: emartManagement,
      technologies: ["Python", "Tkinter", "MySQL"],
      category: ["python"],
      githubUrl: "https://github.com/TusharFodse/StoreManagement",
      liveUrl: null,
      featured: false
    },
    {
      id: 3,
      title: "Expense Tracker Dashboard",
      description: "A Java-based expense tracking system with data visualization and ML-powered spending predictions.",
      image: expenseTracker,
      technologies: ["Java", "Weka", "MySQL", "Servlet", "JSP"],
      category: ["ai-ml", "java"],
      githubUrl: "https://github.com/TusharFodse/expense-tracker",
      liveUrl: null,
      featured: false
    },
    {
      id: 4,
      title: "Face Recognition Attendance System",
      description: "Automated attendance system using facial recognition with liveness detection features.",
      image: neuralNetwork,
      technologies: ["Python", "Tkinter", "OpenCV", "LBPH", "FaceNet"],
      category: ["ai-ml", "python"],
      githubUrl: "https://github.com/TusharFodse/face-attendance-system",
      liveUrl: null,
      featured: false
    },
    {
      id: 5,
      title: "Multimedia Freezone",
      description: "Web application for finding and using non-copyrighted photos with copyright detection.",
      image: copyrightDetection,
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      category: ["web-dev", "ai-ml", "python"],
      githubUrl: "https://github.com/TusharFodse/mediafreezone",
      liveUrl: null,
      featured: false
    },
    {
      id: 6,
      title: "Chatting Application",
      description: "Real-time chat app using Java Sockets with multi-user support and message storage.",
      image: chattingapp,
      technologies: ["Java", "Socket Programming", "MySQL", "Swing"],
      category: ["java"],
      githubUrl: "https://github.com/TusharFodse/chat-app",
      liveUrl: null,
      featured: false
    },
    {
      id: 7,
      title: "Custom Chatbot",
      description: "AI chatbot that adapts to user preferences and roleplays based on user requests specially anime.",
      image: chatbot,
      technologies: ["Python", "Flask", "Groq API", "Llama-2", "HTML/CSS"],
      category: ["web-dev", "ai-ml"],
      githubUrl: "https://github.com/TusharFodse/chat-bot-anime",
      liveUrl: null,
      featured: false
    },
    {
      id: 8,
      title: "Resume Analyzer AI",
      description: "AI-powered resume screening system that analyzes resumes and predicts suitable job roles using Neural Networks.",
      image: resumeAnalysis,
      technologies: ["Python", "React.js", "Node.js", "Flask", "TensorFlow", "Scikit-learn"],
      category: ["web-dev", "ai-ml", "python"],
      githubUrl: "https://github.com/TusharFodse/Resume-Screening-NeuralNetwork-Project",
      liveUrl: null,
      featured: false
    },
    {
      id: 9,
      title: "Copyright Detection using CNN",
      description: "Developed an AI-based image copyright detection system using CNN to identify similarities and potential violations.",
      image: resumeChecker,
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib"],
      category: ["ai-ml", "python"],
      githubUrl: "https://github.com/TusharFodse/Copyright-Dectection",
      liveUrl: null,
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Filter size={16} /> },
    { id: 'ai-ml', label: 'AI/ML', icon: <Cpu size={16} /> },
    { id: 'web-dev', label: 'Web Dev', icon: <Code size={16} /> },
    { id: 'python', label: 'Python', icon: <Coffee size={16} /> },
    { id: 'java', label: 'Java', icon: <Database size={16} /> },
  ];

  // UPDATED: Filtering logic for array categories
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => Array.isArray(p.category) ? p.category.includes(activeFilter) : p.category === activeFilter);

  const categoryColors = {
    'ai-ml': { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
    'web-dev': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
    'python': { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200' },
    'java': { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' },
    'default': { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' }
  };

  // Helper to get styling based on the first category in the array
  const getDisplayCategory = (cat) => Array.isArray(cat) ? cat[0] : cat;
  const getCategoryColor = (cat) => categoryColors[getDisplayCategory(cat)] || categoryColors.default;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore some of my work across AI/ML, web development, and desktop applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === f.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm border border-slate-200'
              }`}
            >
              {f.icon} {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const displayCat = getDisplayCategory(project.category);
            const color = getCategoryColor(project.category);
            
            return (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="h-48 relative overflow-hidden bg-slate-200">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100">
                       <div className="text-5xl text-blue-300 opacity-50">
                        {displayCat === 'ai-ml' && <Cpu size={48} />}
                        {displayCat === 'web-dev' && <Code size={48} />}
                        {displayCat === 'python' && <Coffee size={48} />}
                        {displayCat === 'java' && <Database size={48} />}
                      </div>
                    </div>
                  )}
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full shadow-md">Featured</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex gap-1">
                    {/* Displaying first category as main badge */}
                    <span className={`px-3 py-1 ${color.bg} ${color.text} text-xs font-medium rounded-full capitalize border ${color.border}`}>
                      {displayCat}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-1">{project.title}</h4>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 h-10">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-50 text-slate-400 text-xs rounded-full">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium" onClick={(e) => e.stopPropagation()}>
                        <Github size={16} /> <span>Code</span>
                      </a>
                    </div>
                    <button className="text-xs text-blue-600 font-medium hover:text-blue-800">Details →</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectComponent 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          colors={getCategoryColor(selectedProject.category)}
        />
      )}
    </section>
  );
};

export default Project;