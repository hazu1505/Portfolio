import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Main Content with Diagonal Split */}
      <div className="flex-grow flex flex-col md:flex-row relative">
        {/* Diagonal split overlay */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <div className="absolute inset-0 bg-gray-200"></div>
          <div className="absolute top-0 bottom-0 right-0 w-[55%] bg-black transform skew-x-[-12deg] origin-top-right translate-x-[10%]"></div>
          <div className="absolute top-0 bottom-0 right-0 w-[15%] bg-black"></div>
        </div>

        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[55%] p-12 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 bg-gray-200 md:bg-transparent"
        >
          <div className="max-w-md">
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 10 }}
              className="absolute top-10 left-10 z-20"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                  d="M8 6v12" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.path 
                  d="M8 12h8" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
                <motion.path 
                  d="M16 12v6" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                />
                <motion.circle 
                  cx="16" 
                  cy="6" 
                  r="2" 
                  fill="#8C92AC"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                />
                <motion.path 
                  d="M16 6v6" 
                  stroke="#8C92AC" 
                  strokeWidth="1" 
                  strokeDasharray="1 1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                />
              </svg>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-medium mb-4 text-gray-700"
            >
              Hi, I am
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-3 text-gray-900"
            >
              Hazarudeen N
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xl text-gray-600 mb-12"
            >
              Full-stack Developer / AI Enthusiast
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex space-x-4 mb-8"
            >
              <motion.a 
                href="mailto:hazarudeen1505@gmail.com" 
                className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 1000, damping: 20, mass: 0.3 } }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://github.com/hazu1505" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 1000, damping: 20, mass: 0.3 } }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/hazarudeen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 1000, damping: 20, mass: 0.3 } }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Download Resume Button - With its own animation matching the icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <motion.a
                href="../public/assets/Hazar_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gray-300 text-gray-800 rounded hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 1000, damping: 20, mass: 0.3 } }}
              >
                <FaDownload className="mr-2" />
                Download My Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[45%] p-12 md:p-16 lg:p-24 flex flex-col relative z-10 bg-black md:bg-transparent text-white"
        >
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-end items-center mb-12"
          >
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <Link to="/" className="text-white font-bold border-b-2 border-white pb-1 whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">About</Link>
              <Link to="/skills" className="text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">Skills</Link>
              <Link to="/projects" className="text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">Projects</Link>
              <Link to="/contact" className="text-white hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">Contact</Link>
            </div>
          </motion.nav>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-grow flex items-center justify-center"
          >
            {/* Profile Image */}
            <img 
              src="../public/assets/photo.jpg" 
              alt="Hazarudeen N" 
              className="w-90 h-96 object-cover rounded-full border-white shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
