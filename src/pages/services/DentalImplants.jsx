import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const DentalImplants = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt="DUI/DWI Defense"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          DUI/DWI Defense
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            DUI and DWI charges can have serious consequences, including license suspension, fines, jail time, and a permanent criminal record. If you've been charged with driving under the influence or driving while intoxicated, it's essential to have experienced criminal defense representation to protect your rights and minimize the impact of these charges on your life.
          </p>

          <p className="mb-4">
            Our criminal defense attorneys have extensive experience defending clients against DUI/DWI charges and understand the complex laws and procedures involved in these cases. We challenge the prosecution's case by examining the validity of traffic stops, the accuracy of field sobriety tests, the reliability of breathalyzer and blood test results, and the procedures used by law enforcement.
          </p>

          <p className="mb-4">
            We work with expert witnesses including toxicologists and accident reconstruction specialists to build strong defenses. Our goal is to minimize the impact of DUI/DWI charges on your life, whether through dismissal of charges, reduction of charges, or negotiation of favorable plea agreements.
          </p>

          <p className="mb-6">
            We also help clients navigate the administrative process of license suspension and work to protect their driving privileges whenever possible. If you've been charged with DUI or DWI, don't wait—contact us immediately for a free consultation. The sooner we can begin working on your defense, the better positioned we'll be to protect your rights and achieve a favorable outcome.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToElement('#contact', { offset: -100 })
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Free Consultation
          </a>
          <Link
            to="/specialized-care"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Criminal Defense
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DentalImplants
