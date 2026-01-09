import React from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

const AboutUs = () => {
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
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop"
                        alt="Our Team"
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
                    About {config.BUSINESS_NAME}
                </motion.h1>

                <motion.div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="mb-4">
                        Founded with a mission to make homeownership accessible and transparent, {config.BUSINESS_NAME} has grown into one of the region's most trusted mortgage brokerages. We believe that getting a mortgage shouldn't be a stressful ordeal filled with confusing jargon and hidden fees.
                    </p>

                    <p className="mb-4">
                        Our team of experienced loan officers works for you, not the banks. We have access to dozens of lenders, which allows us to shop around and find the competitive rates and terms that fit your specific needs.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Core Values</h3>
                    <ul className="grid md:grid-cols-2 gap-4 mb-8 list-none pl-0">
                        <li className="bg-gray-50 p-4 rounded-lg">
                            <span className="font-bold text-primary block mb-1">Integrity</span>
                            We always put your financial interest first.
                        </li>
                        <li className="bg-gray-50 p-4 rounded-lg">
                            <span className="font-bold text-primary block mb-1">Transparency</span>
                            No hidden fees. We explain every cost upfront.
                        </li>
                        <li className="bg-gray-50 p-4 rounded-lg">
                            <span className="font-bold text-primary block mb-1">Speed</span>
                            We close loans faster than the industry average.
                        </li>
                        <li className="bg-gray-50 p-4 rounded-lg">
                            <span className="font-bold text-primary block mb-1">Service</span>
                            We are available when you need us, including weekends.
                        </li>
                    </ul>

                    <p>
                        Whether you are buying your first home, your forever home, or an investment property, we are honored to be part of your journey.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs
