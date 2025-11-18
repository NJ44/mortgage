import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const GumDiseaseTreatment = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop"
            alt="Gum Disease Treatment"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Gum Disease Treatment
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Gum disease, also known as periodontal disease, is a common condition that affects the tissues supporting your teeth. Left untreated, it can lead to tooth loss and has been linked to other serious health conditions including heart disease and diabetes.
          </p>

          <p className="mb-4">
            Our comprehensive gum disease treatment begins with a thorough evaluation to assess the extent of the disease. For early-stage gum disease, we provide deep cleanings called scaling and root planing, which remove plaque and tartar from below the gumline and smooth the root surfaces to promote healing.
          </p>

          <p className="mb-4">
            We may also use antimicrobial treatments to eliminate bacteria and promote gum health. For more advanced cases, we offer advanced periodontal therapies including laser treatment, which can remove diseased tissue while promoting regeneration of healthy gum tissue.
          </p>

          <p className="mb-6">
            We work closely with patients to develop effective home care routines and provide ongoing maintenance to prevent disease recurrence. Regular periodontal maintenance visits are essential for managing gum disease and preventing its progression. Our goal is to restore and maintain healthy gums that support your teeth for a lifetime, ensuring your long-term oral health and overall well-being.
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

export default GumDiseaseTreatment

