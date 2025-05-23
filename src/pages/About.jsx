import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="inline-block text-2xl font-medium tracking-widest border-2 border-black py-4 px-12">
          A B O U T &nbsp; M E
        </h2>
      </motion.div>
      
      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-2xl text-center mb-16 text-gray-700"
      >
        <p>
          MCA graduate with expertise in full-stack development and AI.
          I blend formal education with practical skills, holding certifications in Front-End Development and Python programming.
        </p>
      </motion.div>
      
      {/* Explore Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-16"
      >
        <Link to="/projects" className="px-8 py-2 border-l border-r border-black text-sm tracking-widest">
          EXPLORE
        </Link>
      </motion.div>
      
      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-32 h-0.5 bg-black mb-20 flex items-center justify-center"
      >
        <div className="absolute flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black transform rotate-45" />
          ))}
        </div>
      </motion.div>
      
      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mb-20"
      >
        {/* Design */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gray-200 rounded-full opacity-50"></div>
              <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                <span className="text-3xl">✎</span>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-medium tracking-wider mb-4">DESIGN</h3>
          <p className="text-sm text-gray-600">
            Worked in Figma and Canva design, creating intuitive and visually appealing interfaces for web and mobile applications.
          </p>
        </div>
        
        {/* AI Applications */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gray-200 rounded-full opacity-50"></div>
              <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                <span className="text-3xl">🧠</span>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-medium tracking-wider mb-4">AI APPLICATIONS</h3>
          <p className="text-sm text-gray-600">
            Developing intelligent solutions using machine learning frameworks and natural language processing techniques.
          </p>
        </div>
        
        {/* Mobile & UI/UX */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gray-200 rounded-full opacity-50"></div>
              <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                <span className="text-3xl">📱</span>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-medium tracking-wider mb-4">MOBILE & UI/UX</h3>
          <p className="text-sm text-gray-600">
            Creating cross-platform mobile applications with React Native and designing intuitive user experiences.
          </p>
        </div>
      </motion.div>
      
      {/* Bottom Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="w-32 h-0.5 bg-black flex items-center justify-center"
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
        className="mt-16"
      >
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-black font-medium">
            About
          </Link>
          <Link to="/skills" className="text-gray-700 hover:text-black transition-colors duration-300">
            Skills
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-black transition-colors duration-300">
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
