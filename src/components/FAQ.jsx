import React, { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Do you accept my insurance?',
    answer: 'We accept most major insurance plans and are in-network with many providers. Please call us with your insurance information, and we can verify your coverage and benefits before your appointment.',
  },
  {
    id: 2,
    question: 'What are your hours?',
    answer: 'Our office is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays. Emergency appointments may be available outside these hours.',
  },
  {
    id: 3,
    question: 'How do I book emergency care?',
    answer: 'For dental emergencies, please call our office immediately. We reserve same-day emergency slots for urgent situations. If it\'s after hours, leave a message and we\'ll get back to you as soon as possible.',
  },
  {
    id: 4,
    question: 'Do you accept new patients?',
    answer: 'Yes! We welcome new patients and are currently accepting appointments. You can request an appointment online or call us directly to schedule your first visit.',
  },
  {
    id: 5,
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring a valid ID, your insurance card (if applicable), a list of current medications, and any previous dental records or X-rays if you have them. Arrive 15 minutes early to complete new patient paperwork.',
  },
  {
    id: 6,
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans for treatments that aren\'t covered by insurance. We also accept cash, credit cards, and CareCredit financing. Please discuss payment options with our office staff.',
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
  const [openId, setOpenId] = useState(1) // First FAQ open by default

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

