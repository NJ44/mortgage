import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const TeethWhitening = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop"
            alt="Teeth Whitening"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Teeth Whitening
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Professional teeth whitening is one of the most popular and effective ways to dramatically brighten your smile. Over time, our teeth naturally become discolored due to aging, consumption of staining foods and beverages like coffee, tea, and wine, smoking, and other factors.
          </p>

          <p className="mb-4">
            Our in-office whitening treatments use professional-grade bleaching agents that are far more effective than over-the-counter products, delivering dramatic results in just one visit. The procedure is safe, comfortable, and supervised by our experienced dental team to ensure optimal results.
          </p>

          <p className="mb-4">
            For patients who prefer the convenience of at-home treatment, we also offer custom-fitted whitening trays with professional-grade gel that you can use in the comfort of your own home, allowing you to whiten your teeth at your own pace. We take impressions of your teeth to create trays that fit perfectly, ensuring even whitening and preventing gel from irritating your gums.
          </p>

          <p className="mb-6">
            Both in-office and at-home whitening options can lighten your teeth by several shades, giving you a noticeably brighter, more youthful smile. We'll discuss your goals and lifestyle to recommend the best whitening option for you, and provide guidance on maintaining your results long-term.
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

export default TeethWhitening

