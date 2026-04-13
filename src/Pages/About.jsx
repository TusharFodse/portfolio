import { useState } from 'react';
import { Award, Users, Code, Cpu, Shield, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">My Journey in Tech</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From academic focus to passionate AI/ML developer and cybersecurity enthusiast
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'journey', label: 'My Journey', icon: <Code size={18} /> },
            { id: 'internship', label: 'Internship', icon: <Award size={18} /> },
            { id: 'sih', label: 'SIH Experience', icon: <Shield size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              style={{cursor: 'pointer' }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
          {/* Journey Content */}
          {activeTab === 'journey' && (
            <div className="space-y-6">
                
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full mt-1">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Transformation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    In my first year of engineering, my focus was mainly on academics, and I
                    wasn't much involved in technology. However, everything changed in my
                    second year when I received a paid internship in Machine Learning. That
                    opportunity sparked my passion for AI/ML and encouraged me to dive
                    deeper into the world of technology.
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    Since then, I've actively participated in impactful projects and started
                    enjoying the process of building projects, learning new tools, and
                    collaborating with teams. Today, I'm not only passionate about AI/ML but
                    also confident in leading and contributing to projects — from college-level
                    initiatives to larger collaborative efforts.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-10 relative">
                <div className="absolute left-7 top-2 h-full w-0.5 bg-blue-200"></div>
                
                {/* Year 1 */}
                <div className="flex items-center gap-6 mb-8 relative">
                  <div className="bg-blue-600 text-white rounded-full h-14 w-14 flex items-center justify-center z-10 font-bold">Y1</div>
                  <div className="bg-slate-100 p-4 rounded-lg flex-1">
                    <h4 className="font-semibold text-slate-800">Focus on Academics</h4>
                    <p className="text-slate-600">Building strong foundational knowledge</p>
                  </div>
                </div>
                
                {/* Year 2 */}
                <div className="flex items-center gap-6 mb-8 relative">
                  <div className="bg-blue-600 text-white rounded-full h-14 w-14 flex items-center justify-center z-10 font-bold">Y2</div>
                  <div className="bg-blue-50 p-4 rounded-lg flex-1">
                    <h4 className="font-semibold text-slate-800">ML Internship & Discovery</h4>
                    <p className="text-slate-600">Paid internship sparked passion for AI/ML</p>
                  </div>
                </div>
                
                {/* Year 3+ */}
                <div className="flex items-center gap-6 relative">
                  <div className="bg-blue-600 text-white rounded-full h-14 w-14 flex items-center justify-center z-10 font-bold">Y3+</div>
                  <div className="bg-blue-50 p-4 rounded-lg flex-1">
                    <h4 className="font-semibold text-slate-800">Active Participation & Growth</h4>
                    <p className="text-slate-600">SIH cybersecurity project, team collaboration, and skill development</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Internship Content */}
          {activeTab === 'internship' && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full mt-1">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Machine Learning Training</h3>
                  <div className="bg-green-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                      <Calendar size={18} />
                      <span>2025 - Internshala + IITM Pravartak</span>
                    </div>
                    <p className="text-slate-700">
                      Successfully completed comprehensive Machine Learning Training program
                    </p>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Skills Acquired</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      'Python for ML',
                      'Data Analytics',
                      'Regression Techniques',
                      'Classification Algorithms',
                      'Clustering Methods',
                      'Model Evaluation'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-slate-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Practical Experience</h4>
                  <p className="text-slate-700">
                    Strengthened practical knowledge through hands-on exercises and real-world projects,
                    building a solid foundation in machine learning concepts and applications.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SIH Content */}
          {activeTab === 'sih' && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full mt-1">
                  <Shield className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Smart India Hackathon - Cybersecurity Domain</h3>
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-purple-700 font-medium mb-2">
                      <Users size={18} />
                      <span>Team InfinityX</span>
                    </div>
                    <p className="text-slate-700">
                      Worked on a Windows Vulnerability Analyzer to detect system-level weaknesses in networks and computers.
                    </p>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">My Role & Contributions</h4>
                  <p className="text-slate-700 mb-4">
                    Focused on identifying vulnerabilities inside computers using Win32 library and PyWin.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Skills Gained</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      'Windows System Security',
                      'Vulnerability Detection',
                      'Python Automation',
                      'Win32 API Integration',
                      'Team Collaboration',
                      'Problem-solving under pressure'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-slate-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">Outcome</h4>
                  <p className="text-slate-700">
                    Gained hands-on experience in Windows system security, automation, and vulnerability detection,
                    while working as part of a collaborative team to solve real-world cybersecurity challenges.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};