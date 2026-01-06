import React from 'react'
import { Link } from 'react-router-dom'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'

const TeethWhitening = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
            alt="Motor Vehicle Accidents"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Motor Vehicle Accidents
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Motor vehicle accidents are among the most common causes of personal injury, and they can result in serious injuries, significant medical expenses, and long-term disability. Whether you've been injured in a car accident, truck accident, motorcycle accident, or other motor vehicle collision, our experienced personal injury attorneys are here to help you recover the compensation you deserve.
          </p>

          <p className="mb-4">
            Our attorneys have extensive experience representing clients injured in motor vehicle accidents and understand the complexities of these cases, including insurance coverage issues, comparative negligence laws, and the importance of thorough accident reconstruction. We work with expert witnesses including accident reconstruction specialists, medical professionals, and economists to build strong cases that demonstrate the full extent of your injuries and damages.
          </p>

          <p className="mb-4">
            We handle all aspects of your case, from investigating the accident and gathering evidence to negotiating with insurance companies and, when necessary, taking your case to trial. Our goal is to recover maximum compensation for your medical expenses, lost wages, pain and suffering, property damage, and other losses resulting from your accident.
          </p>

          <p className="mb-6">
            If you've been injured in a motor vehicle accident, it's important to act quickly. Evidence can disappear, witnesses' memories can fade, and important deadlines can be missed if action isn't taken promptly. Contact us today for a free consultation to discuss your case and learn how we can help you recover the compensation you deserve.
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
            to="/cosmetic-whitening"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← Back to Personal Injury
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeethWhitening
