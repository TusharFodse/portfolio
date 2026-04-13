
import { ExternalLink, Github, Filter, ArrowRight, Code, Cpu, Database, Shield, Coffee, Bold } from 'lucide-react';
import chatbot from '../assets/chatbot.jpg';
import chattingapp from '../assets/chattingapp.jpg';
import copyrightDetection from '../assets/Copyrighted_detection_project.png';
import emartManagement from '../assets/EmartManagement.png';
import expenseTracker from '../assets/Expense_tracker.png';
import imageClassification from '../assets/imageClassification.jpg';
import resumeChecker from '../assets/Resume_checker.jpg';
import resumeAnalysis from '../assets/ResumeAnalysis.png';
import tusharImg from '../assets/Tushar.png';

// ProjectComponent with proper modal styling
export const ProjectComponent = ({ project, onClose }) => {
  const projectlist = [
    {
      id: 1,
      title: "Image Classification with CNN",
      data: "Developed an Image Classification system using Convolutional Neural Networks (CNNs) to automatically recognize and classify images into predefined categories. The project leverages TensorFlow and Keras for building and training deep learning models, while OpenCV is used for preprocessing tasks such as resizing, normalization, and data augmentation. Implemented CNN layers including convolution, pooling, and fully connected layers to achieve high accuracy on test datasets. The model was trained and evaluated on large-scale datasets, with optimizations like dropout and batch normalization to prevent overfitting. This project demonstrates skills in deep learning, computer vision, and Python programming, with practical applications in object recognition, face detection, and real-world AI-powered image analysis.",
      Languages: "Python",
      "Libraries/Frameworks": "TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib",
      image: imageClassification,
      Concepts: "CNN, Convolution Layers, Pooling, Dropout, Batch Normalization, Image Preprocessing, Data Augmentation",
    },
    {
      id: 2,
      title: "E-Mart Python App",
      data: "Developed a desktop-based e-commerce application with a user-friendly interface for browsing products, filtering categories, and managing carts. Integrated MySQL for backend data storage including users, products, and orders. Implemented user authentication, purchase management, and product search features. The app was built with Tkinter for the GUI, providing a smooth shopping experience similar to real-world e-commerce platforms.",
      Languages: "Python, SQL",
      "Libraries/Frameworks": "Tkinter, MySQL Connector, Pillow (for image handling)",
      image: emartManagement, 
      Concepts: "Desktop Application Development, GUI Design, Database Management, User Authentication, CRUD Operations",
    },
    {
      id: 3,
      title: "Expense Tracker Dashboard",
      data: "Designed and developed a Java-based Expense Tracking System that helps users record, categorize, and analyze their spending. Integrated MySQL for storing transactions and budgets, and implemented a dynamic dashboard using JSP and Servlets to display total and category-wise expenses with visualizations. Added machine learning capabilities using Weka to predict future spending patterns and provide financial insights. The system also supports budget management and real-time alerts for overspending.",
      Languages: "Java, SQL",
      "Libraries/Frameworks": "JSP, Servlet, JDBC, Chart.js, Weka, MySQL Connector",
      image: expenseTracker,
      Concepts: "Expense Management, Data Visualization, Machine Learning Predictions, Budget Tracking, CRUD Operations, Web Application Development",
    },
    {
      id: 4,
      title: "Face Recognition Attendance System",
      data: "Developed an automated attendance management system using face recognition technology to replace traditional roll-calls. Implemented real-time face detection and recognition using OpenCV and LBPH, later enhanced with FaceNet and SVM for higher accuracy. The system features a Tkinter-based GUI for student registration, manual and automatic attendance logging, and subject-wise batch attendance storage in CSV/MySQL. Integrated liveness detection techniques (blink and head-turn detection) to prevent spoofing through photos or videos. This project demonstrates strong skills in computer vision, deep learning, and system integration.",
      Languages: "Python, SQL",
      "Libraries/Frameworks": "OpenCV, Tkinter, NumPy, Pandas, FaceNet, LBPH, scikit-learn, Matplotlib",

      Concepts: "Face Recognition, Liveness Detection, GUI Development, Real-Time Image Processing, Attendance Automation, Database Integration"
    },
    {
      id: 5,
      title: "Multimedia Freezone",
      data: "Built a full-stack web application that allows users to find, upload, and use non-copyrighted photos while integrating an automated copyright detection mechanism. The frontend was developed in React with Tailwind CSS for a responsive and modern UI. The backend, powered by Node.js and Express, manages user authentication, image storage, and search functionality. Data is stored in MongoDB Atlas, supporting scalable access and retrieval of multimedia files. The platform helps users access royalty-free content safely, ensuring compliance with copyright rules.",
      Languages: "JavaScript",
      "Libraries/Frameworks": "React, Node.js, Express.js, MongoDB, Tailwind CSS, Mongoose",
      image: copyrightDetection,
      Concepts: "Full-Stack Web Development, REST API, User Authentication, Cloud Database Integration, Copyright Detection, Media Search & Retrieval"
    },
    {
      id: 6,
      title: "Real-Time Chat Application",
      data: "Built a real-time chat application using Java Sockets and MySQL for persistent storage. The system supports multiple clients, live messaging, and user authentication. Designed server-client architecture with multithreading for scalability and smooth communication.",
      Languages: "Java, SQL",
      "Libraries/Frameworks": "JDBC, MySQL Connector",
      image: chattingapp,
      Concepts: "Socket Programming, Client-Server Model, Multithreading, Database Integration",
    },
    {
      id: 7,
      title: "Custom Chatbot",
      data: "Built an AI-powered chatbot capable of adapting to user preferences and roleplaying in custom scenarios, including anime-inspired conversations. The backend was developed in Python with Flask, integrated with Groq API for leveraging Llama-2 language models. The frontend was created with HTML/CSS for a simple chat interface and deployed on Vercel. The chatbot supports contextual responses, personality-driven interactions, and demonstrates the integration of large language models into user applications.",
      Languages: "Python, JavaScript, HTML, CSS",
      "Libraries/Frameworks": "Flask, Groq API, Llama-2, Bootstrap",
      image: chatbot,
      Concepts: "Natural Language Processing, Large Language Models, API Integration, Role-based Chat, Web Application Deployment"
    },
    {
      id: 8,
      title: "AI-Powered Resume Analyzer & Career Prediction System using Neural Networks",
      data: "Developed an AI-powered resume screening system that analyzes resumes and predicts suitable job roles using Machine Learning and NLP techniques.Implemented resume parsing (PDF/DOCX), text preprocessing, and classification using Neural Networks and Scikit-learn models. The system provides top 3 job role predictions with confidence scores through a React-based UI and backend API. This project demonstrates strong skills in NLP, deep learning, and full-stack integration.",
      Languages: "Python, JavaScript, HTML, CSS",
      "Libraries/Frameworks": "React.js, Node.js / Express (or Flask), TensorFlow/Keras, Scikit-learn, NumPy, Pandas, Matplotlib",
      image: resumeAnalysis,
      Concepts: "Resume Parsing, Natural Language Processing (NLP), Text Classification, Neural Networks, Feature Engineering, Model Evaluation, REST API Development, Full Stack Integration"
    },
    {
  id: 9,
  title: "Copyright Detection using CNN",
  data: "Developed an AI-based image copyright detection system using Convolutional Neural Networks (CNN) to identify and classify images. Implemented image preprocessing techniques such as resizing, normalization, and data augmentation using OpenCV. Built and trained deep learning models using TensorFlow and Keras to detect similarities and potential copyright violations. Applied techniques like dropout and batch normalization to improve model performance and prevent overfitting. This project demonstrates strong skills in computer vision, deep learning, and Python programming.",
  Languages: "Python",
  "Libraries/Frameworks": "TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib",
  image: resumeChecker,
  Concepts: "CNN, Convolution Layers, Pooling, Dropout, Batch Normalization, Image Preprocessing, Data Augmentation, Image Classification"
}
  ];
  
  const projectDetails = projectlist.find(pj => pj.id === project.id);

  return (
     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-gradient-to-br from-white to-slate-100/90 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 relative">    {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl"></div>
        
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold text-slate-800">{projectDetails?.title}</h3>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700 text-2xl bg-slate-100 hover:bg-slate-200 rounded-full p-1 transition-colors duration-200"
            >
              &times;
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            
<p className="text-slate-700 leading-relaxed text-lg">
              {projectDetails?.data}
            </p>

            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50/50 rounded-xl border border-slate-200/50">
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                  <Code size={18} className="text-blue-500" />
                  Languages
                </h4>
                <p className="text-slate-700">{projectDetails?.Languages}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                  <Cpu size={18} className="text-green-500" />
                  Libraries/Frameworks
                </h4>
                <p className="text-slate-700">{projectDetails?.["Libraries/Frameworks"]}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                  <Database size={18} className="text-purple-500" />
                  Concepts
                </h4>
                <p className="text-slate-700">{projectDetails?.Concepts}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-200/50">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-full hover:bg-slate-900 transition-colors duration-300"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors duration-300 ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Project component
