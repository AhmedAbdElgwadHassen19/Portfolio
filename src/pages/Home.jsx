import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaWhatsapp, FaReact, FaCode, FaChartBar, FaMobile, FaDesktop, FaQuoteLeft, FaFacebook, FaHeadset } from 'react-icons/fa'
import { FaHandsHelping } from 'react-icons/fa'
import PageWrapper from '../components/PageWrapper'
import Footer from '../components/Footer'
import profileImage from '../assets/ahmed.jpg.jpg'


const Home = () => {
  const services = [
    {
      icon: FaReact,
      title: 'React Development',
      description: 'Building modern, interactive web applications using React.js and latest technologies.'
    },
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Creating responsive, pixel-perfect user interfaces with HTML5, CSS3, and JavaScript.'
    },
    {
      icon: FaChartBar,
      title: 'Dashboard Development',
      description: 'Designing and developing admin panels and data visualization dashboards.'
    },
    {
      icon: FaMobile,
      title: 'Mobile Responsive',
      description: 'Ensuring your website looks perfect on all devices and screen sizes.'
    },
    {
      icon: FaDesktop,
      title: 'UI/UX Design',
      description: 'Creating beautiful, user-friendly interfaces that enhance user experience.'
    },
    {
      icon: FaHeadset,
      title: 'Customer Support Anytime',
      description: '24/7 support available to address any concerns or issues with your website or application.'
    },
    {
      icon: FaQuoteLeft,
      title: 'Customer Feedback',
      description: 'We value your feedback and continuously improve our services based on client suggestions and needs.'
    }
  ]

  const skills = [
    'React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Bootstrap', 'Firebase', 'ShadCN UI', 'Next.js', 'Git', 'GitHub'
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      opinion: 'Ahmed delivered an exceptional React dashboard for our company. His attention to detail and technical expertise exceeded our expectations.'
    },
    {
      name: 'Mohammed Al-Rashid',
      country: 'KSA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      opinion: 'Working with Ahmed was a pleasure. He created a beautiful, responsive website that perfectly captured our brand vision.'
    },
    {
      name: 'Ahmad Al-Fawaz',
      country: 'Bahrain',
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=150&h=150&fit=crop&crop=face',
      opinion: 'The website Ahmed developed for my business has significantly increased our online presence. His work is both beautiful and functional.'
    },
    {
      name: 'Rami Khalil',
      country: 'Jordan',
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop&crop=face',
      opinion: 'Ahmed\'s attention to detail and commitment to delivering quality work made our collaboration a great success. I will definitely work with him again.'
    },
    {
      name: 'Ali Al-Jubouri',
      country: 'Iraq',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      opinion: 'His technical skills combined with excellent communication made the development process smooth and efficient. The final product was exactly what we needed.'
    }
  ]

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/01201302871',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'http://facebook.com/CodeCrestDesign',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Khamsat',
      icon: FaHandsHelping,
      url: 'https://khamsat.com/programming/custom-website-development/2959182-انشاء-وتصميم-المواقع-الإلكترونية',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 dark:from-primary-800 dark:via-purple-800 dark:to-pink-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Ahmed Abdelgwad
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Hassan Gaber
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-8 text-gray-100"
          >
            Frontend Developer & React Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200"
          >
            Creating beautiful, responsive web applications with modern technologies. 
            Passionate about delivering exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/projects"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="glass-card px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/10 transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              Frontend Developer specializing in React.js, Next.js, and Firebase, with hands-on experience building scalable, 
              responsive web applications. Skilled in developing interactive dashboards,
              AI-integrated tools, and map-based systems, with a focus on clean code and seamless user experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-lg text-center font-medium hover:scale-105 transition-transform"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🎯 Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  2 years building modern web applications
                </p>
              </div>
              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🚀 Specialization
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  React.js, Firebase, Dashboards, AI Tools
                </p>
              </div>
              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  💡 Focus
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  User Experience & Modern Web Technologies
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I offer a range of frontend development services to help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-3xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Ready to start your next project? Get in touch with me through your preferred platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-all ${social.color}`}
                >
                  <social.icon size={24} />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Feedback Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Client Feedback
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              What my clients say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card relative"
              >
                <FaQuoteLeft className="text-primary-600 text-2xl mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{testimonial.opinion}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}

export default Home 