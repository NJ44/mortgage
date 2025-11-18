import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const EmergencyCare = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=600&fit=crop"
            alt="Emergency Care"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Emergency Care
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Dental emergencies can happen at any time, and we're committed to providing prompt, effective care when you need it most. Whether you're experiencing severe toothache, have knocked out or broken a tooth, lost a filling or crown, or have an abscess, our emergency dental services are designed to provide immediate relief and prevent further complications.
          </p>

          <p className="mb-4">
            We understand that dental emergencies can be painful and stressful, which is why we maintain flexible scheduling to accommodate urgent cases. Our team is trained to handle a wide range of dental emergencies with compassion and efficiency, ensuring you receive the care you need when every minute counts.
          </p>

          <p className="mb-4">
            Common dental emergencies we treat include severe toothaches, dental trauma, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, abscesses, and other urgent conditions. When you call with a dental emergency, we'll assess your situation and provide guidance on immediate steps you can take before arriving at our office.
          </p>

          <p className="mb-6">
            We work quickly to diagnose and treat the problem, providing immediate relief and preventing further complications. Our goal is to get you out of pain as quickly as possible while preserving your oral health and preventing the need for more extensive treatment later.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Schedule Emergency Care
          </a>
          <Link
            to="/specialized-care"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Specialized Care
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmergencyCare

