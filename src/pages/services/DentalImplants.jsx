import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const DentalImplants = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop"
            alt="Dental Implants"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dental Implants
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Dental implants represent one of the most significant advances in modern dentistry, offering a permanent solution for missing teeth that closely mimics the look, feel, and function of natural teeth. Unlike traditional bridges or dentures, implants are surgically placed into the jawbone, where they fuse with the bone tissue through a process called osseointegration.
          </p>

          <p className="mb-4">
            This creates a stable foundation for replacement teeth that can last a lifetime with proper care. The implant process typically involves multiple stages, beginning with a comprehensive evaluation to assess your bone density and oral health. If needed, bone grafting may be performed to ensure adequate support for the implant.
          </p>

          <p className="mb-4">
            Once the implant is placed, a healing period allows the bone to integrate with the implant. After healing, an abutment is attached to the implant, and a custom crown, bridge, or denture is fabricated to complete the restoration.
          </p>

          <p className="mb-6">
            Our implant specialists have extensive training and experience in implant placement, working closely with each patient to develop personalized treatment plans. We use only the highest quality implant systems and work with skilled dental laboratories to create restorations that perfectly match your natural teeth. Dental implants not only restore your smile but also preserve jawbone health and prevent the shifting of adjacent teeth.
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

export default DentalImplants

