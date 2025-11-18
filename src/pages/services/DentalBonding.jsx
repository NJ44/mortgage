import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const DentalBonding = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop"
            alt="Dental Bonding"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Dental Bonding
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Dental bonding is a versatile and affordable cosmetic procedure that can quickly address minor imperfections in your smile. Using tooth-colored composite resin, we can repair chips, close small gaps, reshape teeth, cover stains, and improve the overall appearance of your teeth.
          </p>

          <p className="mb-4">
            The bonding material is carefully selected to match your natural tooth color and translucency, then sculpted and polished to blend seamlessly with your existing teeth. The procedure is typically completed in a single visit and requires minimal preparation of the tooth surface.
          </p>

          <p className="mb-4">
            We begin by selecting the perfect shade of composite resin to match your natural teeth, then apply a conditioning liquid to help the bonding material adhere. The resin is applied, shaped, and hardened with a special light, then polished to a natural-looking finish.
          </p>

          <p className="mb-6">
            Dental bonding is an excellent solution for minor cosmetic concerns and can be easily maintained or replaced as needed. While bonding may not be as durable as veneers, it provides an effective and affordable way to improve your smile's appearance without the need for extensive tooth preparation. The procedure is comfortable, quick, and can make a significant difference in your smile's appearance.
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

export default DentalBonding

