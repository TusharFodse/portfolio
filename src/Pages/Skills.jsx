import { useState } from 'react';
import { Code, Cpu, Database, Palette, Wrench, ExternalLink, ChevronRight, Star, Zap,Brain,Languages ,FileCode2,Code2} from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');

  const skillsData = {
    'ai-ml': {
      title: 'AI & Machine Learning',
      icon: <Cpu className="text-blue-600" size={24} />,
      description: 'Technologies and frameworks I use for building intelligent systems',
      skills: [
        { name: 'Python', level: 90, projects: 9 },
        { name: 'TensorFlow', level: 80, projects: 5 },
        // { name: 'Larger Language Model', level: 70, projects: 3 },
        { name: 'Scikit-learn', level: 85, projects: 6 },
        { name: 'Pandas', level: 88, projects: 7 },
        // { name: 'NumPy', level: 90, projects: 9 },
        { name: 'OpenCV', level: 75, projects: 4 },
        { name: 'NLTK', level: 70, projects: 3 },
      ]
    },
    'web-dev': {
      title: 'Web Development',
      icon: <Code className="text-green-600" size={24} />,
      description: 'Technologies I use for building modern web applications',
      skills: [
        { name: 'HTML/CSS', level: 90, projects: 12 },
        { name: 'JavaScript', level: 88, projects: 10 },
        { name: 'React', level: 95, projects: 8 },
        { name: 'Node.js', level: 90, projects: 6 },
        // { name: 'Tailwind CSS', level: 90, projects: 9 },
        { name: 'REST APIs', level: 85, projects: 7 },
        { name: 'MongoDB', level: 50, projects: 1 },
        { name: 'JSP', level: 70, projects: 1 },
      ]
    },
    'Programming Language' :{
        title: 'Programmin Language',
      icon: <Code2 className="text-purple-600" size={24} />,
      description: 'Programming Language to buld Software',
      skills:[
        { name: 'JAVA', level: 85, projects: 4 },
        { name: 'Python', level: 90, projects: 9 },
      ]
    }
    ,
    'data': {
      title: 'Data Science',
      icon: <Database className="text-purple-600" size={24} />,
      description: 'Tools and techniques for data analysis and visualization',
      skills: [
        { name: 'Data Analysis', level: 85, projects: 7 },
        { name: 'Data Visualization', level: 80, projects: 6 },
        { name: 'SQL', level: 75, projects: 3 },
        { name: 'Matplotlib', level: 80, projects: 6 },
        { name: 'Seaborn', level: 75, projects: 5 },
        { name: 'Jupyter Notebooks', level: 90, projects: 8 },
      ]
    },
    'tools': {
      title: 'Tools & Technologies',
      icon: <Wrench className="text-amber-600" size={24} />, // Changed from Tools to Wrench
      description: 'Development tools and technologies I work with',
      skills: [
        { name: 'Git & GitHub', level: 90, projects: 1 },
        { name: 'n8n', level: 70, projects: 1 },
        { name: 'PyCharm', level: 80, projects: 8 },
        { name: 'Langchain and LangGraph', level: 90, projects: 4 },
        { name: 'Docker', level: 65 },
        { name: 'Postman', level: 85, projects: 9 },
      ]
    },
     'ml-models': {
      title: 'ML Models & Algorithms',
      icon: <Brain className="text-purple-600" size={24} />,
      description: 'Machine learning models and algorithms I have implemented',
      skills: [
        { name: 'Linear Regression', level: 95, projects: 4 },
        { name: 'Logistic Regression', level: 90, projects: 3 },
        { name: 'Decision Trees', level: 75, projects: 3 },
        { name: 'Random Forest', level: 80, projects: 4 },
        { name: 'SVM', level: 70, projects: 2 },
        { name: 'K-Means Clustering', level: 75, projects: 3 },
        { name: 'Neural Networks', level: 95, projects: 3 },
        { name: 'CNN', level: 90, projects: 2 },
        { name: 'RNN', level: 65, projects: 1 },

      ]
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white text-slate-800 shadow-lg'
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
            >
              {skillsData[category].icon}
              {skillsData[category].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Skills List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  {skillsData[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">{skillsData[activeCategory].title}</h3>
                  <p className="text-slate-600">{skillsData[activeCategory].description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {skillsData[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < Math.floor(skill.level / 20) ? "text-amber-400 fill-amber-400" : "text-slate-300"} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-500">{skill.projects} projects</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-6">
            {/* Proficiency Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Proficiency Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-20 text-sm text-slate-600">Expert</div>
                  <div className="flex-1 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-2 w-full bg-green-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20 text-sm text-slate-600">Advanced</div>
                  <div className="flex-1 flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-2 w-full bg-blue-500 rounded-full"></div>
                    ))}
                    <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20 text-sm text-slate-600">Intermediate</div>
                  <div className="flex-1 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-2 w-full bg-amber-500 rounded-full"></div>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="h-2 w-full bg-slate-200 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-20 text-sm text-slate-600">Beginner</div>
                  <div className="flex-1 flex gap-1">
                    <div className="h-2 w-full bg-purple-500 rounded-full"></div>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-2 w-full bg-slate-200 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Featured Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Zap size={18} className="text-blue-600" />
                  <span className="text-slate-800">Machine Learning</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Zap size={18} className="text-purple-600" />
                  <span className="text-slate-800">React Development</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Zap size={18} className="text-red-600" />
                  <span className="text-slate-800">Data Analysis</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <Zap size={18} className="text-green-600" />
                  <span className="text-slate-800">Python Programming</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Zap size={18} className="text-amber-600" />
                  <span className="text-slate-800">Java Programming</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">See My Projects</h3>
              <p className="mb-4 opacity-90">Check out how I've applied these skills in real-world projects</p>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                View Projects <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Code className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Web Development</h3>
            <p className="text-slate-600">Building responsive and modern web applications</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Cpu className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">AI & ML</h3>
            <p className="text-slate-600">Creating intelligent systems and models</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Database className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Data Science</h3>
            <p className="text-slate-600">Analyzing and visualizing data for insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;