import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const RoutineCleaningsExams = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop"
            alt="Routine Cleanings & Exams"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Routine Cleanings & Exams
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Regular dental cleanings and examinations are the foundation of excellent oral health. Our comprehensive checkups include a thorough examination of your teeth, gums, and oral tissues, along with professional cleaning to remove plaque and tartar buildup. We use advanced diagnostic tools including digital X-rays and intraoral cameras to detect potential issues early, before they become more serious problems.
          </p>

          <p className="mb-4">
            During your visit, we'll assess your overall oral health, screen for oral cancer, check for signs of gum disease, and evaluate your bite and jaw function. Our dental hygienists perform deep cleanings using ultrasonic scalers and specialized tools to remove hardened plaque and surface stains that regular brushing cannot eliminate.
          </p>

          <p className="mb-4">
            We also provide personalized oral hygiene education, demonstrating proper brushing and flossing techniques tailored to your specific needs. Regular preventive care visits every six months help maintain healthy teeth and gums, prevent cavities, and catch problems early when treatment is simpler and more affordable.
          </p>

          <p className="mb-6">
            We create a comfortable, stress-free environment for your routine visits, ensuring you feel relaxed and well-informed throughout your appointment. Schedule your appointment today and take the first step toward achieving and maintaining optimal oral health.
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

export default RoutineCleaningsExams

