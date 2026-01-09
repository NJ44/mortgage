import React from 'react'
import LeadForm from './LeadForm'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80)', // Happy family outside home
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-black space-y-4 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {t.hero.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
              {t.hero.subtitle}
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#contact', { offset: -100 });
                }}
              >
                {t.hero.requestAppointment}
              </a>
              <a
                href="#services"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border-2 border-primary text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#services', { offset: -100 });
                }}
              >
                {t.hero.ourServices}
              </a>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="animate-fade-in-delay">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Get Today's Rates</h3>
                <p className="text-sm text-gray-500">No obligation quote in minutes.</p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
