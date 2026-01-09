import React from 'react'
import { motion } from 'framer-motion'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'

const Refinancing = () => {
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
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop"
                        alt="Refinancing Calculations"
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
                    Mortgage Refinancing
                </motion.h1>

                <motion.div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="mb-4">
                        Refinancing your home loan could save you thousands of dollars over the life of your loan. At {config.BUSINESS_NAME}, we help you evaluate your current mortgage and financial goals to determine if refinancing is the right move for you.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Refinance?</h3>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <span className="font-bold text-primary mr-2">1. Lower Your Monthly Payment:</span>
                            Rate and term refinancing can help you secure a lower interest rate, reducing your monthly obligation.
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-primary mr-2">2. Cash Out Equity:</span>
                            Tap into your home's equity to pay for home improvements, consolidate high-interest debt, or fund major expenses.
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-primary mr-2">3. Shorten Your Loan Term:</span>
                            Switch from a 30-year to a 15-year mortgage to pay off your home faster and save on interest.
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-primary mr-2">4. Switch Loan Types:</span>
                            Move from an Adjustable Rate Mortgage (ARM) to a Fixed Rate Mortgage for stability.
                        </li>
                    </ul>

                    <p className="mb-6">
                        Our refinancing experts will provide you with a clear cost-benefit analysis so you can make an informed decision. We make the process fast and hassle-free.
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
                        Check Refinance Rates
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Refinancing
