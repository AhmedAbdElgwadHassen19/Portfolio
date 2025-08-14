import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa'
import PageWrapper from '../components/PageWrapper'
import ProjectCard from '../components/ProjectCard'
import { useAdmin } from '../context/AdminContext'
import { projectsAPI, adminAPI } from '../services/api'
import { Link } from 'react-router-dom'

const Admin = () => {
  const { isAuthenticated, login } = useAdmin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    githubLink: '',
    liveLink: '',
    description: ''
  })
  const [submitLoading, setSubmitLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects()
    }
  }, [isAuthenticated])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoginError('')
      // Only allow the configured admin email
      const allowedAdmin = import.meta.env.VITE_ADMIN_EMAIL
      if (email !== allowedAdmin) {
        setLoginError('هذا الحساب ليس حساب المدير')
        return
      }

      const response = await adminAPI.login({ email, password })
      if (response?.data?.uid) {
        // store a simple token in localStorage to keep compatibility with AdminContext
        login('admin-token')
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      console.error('Login error', error)
      setLoginError('فشل تسجيل الدخول')
    }
  }

  const fetchProjects = async () => {
    try {
      setLoading(true)
  const response = await projectsAPI.getAll()
  setProjects(response.data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitLoading(true)
    
    try {
      if (editingProject) {
        await projectsAPI.update(editingProject._id, formData)
      } else {
        await projectsAPI.create(formData)
      }

      await fetchProjects()
      resetForm()
    } catch (error) {
      console.error('Error saving project:', error)
    } finally {
      setSubmitLoading(false)
    }
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      imageUrl: project.imageUrl,
      githubLink: project.githubLink,
      liveLink: project.liveLink,
      description: project.description
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
  await projectsAPI.delete(id)
        await fetchProjects()
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      imageUrl: '',
      githubLink: '',
      liveLink: '',
      description: ''
    })
    setEditingProject(null)
    setShowForm(false)
  }

  if (!isAuthenticated) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card max-w-md w-full relative"
          >
            <Link 
              to="/" 
              className="absolute top-4 left-4 flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>العودة للرئيسية</span>
            </Link>

            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 mt-4">
              تسجيل دخول المدير
            </h1>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                  placeholder="أدخل كلمة مرور المدير"
                />
              </div>
              
              {loginError && (
                <div className="text-red-600 text-sm text-center">
                  {loginError}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                تسجيل الدخول
              </button>
            </form>
          </motion.div>
        </div>
      </PageWrapper>
    )
  }

  if (loading) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading admin panel...</p>
          </div>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center"
          >
            Admin Panel
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary flex items-center space-x-2"
            >
              <FaPlus />
              <span>Add New Project</span>
            </button>
          </motion.div>

          {/* Add/Edit Project Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="card mb-8 max-w-2xl mx-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={resetForm}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    GitHub Repository
                  </label>
                  <input
                    type="url"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="https://github.com/username/repo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Live Demo URL
                  </label>
                  <input
                    type="url"
                    name="liveLink"
                    value={formData.liveLink}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="https://project.netlify.app"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Describe the project..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={submitLoading}
                    className="btn-primary flex-1 flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <FaSave />
                    <span>{submitLoading ? 'Saving...' : (editingProject ? 'Update' : 'Create')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Projects List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Manage Projects ({projects.length})
            </h2>

            {projects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    index={index}
                    showActions={true}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No projects found. Add your first project!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Admin 