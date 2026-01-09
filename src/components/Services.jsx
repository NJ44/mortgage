import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

const ServicesTimeline = () => {
  const data = [
    {
      title: "Residential Loans",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop"
              alt="Family Home"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4 text-gray-700">
            <p>
              Buying a home is a big step, but we make it easy. We offer a full suite of residential mortgage products including Conventional, FHA, VA, and USDA loans. Our team will help you find the program with the lowest rate and down payment that fits your budget.
            </p>
            <p>
              Whether you are a first-time homebuyer or purchasing a vacation home, we guide you through pre-approval, underwriting, and closing with transparency and speed.
            </p>
          </div>
          <Link
            to="/residential-loans"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            View Loan Programs →
          </Link>
        </div>
      ),
    },
    {
      title: "Refinancing",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop"
              alt="Refinancing"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4 text-gray-700">
            <p>
              Unlock the potential of your home equity or lower your monthly payments. Our refinancing options allow you to cash out for home improvements, consolidate high-interest debt, or simply secure a better interest rate.
            </p>
            <p>
              We provide a clear cost-benefit analysis so you can see exactly how much you can save. The process is streamlined to get you to closing faster.
            </p>
          </div>
          <Link
            to="/refinancing"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Check Refi Rates →
          </Link>
        </div>
      ),
    },
    {
      title: "Niche & Specialty",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
              alt="Luxury Home"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4 text-gray-700">
            <p>
              Not every borrower fits the standard mold. We specialize in Jumbo loans for luxury properties, Investment Property loans for real estate investors, and Bank Statement loans for self-employed individuals.
            </p>
            <p>
              If you have complex income or unique property requirements, our experienced loan officers have the expertise to structure a loan that works for you.
            </p>
          </div>
          <Link
            to="/niche-loans"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Explore Specialty Loans →
          </Link>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="services"
      className="min-h-screen w-full bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </motion.section>
  );
};

export default ServicesTimeline;
