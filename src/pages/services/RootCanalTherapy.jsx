import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const RootCanalTherapy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop"
            alt="Root Canal Therapy"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Root Canal Therapy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Root canal therapy is a highly effective procedure that saves infected or severely damaged teeth from extraction. Despite its reputation, modern root canal treatment is comfortable and straightforward, thanks to advanced techniques and effective anesthesia.
          </p>

          <p className="mb-4">
            The procedure involves removing the infected or damaged pulp from inside the tooth, thoroughly cleaning and disinfecting the root canals, and then sealing them to prevent reinfection. We use rotary instruments and advanced irrigation techniques to ensure complete removal of bacteria and debris from the root canal system.
          </p>

          <p className="mb-4">
            After the root canal is cleaned and sealed, the tooth is typically restored with a crown to protect it and restore its full function. Saving your natural tooth through root canal therapy is always preferable to extraction, as it maintains your jawbone health, preserves your natural bite, and prevents the need for more extensive replacement procedures like bridges or implants.
          </p>

          <p className="mb-6">
            Our team takes time to explain the procedure, answer your questions, and ensure you're comfortable throughout the process. We use digital imaging to precisely locate and treat all root canals, ensuring the best possible outcome for your tooth.
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
            Book an Appointment
          </a>
          <Link
            to="/general-dentistry"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to General Dentistry
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RootCanalTherapy

