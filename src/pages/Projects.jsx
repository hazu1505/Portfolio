import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-24 px-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="inline-block text-2xl font-medium tracking-widest border-2 border-black py-4 px-12">
          P R O J E C T S
        </h2>
      </motion.div>
      
      {/* Top Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-32 h-0.5 bg-black mb-8 flex items-center justify-center mx-auto relative"
      >
        <div className="absolute flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black transform rotate-45" />
          ))}
        </div>
      </motion.div>
      
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-2xl text-center mb-12 text-gray-700"
      >
      </motion.div>
      
      {/* Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="max-w-5xl w-full mb-24 bg-white p-8 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-semibold mb-4">Mercantile Society Onboarding Association</h3>
        <p className="text-gray-600 mb-6">
          I played a key role in developing the front-end interface for the Mercantile Society Onboarding Association mobile application. 
          The project focused on creating a seamless onboarding experience for new members.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">My Contributions:</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Implemented responsive UI components using React Native</li>
            <li>Created user-friendly onboarding flows and form validations</li>
            <li>Collaborated with the design team to ensure pixel-perfect implementation</li>
            <li>Optimized performance for smooth transitions and animations</li>
            <li>Added local storage functionality to store user data and preferences</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-medium mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "React Native", delay: 0 },
              { name: "JavaScript", delay: 0.1 },
              { name: "Redux", delay: 0.2 },
              { name: "UI/UX Design", delay: 0.3 },
              { name: "AsyncStorage", delay: 0.4 }
            ].map((tech, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 1.0 + tech.delay, 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
        
        <motion.a 
          href="https://github.com/hazu1505/Mercantile-hazar1505.git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project on GitHub
        </motion.a>
      </motion.div>
      
      {/* Bottom Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="w-32 h-0.5 bg-black flex items-center justify-center mx-auto relative mb-10"
      >
        <div className="absolute flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black transform rotate-45" />
          ))}
        </div>
      </motion.div>
      
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="mt-auto"
      >
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black transition-colors duration-300">
            About
          </Link>
          <Link to="/skills" className="text-gray-700 hover:text-black transition-colors duration-300">
            Skills
          </Link>
          <Link to="/projects" className="text-black font-medium">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-black transition-colors duration-300">
            Contact
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
