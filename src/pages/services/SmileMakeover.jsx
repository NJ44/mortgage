import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const SmileMakeover = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop"
            alt="Smile Makeover"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Smile Makeover
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            A complete smile makeover is a comprehensive cosmetic treatment plan that addresses multiple aspects of your smile to create a harmonious, balanced, and beautiful result. This personalized approach combines various cosmetic procedures including whitening, veneers, bonding, gum contouring, and sometimes orthodontic treatment to achieve your dream smile.
          </p>

          <p className="mb-4">
            The process begins with an in-depth consultation where we discuss your goals, examine your current smile, and use digital imaging to show you potential results. We consider factors such as your facial features, skin tone, lip shape, and personal preferences to design a smile that enhances your natural beauty.
          </p>

          <p className="mb-4">
            Our cosmetic dentists work closely with you throughout the process, explaining each step and ensuring you're comfortable with the treatment plan. A smile makeover may involve multiple visits over several months, but the transformation can be truly remarkable.
          </p>

          <p className="mb-6">
            We use advanced technology including digital smile design to plan your makeover and ensure optimal results. Whether you're preparing for a special event or simply want to improve your everyday confidence, a smile makeover can give you the beautiful, natural-looking smile you've always wanted. The investment in a smile makeover can significantly boost your self-esteem and improve your quality of life.
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
            Book a Consultation
          </a>
          <Link
            to="/cosmetic-whitening"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Cosmetic & Whitening
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SmileMakeover

