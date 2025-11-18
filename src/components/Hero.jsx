import React, { useState } from 'react'
import LeadForm from './LeadForm'
import { config } from '../config'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay - lighter for black text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-black space-y-4 animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black">
              Gentle dental care in {config.CITY}
            </h1>
            <p className="text-base md:text-lg text-black">
              Same-week appointments. Modern tech. Friendly team.
            </p>

            {/* Benefit Bullets */}
            <ul className="space-y-2 text-sm text-black">
              <li className="flex items-center text-black">
                <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Accepts new patients
              </li>
              <li className="flex items-center text-black">
                <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Emergency slots
              </li>
              <li className="flex items-center text-black">
                <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Insurance & plans
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-colors text-center"
              >
                Request appointment
              </a>
              <a
                href="#services"
                className="bg-white text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-colors text-center"
              >
                Our Services
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-black pt-1">
              Voted top dentist in {config.CITY} — check our reviews.
            </p>
          </div>

          {/* Right Column - Lead Form */}
          <div className="animate-fade-in-delay">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

