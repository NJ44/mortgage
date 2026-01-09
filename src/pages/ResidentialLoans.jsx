import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { Check } from 'lucide-react'

const ResidentialLoans = () => {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
                        alt="Happy Family at New Home"
                        className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                    />
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Residential Home Loans
                </motion.h1>

                <motion.div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="mb-4">
                        At {config.BUSINESS_NAME}, we know that buying a home is likely the biggest investment you'll ever make. That's why we offer a wide range of residential mortgage options tailored to fit your unique financial situation and homeownership goals. Whether you're a first-time homebuyer, moving up to a larger home, or looking for a vacation property, we have the loan products and expertise to guide you home.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Loan Programs</h3>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-2 text-primary">Conventional Loans</h4>
                            <p>Ideal for borrowers with good credit and a stable income. Flexible down payment options available.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-2 text-primary">FHA Loans</h4>
                            <p>Perfect for first-time buyers or those with lower credit scores. Low down payment requirements.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-2 text-primary">VA Loans</h4>
                            <p>Exclusive for veterans and active military. $0 down payment and no private mortgage insurance (PMI).</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-2 text-primary">USDA Loans</h4>
                            <p>For rural homebuyers. 100% financing available for eligible properties in designated areas.</p>
                        </div>
                    </div>

                    <p className="mb-6">
                        We simplify the mortgage process by handling the paperwork and communicating with you every step of the way. From pre-approval to closing, our team is dedicated to getting you the keys to your new home as smoothly as possible.
                    </p>
                </motion.div>

                <div className="mt-8">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToElement('#contact', { offset: -100 })
                        }}
                        className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Get Pre-Approved Today
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ResidentialLoans
