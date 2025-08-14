import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaGithub, FaFacebook } from 'react-icons/fa'
import PageWrapper from '../components/PageWrapper'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Format WhatsApp message with line breaks
    const message = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/201201302871?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ahmed.a.hassan.gaber@gmail.com',
      link: 'mailto:ahmed.a.hassan.gaber@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+201201302871',
      link: 'tel:+01201302871'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Alexandria, Egypt',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      link: 'https://wa.me/201201302871',
      color: 'text-green-600 hover:text-green-700'
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      link: 'http://facebook.com/CodeCrestDesign',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/AhmedAbdElgwadHassen19',
      color: 'text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300'
    }
  ]

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto"
          >
            Have a project in mind? Let's work together to create something amazing. 
            I'm always excited to take on new challenges and bring innovative ideas to life.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp size={20} />
                  <span>Send on WhatsApp</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                        <info.icon className="text-primary-600 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-all ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="card bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Build Something Great Together
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm passionate about creating exceptional web experiences. Whether you need a 
                  React application, a stunning website, or a complex dashboard, I'm here to help.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Quick response within 24 hours</li>
                  <li>• Free consultation</li>
                  <li>• Competitive pricing</li>
                  <li>• 100% satisfaction guarantee</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  )
}

export default Contact 