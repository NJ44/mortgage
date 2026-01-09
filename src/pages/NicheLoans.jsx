import React from 'react'
import { motion } from 'framer-motion'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'

const NicheLoans = () => {
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
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"
                        alt="Luxury Home"
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
                    Niche & Specialty Loans
                </motion.h1>

                <motion.div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="mb-4">
                        Sometimes a standard mortgage doesn't fit the mold. At {config.BUSINESS_NAME}, we specialize in complex lending scenarios and offer a variety of niche products to help borrowers who might not qualify for traditional financing.
                    </p>

                    <div className="space-y-8 my-8">
                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Jumbo Loans</h3>
                            <p>
                                For high-value properties that exceed conforming loan limits. We offer competitive rates on Jumbo mortgages with flexible down payment options for luxury home buyers.
                            </p>
                        </div>

                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Property Loans</h3>
                            <p>
                                Whether you're buying a rental home or a multi-unit property, we have DSCR (Debt Service Coverage Ratio) loans and other investor-friendly products that focus on the property's income potential rather than just your personal income.
                            </p>
                        </div>

                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bank Statement Loans</h3>
                            <p>
                                Self-employed? We can verify your income using personal or business bank statements instead of tax returns, making it easier for business owners and freelancers to qualify.
                            </p>
                        </div>
                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bridge Loans</h3>
                            <p>
                                Need to buy a new home before selling your current one? Bridge financing provides the improved cash flow you need to make a competitive offer without a contingency.
                            </p>
                        </div>
                    </div>

                    <p className="mb-6">
                        Don't let a unique financial situation stop you from buying. Contact us to discuss your scenario with a specialist.
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
                        Discuss My Scenario
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NicheLoans
