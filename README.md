# Dentist Website - Production Ready

A responsive, production-ready single-page React website for dental practices. Built with modern web standards, accessibility in mind, and optimized for SEO and performance.

## Features

- ✅ **Responsive Design**: Mobile-first approach, works on all devices
- ✅ **Accessibility**: ARIA attributes, keyboard navigation, focus management
- ✅ **SEO Optimized**: Meta tags, JSON-LD schema, semantic HTML
- ✅ **Performance**: Optimized images, lazy loading, minimal bundle size
- ✅ **Form Handling**: Lead capture form with validation and webhook integration
- ✅ **Google Reviews**: Carousel component with sample or real review data
- ✅ **Modern UI**: Clean, friendly design with smooth animations

## Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Configure your client variables in `src/config.js` (see Configuration section below)

4. Start the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Configuration

### Client Variables

Edit `src/config.js` and replace all placeholder values (those starting with `{{`):

```javascript
export const config = {
  BUSINESS_NAME: "Your Dental Practice",
  TAGLINE: "Gentle dental care near you",
  PRIMARY_COLOR: "#0066CC",        // Main brand color (hex)
  ACCENT_COLOR: "#FF6B6B",         // Accent/highlight color (hex)
  ADDRESS_LINE: "123 Main Street",
  CITY: "Your City",
  PHONE: "+1-555-123-4567",
  EMAIL: "info@yourdentalpractice.com",
  LOGO_URL: "https://yourdomain.com/logo.png",  // Optional
  GOOGLE_MAP_EMBED_SRC: "https://www.google.com/maps/embed?pb=...",
  FORM_WEBHOOK_URL: "https://your-webhook-endpoint.com/api/leads",
  GOOGLE_BUSINESS_PROFILE_URL: "https://www.google.com/maps/place/...",  // Optional
}
```

### Environment Variables (Optional)

For sensitive data or different environments, you can use environment variables. Create a `.env` file:

```env
VITE_BUSINESS_NAME=Your Dental Practice
VITE_PRIMARY_COLOR=#0066CC
VITE_FORM_WEBHOOK_URL=https://your-webhook.com/api/leads
```

Then update `src/config.js` to read from `import.meta.env`:

```javascript
export const config = {
  BUSINESS_NAME: import.meta.env.VITE_BUSINESS_NAME || "{{BUSINESS_NAME}}",
  // ... etc
}
```

## Components

### NavBar
- Transparent over hero, solid on scroll
- Mobile hamburger menu with focus trap
- Smooth scroll to sections

### Hero
- Split layout: text left, form right
- Responsive: stacks on mobile
- Entrance animations (respects reduced-motion)

### LeadForm
- Client-side validation
- Posts to webhook URL
- Success/error states
- Privacy notice

### Services
- Grid of 6 service cards
- Modal details on click
- Service schema in JSON-LD

### MapEmbed
- Google Maps iframe
- Accessible fallback link
- Responsive container

### Reviews
- Carousel with keyboard controls
- Pauses on hover
- Sample or real Google reviews data

### FAQ
- Accordion interface
- First item open by default
- Keyboard accessible

### Footer
- Contact info, links, hours
- Small contact form
- LocalBusiness JSON-LD schema

## SEO & Schema

### Meta Tags
Located in `index.html`:
- Title tag
- Meta description
- Canonical URL
- Open Graph tags
- Twitter Card tags

### JSON-LD Schema
Two schema blocks:
1. **LocalBusiness** (in `SEO.jsx`): Business info, hours, services
2. **DentalClinic** (in `Footer.jsx`): Additional clinic-specific data

### Sitemap & Robots
- `public/sitemap.xml`: Update URLs before deployment
- `public/robots.txt`: Update sitemap URL

## Google Reviews Integration

### Option 1: Manual JSON Import
Update `src/config.js`:

```javascript
export const config = {
  // ...
  GOOGLE_REVIEWS_DATA: [
    {
      author: "John Doe",
      rating: 5,
      date: "2024-01-15",
      text: "Great service!",
    },
    // ... more reviews
  ],
}
```

### Option 2: Google Places API
Create a service to fetch reviews from Google Places API and update the Reviews component to use it.

### Option 3: Third-party Service
Use a service like ReviewsOnMyWebsite or EmbedSocial to fetch and display reviews.

## Form Webhook

The lead form sends a POST request to `FORM_WEBHOOK_URL` with this payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",
  "preferredTime": "2024-01-20T10:00",
  "message": "I need a cleaning",
  "source": "Website Ignite"
}
```

### Example Webhook Handler (Node.js/Express)

```javascript
const rateLimit = require('express-rate-limit')

// Rate limiting: max 5 submissions per IP per hour
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: 'Too many form submissions, please try again later.'
})

app.post('/api/leads', formLimiter, async (req, res) => {
  const { name, email, phone, preferredTime, message, source } = req.body
  
  // Validate
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  
  // Additional server-side validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }
  
  // Save to database, send email, etc.
  // ...
  
  res.json({ success: true })
})
```

**Important:** Implement rate limiting on your server to prevent spam. The client-side validation is for UX, but server-side validation and rate limiting are essential for security.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify, or
3. Connect your Git repository (the `netlify.toml` file will auto-configure settings)

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Or connect via GitHub/GitLab (the `vercel.json` file will auto-configure settings)

### Other Static Hosts

Any static hosting service works:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Cloudflare Pages

## Performance Optimization

### Image Optimization
- Replace placeholder images in Hero with optimized versions
- Use WebP format with fallbacks
- Implement lazy loading (already in place for map iframe)

### Font Optimization
- Preload key fonts in `index.html`:
```html
<link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin>
```

### Caching
Add HTTP headers for static assets:
```
Cache-Control: public, max-age=31536000, immutable
```

## Accessibility Checklist

- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Color contrast (WCAG AA)
- ✅ Screen reader support
- ✅ Reduced motion support
- ✅ Form validation with error messages

## Testing

Run tests:

```bash
npm test
```

Current test coverage:
- Form validation
- Email/phone format validation
- Form submission

## Lighthouse Score Target

Aim for:
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥90
- SEO: ≥95

## Customization

### Colors
Update CSS custom properties in `src/index.css`:
```css
:root {
  --primary-color: #0066CC;
  --accent-color: #FF6B6B;
}
```

Or use Tailwind classes directly.

### Services
Edit the `services` array in `src/components/Services.jsx`.

### FAQ
Edit the `faqs` array in `src/components/FAQ.jsx`.

## Additional Pages Needed

The footer includes links to Privacy Policy and Terms of Service. Create these pages:

1. **Privacy Policy** (`/privacy` or `#privacy`): Explain how you collect, use, and protect user data
2. **Terms of Service** (`/terms` or `#terms`): Outline terms and conditions for using your website

You can use online generators or legal templates to create these pages.

## Support

For issues or questions:
1. Check the configuration in `src/config.js`
2. Verify webhook URL is accessible
3. Check browser console for errors
4. Ensure all placeholder values are replaced
5. Verify all images and assets are properly referenced

## License

This project is provided as-is for use in dental practice websites.

## Changelog

### v1.0.0 (2024-01-01)
- Initial release
- All core components implemented
- SEO and schema markup added
- Form validation and webhook integration
- Responsive design and accessibility features

---

**Schema Placement:**
- LocalBusiness schema: `src/components/SEO.jsx` (injected via script tag)
- DentalClinic schema: `src/components/Footer.jsx` (injected via script tag)

**SEO Tags:**
- Meta tags: `index.html` (head section)
- Dynamic updates: `src/components/SEO.jsx` (via script injection)

