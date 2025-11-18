import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const DentalVeneers = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop"
            alt="Dental Veneers"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dental Veneers
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Dental veneers represent the gold standard in cosmetic dentistry for transforming smiles. These thin, custom-made shells are bonded to the front surface of your teeth, effectively covering imperfections such as chips, cracks, gaps, discoloration, or misalignment.
          </p>

          <p className="mb-4">
            Made from high-quality porcelain or composite materials, veneers are designed to match the natural translucency and color of your teeth, creating a seamless, beautiful appearance that looks completely natural. The veneer process begins with a comprehensive consultation where we discuss your goals and examine your teeth to determine if veneers are the right solution for you.
          </p>

          <p className="mb-4">
            We then prepare your teeth by removing a small amount of enamel to make room for the veneers, take detailed impressions, and send them to a skilled dental laboratory where your custom veneers are crafted. During the fabrication period, temporary veneers protect your prepared teeth.
          </p>

          <p className="mb-6">
            Once your permanent veneers are ready, we carefully bond them to your teeth using a strong adhesive, ensuring perfect fit and alignment. The result is a dramatically improved smile that can last for many years with proper care. Veneers are stain-resistant and durable, making them an excellent long-term investment in your smile's appearance.
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

export default DentalVeneers

