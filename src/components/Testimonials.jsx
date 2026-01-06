import React, { useState } from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";
import { config } from "../config";
import ReviewModal from "./ReviewModal";
import CommentModal from "./CommentModal";

// Testimonials data with Unsplash images (Google Reviews style)
const testimonials = [
  {
    text: "Excellent legal representation! The team was professional, responsive, and helped me win my case. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    name: "Sarah Johnson",
    role: "Client",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    text: "Best law firm I've worked with. They explained everything clearly, kept me informed throughout the process, and achieved great results.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    name: "Michael Chen",
    role: "Client",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "Emergency consultation was available same day. Professional and caring. Thank you for the quick help during a difficult time!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    name: "Emily Rodriguez",
    role: "Client",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    text: "Great experience from start to finish. The attorneys are knowledgeable, the staff is welcoming, and they explained everything clearly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    name: "David Thompson",
    role: "Client",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "The personal injury case exceeded my expectations. They fought hard for me and secured a settlement I never thought possible!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    name: "Jessica Martinez",
    role: "Client",
    rating: 5,
    date: "2 months ago",
  },
  {
    text: "I was facing serious criminal charges, but the team made me feel at ease. They built a strong defense and got the charges reduced significantly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    name: "Amanda Wilson",
    role: "Client",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    text: "The business law services I received were exceptional. They helped me navigate complex contracts and protected my interests perfectly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    name: "Rachel Brown",
    role: "Client",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "Professional, friendly, and efficient. They got me in quickly for my urgent legal matter and resolved the issue perfectly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    name: "James Anderson",
    role: "Client",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    text: "My estate planning was handled with exceptional care. The entire process was well explained and the documents were thorough.",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=faces",
    name: "Lisa Garcia",
    role: "Client",
    rating: 5,
    date: "2 months ago",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <section id="reviews" className="bg-background my-20 relative py-20">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm">
              Testimonials
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter mt-5 text-center">
            What our clients say
          </h2>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
        {/* CTA Link */}
        <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {config.GOOGLE_BUSINESS_PROFILE_URL &&
          !config.GOOGLE_BUSINESS_PROFILE_URL.startsWith("{{") ? (
            <>
            <a
              href={config.GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline font-semibold"
            >
              Read more reviews
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Write a Review
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                config.BUSINESS_NAME + " " + config.CITY
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline font-semibold"
            >
              Read more reviews
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Write a Review
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onLowRating={(rating) => {
          setSelectedRating(rating);
          setIsReviewModalOpen(false);
          setIsCommentModalOpen(true);
        }}
      />

      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => {
          setIsCommentModalOpen(false);
          setSelectedRating(0);
        }}
        rating={selectedRating}
      />
    </section>
  );
};

export default Testimonials;

