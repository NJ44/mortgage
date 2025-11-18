# Quick Start Guide

Get your dentist website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Your Business

Edit `src/config.js` and replace ALL placeholder values (those starting with `{{`):

```javascript
export const config = {
  BUSINESS_NAME: "Smile Dental Care",  // ← Replace this
  TAGLINE: "Gentle dental care near you",
  PRIMARY_COLOR: "#0066CC",  // ← Your brand color
  ACCENT_COLOR: "#FF6B6B",   // ← Accent color
  ADDRESS_LINE: "123 Main St",
  CITY: "New York",
  PHONE: "+1-555-123-4567",
  EMAIL: "info@smiledental.com",
  // ... etc
}
```

## Step 3: Get Your Google Map Embed URL

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe `src` URL
5. Paste it into `GOOGLE_MAP_EMBED_SRC` in `config.js`

## Step 4: Set Up Your Form Webhook (Optional)

If you have a backend endpoint to receive form submissions:

1. Add your webhook URL to `FORM_WEBHOOK_URL` in `config.js`
2. Make sure your endpoint accepts POST requests with JSON body
3. If you don't have one yet, the form will show a success message in demo mode

## Step 5: Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site!

## Step 6: Build for Production

```bash
npm run build
```

The `dist` folder contains your production-ready website.

## Step 7: Deploy

### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Done! Your site is live.

### Option B: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow the prompts

## Next Steps

- [ ] Replace placeholder images with your own
- [ ] Add your logo to `LOGO_URL` in config
- [ ] Update `sitemap.xml` with your actual domain
- [ ] Update `robots.txt` with your domain
- [ ] Add real Google Reviews (see README.md)
- [ ] Create Privacy Policy and Terms pages
- [ ] Test form submission with your webhook

## Need Help?

Check the full [README.md](README.md) for detailed documentation.

