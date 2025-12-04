import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

const ServicesTimeline = () => {
  const data = [
    {
      title: "General Dentistry",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop"
              alt="General Dentistry"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              Our comprehensive general dentistry services provide you and your family with the highest quality dental care in a comfortable, welcoming environment. Whether you're visiting us for a routine checkup or addressing a specific dental concern, our experienced team is committed to delivering personalized care that meets your unique needs.
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              During your routine examinations, our skilled dentists thoroughly assess your teeth, gums, and overall oral health using advanced diagnostic tools. Our dental hygienists use state-of-the-art equipment and techniques to remove plaque, tartar, and surface stains that regular brushing and flossing cannot eliminate.
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
      title: "Cosmetic & Whitening",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop"
              alt="Cosmetic & Whitening"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              Our cosmetic dentistry services help you achieve the smile of your dreams through advanced techniques and personalized treatment plans. Whether you're looking to brighten your teeth, correct imperfections, or completely transform your smile, our experienced cosmetic dentists have the expertise to deliver stunning, natural-looking results.
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              Professional teeth whitening treatments use professional-grade bleaching agents that are far more effective than over-the-counter products, delivering dramatic results in just one visit. We also offer dental veneers—thin, custom-made shells that cover imperfections such as chips, cracks, gaps, discoloration, or misalignment.
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
      title: "Specialized Care",
      content: (
        <div>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop"
              alt="Specialized Care"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-sm md:text-base font-normal mb-6 leading-relaxed space-y-4" style={{ color: '#000000', opacity: 1 }}>
            <p style={{ color: '#000000', opacity: 1 }}>
              Our specialized care services encompass advanced dental procedures designed to address complex oral health issues. From dental implants that replace missing teeth to emergency care that provides immediate relief, our team of skilled specialists is equipped with the latest technology to deliver exceptional results.
            </p>
            <p style={{ color: '#000000', opacity: 1 }}>
              Dental implants offer a permanent solution for missing teeth that closely mimics the look, feel, and function of natural teeth. We also provide root canal therapy to save infected or damaged teeth, and emergency dental care for patients experiencing sudden pain or trauma.
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
