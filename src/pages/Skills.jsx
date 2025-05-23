import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';

const skills = {
  usingNow: [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-cyan-500" /> },
  ],
  learning: [
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'SQL', icon: <FaDatabase className="text-green-600" /> },
  ],
  other: [
    { name: 'Figma', icon: <FaFigma className="text-pink-600" /> },
    { name: 'Canva', icon: <SiCanva className="text-red-500" /> },
  ],
};

const SkillSection = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <h2 className="text-xl font-semibold mb-4 uppercase tracking-widest">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-gray-100 transition-transform duration-300 transform hover:scale-110"
        >
          <div
            className="text-5xl mb-2 fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill.icon}
          </div>
          <p className="text-sm font-medium text-gray-700 text-center">{skill.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-6 sm:px-20 py-0 flex flex-col">

      {/* Embedded styles for fadeIn and fadeInUp */}
      <style>{`
        .fadeIn {
          opacity: 0;
          animation: fadeInActual 1s forwards;
        }
        .fadeInUp {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeInUpActual 1s forwards;
        }
        @keyframes fadeInActual {
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUpActual {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 mt-14"
      >
        <h1 className="inline-block text-3xl font-medium tracking-widest border-2 border-black py-4 px-12 uppercase">
          S K I L L S
        </h1>
      </motion.div>

      {/* Top Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-32 h-0.5 bg-black mb-5 flex items-center justify-center mx-auto relative"
      >
        <div className="absolute flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black transform rotate-45" />
          ))}
        </div>
      </motion.div>

      {/* Skill Sections */}
      <div className="mt-12 flex-grow">
        <SkillSection title="Technologies Known" skills={skills.usingNow} />
        <SkillSection  skills={skills.learning} />
        <SkillSection title="Other Skills" skills={skills.other} />
      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="w-32 h-0.5 bg-black flex items-center justify-center mx-auto relative mb-6"
      >
        <div className="absolute flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black transform rotate-45" />
          ))}
        </div>
      </motion.div>

      {/* Navigation at Bottom */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="mt-auto mb-6"
      >
        <div className="flex items-center justify-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black transition-colors duration-300">
            About
          </Link>
          <Link to="/skills" className="text-black font-medium">
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
