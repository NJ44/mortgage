import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../../config'

const Orthodontics = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop"
            alt="Orthodontics"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Orthodontics
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            Orthodontic treatment has evolved significantly in recent years, and we offer both traditional braces and modern clear aligner systems to straighten teeth and correct bite issues. Whether you're a teenager or an adult seeking orthodontic treatment, our orthodontic specialists will evaluate your specific needs and recommend the most appropriate treatment option.
          </p>

          <p className="mb-4">
            Traditional metal braces remain highly effective for complex cases, providing precise control over tooth movement and the ability to address severe misalignments. Modern braces are smaller and more comfortable than ever before, and we offer ceramic braces that blend with your teeth for a more discreet appearance.
          </p>

          <p className="mb-4">
            Clear aligner systems offer a nearly invisible alternative for many patients, allowing you to straighten your teeth without the appearance of traditional braces. These custom-made, removable aligners gradually move your teeth into the desired position, and you can remove them for eating, brushing, and special occasions.
          </p>

          <p className="mb-6">
            Orthodontic treatment not only improves the appearance of your smile but also enhances oral function, makes teeth easier to clean, and reduces your risk of cavities and gum disease. We provide retainers and follow-up care to ensure your results are maintained long-term, helping you enjoy your beautiful, straight smile for years to come.
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

export default Orthodontics

