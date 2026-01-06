// CLIENT VARIABLES - Replace these with actual values
export const config = {
  BUSINESS_NAME: "Law Firm",
  TAGLINE: "{{TAGLINE}}", // e.g., "Experienced legal representation near you"
  PRIMARY_COLOR: "{{PRIMARY_COLOR}}", // hex color, e.g., "#1a1a2e"
  ACCENT_COLOR: "{{ACCENT_COLOR}}", // hex color, e.g., "#c9a961"
  ADDRESS_LINE: "123 Main Street",
  CITY: "California",
  PHONE: "0546728171",
  EMAIL: "info@lawfirm.com",
  LOGO_URL: "{{LOGO_URL}}", // optional
  GOOGLE_MAP_EMBED_SRC: "{{GOOGLE_MAP_IFRAME_SRC}}",
  GOOGLE_REVIEWS_DATA: null, // Will be set from {{REVIEWS_JSON}} or use sample data
  FORM_WEBHOOK_URL: "{{FORM_WEBHOOK_URL}}",
  GOOGLE_BUSINESS_PROFILE_URL: "{{GOOGLE_BUSINESS_PROFILE_URL}}", // optional
  LOCATIONS: [
    { name: "Main Office", slug: "main-office", address: "123 Main Street", city: "Los Angeles", phone: "0546728171" },
    { name: "Downtown Branch", slug: "downtown-branch", address: "456 Oak Avenue", city: "San Francisco", phone: "0546728172" },
    { name: "Westside Office", slug: "westside-office", address: "789 Beach Boulevard", city: "San Diego", phone: "0546728173" }
  ]
};

// Sample reviews data (used if GOOGLE_REVIEWS_DATA is not provided)
export const sampleReviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    text: "Excellent legal representation! The team was professional, responsive, and helped me win my case. Highly recommend!",
  },
  {
    author: "Michael Chen",
    rating: 5,
    date: "2024-01-10",
    text: "Best law firm I've worked with. They explained everything clearly, kept me informed throughout the process, and achieved great results.",
  },
  {
    author: "Emily Rodriguez",
    rating: 5,
    date: "2024-01-05",
    text: "Emergency consultation was available same day. Professional and caring. Thank you for the quick help during a difficult time!",
  },
  {
    author: "David Thompson",
    rating: 5,
    date: "2023-12-28",
    text: "Great experience from start to finish. The attorneys are knowledgeable, the staff is welcoming, and they explained everything clearly.",
  },
];

