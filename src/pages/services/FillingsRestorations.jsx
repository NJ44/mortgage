import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const FillingsRestorations = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop"
            alt="Fillings & Restorations"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Fillings & Restorations
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            When cavities or damage occur, our expert team provides high-quality dental fillings and restorations that restore both function and aesthetics. We use modern tooth-colored composite materials that blend seamlessly with your natural teeth, eliminating the need for unsightly metal fillings.
          </p>

          <p className="mb-4">
            Our restoration process begins with careful removal of decayed or damaged tooth structure, followed by precise placement of the filling material that matches your tooth's natural color and translucency. We also offer ceramic inlays and onlays for larger restorations that provide superior durability and aesthetics.
          </p>

          <p className="mb-4">
            These custom-made restorations are fabricated in a dental laboratory and bonded to your tooth, offering a long-lasting solution that preserves more of your natural tooth structure. For severely damaged teeth, we provide dental crowns that completely cover and protect the tooth while restoring its natural appearance.
          </p>

          <p className="mb-6">
            All our restorative procedures are performed with attention to detail, ensuring proper bite alignment and comfortable function. We use local anesthesia to ensure your complete comfort throughout the procedure, and our modern techniques minimize discomfort and recovery time.
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

export default FillingsRestorations

