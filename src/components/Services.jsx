import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

const ServicesTimeline = () => {
  const data = [
    {
      title: "Business Law",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
              alt="Business Law"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              Our comprehensive business law services provide your company with expert legal guidance in a professional, results-driven environment. Whether you're starting a new business, navigating complex contracts, or addressing corporate compliance issues, our experienced attorneys are committed to delivering strategic solutions that protect your interests and support your growth.
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              Our business law practice covers entity formation, contract negotiation and drafting, employment law, intellectual property protection, mergers and acquisitions, and regulatory compliance. We work closely with businesses of all sizes to develop proactive legal strategies that minimize risk and maximize opportunities for success.
            </p>
          </div>
          <Link
            to="/general-dentistry"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Learn More →
          </Link>
        </div>
      ),
    },
    {
      title: "Personal Injury",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop"
              alt="Personal Injury"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              Our personal injury practice helps accident victims recover the compensation they deserve through aggressive representation and proven litigation strategies. Whether you've been injured in a car accident, workplace incident, or due to medical malpractice, our experienced personal injury attorneys have the expertise to build strong cases and achieve maximum settlements.
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              We handle all types of personal injury cases including motor vehicle accidents, slip and fall incidents, product liability, wrongful death, and catastrophic injuries. Our team conducts thorough investigations, works with expert witnesses, and negotiates aggressively with insurance companies to ensure you receive full and fair compensation for your injuries, medical expenses, lost wages, and pain and suffering.
            </p>
          </div>
          <Link
            to="/cosmetic-whitening"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Learn More →
          </Link>
        </div>
      ),
    },
    {
      title: "Criminal Defense",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
              alt="Criminal Defense"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              Our criminal defense practice provides aggressive representation for individuals facing criminal charges at both state and federal levels. From misdemeanors to serious felonies, our experienced criminal defense attorneys are equipped with extensive trial experience and a proven track record of achieving favorable outcomes for our clients.
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              We handle all types of criminal cases including DUI/DWI, drug offenses, assault, theft, white-collar crimes, and violent crimes. Our defense strategy includes thorough case investigation, challenging evidence, negotiating with prosecutors, and when necessary, aggressive trial representation. We understand the serious consequences of criminal charges and fight tirelessly to protect your rights, freedom, and future.
            </p>
          </div>
          <Link
            to="/specialized-care"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm"
          >
            Learn More →
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
