import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("L86AlLP6R7jf_viAW"); // Replace with your actual EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using the form reference approach
      const response = await emailjs.sendForm(
        'service_bb5wlcq', // Replace with your actual Service ID
        'template_1k5lmud', // Replace with your actual Template ID
        form.current,
        'L86AlLP6R7jf_viAW' // Replace with your actual public key
      );
      
      console.log('Email sent successfully:', response);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
      } else {
        console.error('Unexpected response status:', response.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow bg-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="inline-block text-2xl font-medium tracking-widest border-2 border-black py-4 px-12">
              C O N T A C T
            </h2>
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-10 text-gray-700"
          >
            <p className="max-w-xl mx-auto">
              Feel free to reach out for collaborations, questions, or just to say hello. 
              I'm always open to discussing new projects and opportunities.
            </p>
          </motion.div>
          
          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-32 h-0.5 bg-black mb-16 flex items-center justify-center mx-auto relative"
          >
            <div className="absolute flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-black transform rotate-45" />
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="ENTER YOUR NAME*"
                required
                className="w-full p-3 bg-transparent border-b-2 border-black focus:outline-none text-sm"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="ENTER YOUR EMAIL*"
                required
                className="w-full p-3 bg-transparent border-b-2 border-black focus:outline-none text-sm"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                placeholder="PHONE NUMBER"
                className="w-full p-3 bg-transparent border-b-2 border-black focus:outline-none text-sm"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="YOUR MESSAGE*"
                required
                className="w-full p-3 bg-transparent border-b-2 border-black focus:outline-none text-sm"
              ></textarea>
            </div>
            
            {/* Hidden field for recipient email */}
            <input 
              type="hidden" 
              name="to_email" 
              value="hazarudeen1505@gmail.com" 
            />
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-center"
              >
                There was an error sending your message. Please try again.
              </motion.div>
            )}
            
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-12 py-3 border-l border-r border-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Back to Home */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="mb-6 flex flex-col items-center text-sm tracking-widest hover:text-gray-300 transition-colors duration-300"
            >
              BACK TO HOME
            </motion.div>
          </Link>
          
          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex space-x-6 mb-6"
          >
            {[
              { icon: <FaFacebookF />, href: "https://www.facebook.com/share/16uetvq15u/" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/hazarudeen" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/hazar_hazu/" },
              { icon: <FaEnvelope />, href: "mailto:hazarudeen1505@gmail.com" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.1 + (index * 0.05),
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "white",
                  color: "#1a202c"
                }}
                className="w-8 h-8 flex items-center justify-center border border-white rounded-sm transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          
          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-xs text-gray-400"
          >
            ©2023 Hazarudeen N. All Rights Reserved.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
