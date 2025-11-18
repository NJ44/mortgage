import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const PeriodontalTreatment = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop"
            alt="Periodontal Treatment"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Periodontal Treatment
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Periodontal treatment addresses gum disease, a common condition that affects the tissues supporting your teeth. Left untreated, gum disease can lead to tooth loss and has been linked to other serious health conditions including heart disease, diabetes, and respiratory problems.
          </p>

          <p className="mb-4">
            Our periodontal specialists provide comprehensive gum disease treatment, from non-surgical deep cleanings to advanced surgical procedures when necessary. The treatment approach depends on the severity of your condition, and we begin with a thorough evaluation to assess the extent of the disease.
          </p>

          <p className="mb-4">
            For early-stage gum disease, we provide scaling and root planing, which involves deep cleaning below the gumline to remove plaque and tartar, and smoothing the root surfaces to promote healing. We may also use antimicrobial treatments to eliminate bacteria and promote gum health.
          </p>

          <p className="mb-6">
            For more advanced cases, we offer advanced periodontal therapies including laser treatment, which can remove diseased tissue while promoting regeneration of healthy gum tissue. Surgical procedures may be necessary for severe cases to restore gum health and prevent further damage. We work closely with patients to develop effective home care routines and provide ongoing maintenance to prevent disease recurrence. Regular periodontal maintenance visits are essential for managing gum disease and preventing its progression.
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
            Schedule a Consultation
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

export default PeriodontalTreatment

