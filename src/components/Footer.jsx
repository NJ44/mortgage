import React, { useState } from 'react'
import { config } from '../config'

const Footer = () => {
  const [contactForm, setContactForm] = useState({ email: '', message: '' })
  const [contactStatus, setContactStatus] = useState(null)

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Simple form handling - in production, send to backend
    setContactStatus('success')
    setContactForm({ email: '', message: '' })
    setTimeout(() => setContactStatus(null), 3000)
  }

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>{config.ADDRESS_LINE}</p>
              <p>{config.CITY}</p>
              <p>
                <a
                  href={`tel:${config.PHONE}`}
                  className="hover:text-accent transition-colors"
                >
                  {config.PHONE}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${config.EMAIL}`}
                  className="hover:text-accent transition-colors"
                >
                  {config.EMAIL}
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-accent transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Send a Message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <textarea
                placeholder="Your message"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Send
              </button>
              {contactStatus === 'success' && (
                <p className="text-sm text-green-400">Message sent!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {config.BUSINESS_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DentalClinic',
            name: config.BUSINESS_NAME,
            description: config.TAGLINE,
            address: {
              '@type': 'PostalAddress',
              streetAddress: config.ADDRESS_LINE,
              addressLocality: config.CITY,
            },
            telephone: config.PHONE,
            email: config.EMAIL,
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
            priceRange: '$$',
            areaServed: {
              '@type': 'City',
              name: config.CITY,
            },
          }),
        }}
      />
    </footer>
  )
}

export default Footer

