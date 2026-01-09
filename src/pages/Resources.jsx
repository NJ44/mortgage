import React from 'react'
import { motion } from 'framer-motion'

const Resources = () => {
    const posts = [
        {
            title: "How much down payment do I really need?",
            excerpt: "The 20% myth is just that—a myth. Learn about low down payment options like FHA (3.5%) and Conventional (3%).",
            date: "March 10, 2024",
            category: "Buying Tips"
        },
        {
            title: "Understanding Closing Costs",
            excerpt: "What are they, how much should you budget, and can you get the seller to pay them?",
            date: "Feb 28, 2024",
            category: "Finance"
        },
        {
            title: "Rent vs. Buy: Doing the Math",
            excerpt: "With rising rents, buying might be more affordable than you think. We break down the numbers.",
            date: "Feb 15, 2024",
            category: "Market Analysis"
        }
    ]

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Mortgage Resources
                </motion.h1>

                <motion.p
                    className="text-xl text-center text-gray-600 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Helpful articles and guides to navigate your home financing journey.
                </motion.p>

                <div className="grid gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-sm font-semibold text-primary mb-2">{post.category} • {post.date}</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
                            <button className="text-primary font-semibold hover:underline">Read Article</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resources
