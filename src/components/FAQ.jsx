import React, { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    id: 1,
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer free initial consultations for all new clients. During this consultation, we will discuss your case, answer your questions, and explain how we can help. Please call us to schedule your free consultation.',
  },
  {
    id: 2,
    question: 'What are your office hours?',
    answer: 'Our office is open Monday through Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 2:00 PM. We are closed on Sundays. Emergency consultations may be available outside these hours for urgent legal matters.',
  },
  {
    id: 3,
    question: 'How quickly can you help with an urgent legal matter?',
    answer: 'For urgent legal matters, please call our office immediately. We understand that legal issues often require immediate attention, and we make every effort to respond to urgent matters as quickly as possible. We offer same-day consultations for emergencies when possible.',
  },
  {
    id: 4,
    question: 'Do you handle cases outside of your local area?',
    answer: 'Yes, we handle cases throughout the state and can work with clients regardless of their location. We also have relationships with attorneys in other states for matters that require out-of-state representation. Please contact us to discuss your specific situation.',
  },
  {
    id: 5,
    question: 'What should I bring to my first consultation?',
    answer: 'Please bring any relevant documents related to your case, such as contracts, correspondence, court documents, police reports, or medical records. Also bring a valid ID and any information about the other parties involved. If you\'re unsure what to bring, our staff can guide you when you schedule your appointment.',
  },
  {
    id: 6,
    question: 'How do you charge for legal services?',
    answer: 'Our fee structure varies depending on the type of case. We offer hourly billing, flat fees, and contingency fee arrangements (where applicable, such as personal injury cases). During your free consultation, we will discuss our fee structure and payment options in detail.',
  },
]

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openId, setOpenId] = useState(null) // All FAQs closed by default

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <motion.section 
      id="faq" 
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Get answers to common questions about our legal services</p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FAQ

