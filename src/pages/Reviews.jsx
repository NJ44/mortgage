import React from 'react'
import { motion } from 'framer-motion'
import { config, sampleReviews } from '../config'
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1'

const Reviews = () => {
  // Convert sample reviews to testimonials format
  const reviews = config.GOOGLE_REVIEWS_DATA || sampleReviews

  // Map reviews to testimonials format with images
  const testimonialImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=faces",
  ]

  const testimonials = reviews.map((review, index) => ({
    text: review.text,
    image: testimonialImages[index % testimonialImages.length],
    name: review.author,
    role: "Patient",
    rating: review.rating || 5,
    date: review.date ? new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : undefined,
  }))

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Patient Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience at {config.BUSINESS_NAME}
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[0, 1, 2].map((colIndex) => (
              <TestimonialsColumn
                key={colIndex}
                testimonials={testimonials.filter((_, index) => index % 3 === colIndex)}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Ready to Experience Our Care?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join our satisfied clients and get a quote today
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Reviews

