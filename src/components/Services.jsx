import React, { useState } from 'react'
import { config } from '../config'

const services = [
  {
    id: 1,
    title: 'General Dentistry',
    icon: '🦷',
    description: 'Comprehensive dental care for the whole family',
    details: [
      'Regular cleanings and check-ups',
      'Fillings and restorations',
      'Root canal therapy',
      'Gum disease treatment',
    ],
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    icon: '✨',
    description: 'Brighten your smile with professional whitening',
    details: [
      'In-office whitening treatments',
      'Take-home whitening kits',
      'Safe and effective results',
      'Customized treatment plans',
    ],
  },
  {
    id: 3,
    title: 'Cosmetic Dentistry',
    icon: '😊',
    description: 'Transform your smile with cosmetic procedures',
    details: [
      'Veneers and bonding',
      'Smile makeovers',
      'Teeth reshaping',
      'Gum contouring',
    ],
  },
  {
    id: 4,
    title: 'Dental Implants',
    icon: '🦴',
    description: 'Permanent solution for missing teeth',
    details: [
      'Single and multiple implants',
      'Implant-supported dentures',
      'Bone grafting if needed',
      'Lifetime solution',
    ],
  },
  {
    id: 5,
    title: 'Emergency Care',
    icon: '🚨',
    description: 'Same-day emergency dental appointments',
    details: [
      'Tooth pain relief',
      'Broken or knocked-out teeth',
      'Dental trauma treatment',
      '24/7 emergency line',
    ],
  },
  {
    id: 6,
    title: 'Orthodontics',
    icon: '🦷',
    description: 'Straighten teeth with modern orthodontic options',
    details: [
      'Traditional braces',
      'Clear aligners',
      'Retainers',
      'Orthodontic consultations',
    ],
  },
]

const ServiceCard = ({ service, onOpen }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onOpen(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(service)
        }
      }}
      aria-label={`Learn more about ${service.title}`}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  )
}

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 id="service-modal-title" className="text-3xl font-bold text-gray-800">
                {service.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <p className="text-lg text-gray-600 mb-6">{service.description}</p>

          <ul className="space-y-3 mb-8">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onOpen={setSelectedService} />
          ))}
        </div>
      </div>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  )
}

export default Services

