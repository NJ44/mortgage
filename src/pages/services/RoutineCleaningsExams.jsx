import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const RoutineCleaningsExams = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="Entity Formation"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Entity Formation
        </motion.h1>

        <motion.div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4">
            Choosing the right business structure is one of the most important decisions you'll make as a business owner. The entity type you choose will affect your personal liability, tax obligations, operational flexibility, and ability to raise capital. Our attorneys guide clients through the process of forming corporations, limited liability companies (LLCs), partnerships, and other business entities, ensuring proper documentation and compliance with state and federal regulations.
          </p>

          <p className="mb-4">
            We help you understand the advantages and disadvantages of each structure, including liability protection, tax implications, and operational flexibility. Our comprehensive entity formation services include preparation of all necessary documents, filing with appropriate state agencies, obtaining required licenses and permits, and establishing proper corporate governance structures.
          </p>

          <p className="mb-4">
            We work closely with you to select the entity type that best fits your business goals, whether you're a sole proprietor looking to limit personal liability or a growing company planning for future expansion. Proper entity formation from the start can save you significant time and money down the road and protect your personal assets from business liabilities.
          </p>

          <p className="mb-6">
            Contact us today to schedule a consultation and learn how we can help you form the right business entity for your needs. We'll guide you through every step of the process and ensure your business is properly structured from the beginning.
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToElement('#contact', { offset: -100 })
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Schedule a Consultation
          </a>
          <Link
            to="/general-dentistry"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Business Law
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default RoutineCleaningsExams
