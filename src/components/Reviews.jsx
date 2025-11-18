import React, { useState, useEffect } from 'react'
import { config, sampleReviews } from '../config'

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reviews = config.GOOGLE_REVIEWS_DATA || sampleReviews

  // Auto-advance (disabled by default, can be enabled)
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000) // 5 seconds
    return () => clearInterval(interval)
  }, [isPaused, reviews.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600">
            Real reviews from real patients
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
            role="region"
            aria-label="Customer reviews carousel"
            aria-live="polite"
          >
            {/* Review Content */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4" aria-label={`${reviews[currentIndex].rating} out of 5 stars`}>
                {renderStars(reviews[currentIndex].rating)}
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                "{reviews[currentIndex].text}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">{reviews[currentIndex].author}</p>
                <p className="text-sm text-gray-500">{formatDate(reviews[currentIndex].date)}</p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous review"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2" role="tablist" aria-label="Review navigation">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                    aria-selected={index === currentIndex}
                    role="tab"
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Next review"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            {config.GOOGLE_BUSINESS_PROFILE_URL && !config.GOOGLE_BUSINESS_PROFILE_URL.startsWith('{{') ? (
              <a
                href={config.GOOGLE_BUSINESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-semibold"
              >
                Read more reviews
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(config.BUSINESS_NAME + ' ' + config.CITY)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-semibold"
              >
                Read more reviews
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews

