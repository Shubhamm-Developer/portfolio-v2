# Deployment Guide - Backend Engineer Portfolio

## Quick Start Deployment

### Option 1: Vercel (Recommended - 5 minutes)

Vercel is the easiest and recommended platform for Next.js apps.

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
cd /home/shubham/portfolio
vercel

# Follow the prompts:
# - Project name: backend-engineer (or your choice)
# - Framework: Next.js
# - Root directory: ./
# - Build command: npm run build
# - Output directory: .next
```

**After deployment:**

- Visit your deployment URL
- Add custom domain in Vercel dashboard
- Setup SSL (automatic)

---

### Option 2: Netlify

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build the project
npm run build

# 3. Deploy
netlify deploy --prod --dir=.next --public=.next

# Or connect via GitHub for automatic deploys
```

---

### Option 3: Docker (Custom Servers)

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t backend-portfolio .
docker run -p 3000:3000 backend-portfolio
```

---

### Option 4: AWS Amplify

```bash
# 1. Install AWS CLI
pip install awscli

# 2. Configure AWS credentials
aws configure

# 3. Deploy with Amplify CLI
npm install -g @aws-amplify/cli
amplify init
amplify publish
```

---

## Pre-Deployment Checklist

Before deploying, update these files:

### 1. Update Domain References

In `/app/layout.tsx`:

```typescript
// Replace all occurrences of "yourportfolio.com" with your actual domain
openGraph: {
  url: "https://YOUR-DOMAIN.com",  // ← Update this
  // ...
},

// And the canonical URL
head>
  <link rel="canonical" href="https://YOUR-DOMAIN.com" />
</head>
```

### 2. Update Contact Email

In `/app/contact/page.tsx`:

```typescript
// Replace placeholder email
<a href="mailto:YOUR-EMAIL@domain.com">
  YOUR-EMAIL@domain.com
</a>
```

And in `/components/shared/Footer.tsx`:

```typescript
// Update social media links
<a href="https://github.com/YOUR-GITHUB">GitHub</a>
<a href="https://linkedin.com/in/YOUR-LINKEDIN">LinkedIn</a>
<a href="https://twitter.com/YOUR-TWITTER">Twitter</a>
```

### 3. Setup Contact Form Backend

The contact form currently just simulates submission. Choose one:

#### A. Using Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form ID
4. Update `/app/contact/page.tsx`:

```typescript
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsLoading(true);

  const formData = new FormData(e.currentTarget);

  // Use Formspree
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    setSubmitted(true);
    e.currentTarget.reset();
  }

  setIsLoading(false);
}
```

#### B. Using SendGrid Email API

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Create server action in `/app/actions/sendEmail.ts`:

```typescript
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  company: string;
  challenge: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: "noreply@your-domain.com",
      to: "your-email@domain.com",
      subject: `New Contact: ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Challenge:</strong> ${data.challenge}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
```

4. Update contact form to use this action

#### C. Using Supabase Database

Store submissions in a database instead of emails.

---

## Environment Variables

If using any external services, create `.env.local`:

```env
# For email services
RESEND_API_KEY=your_api_key_here
SENDGRID_API_KEY=your_api_key_here

# For analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# For database (if using Supabase, Firebase, etc.)
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

## Post-Deployment

### 1. Test Everything

- [ ] Homepage loads
- [ ] Navigation works
- [ ] All case studies display
- [ ] Contact form submits
- [ ] Mobile responsive
- [ ] Analytics tracking (if added)

### 2. Setup Analytics

Add Google Analytics to `/app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout(...) {
  return (
    <html>
      <body>
        {/* ... */}
        <GoogleAnalytics gaId="G-YOUR_GA_ID" />
      </body>
    </html>
  )
}
```

### 3. Setup Monitoring

Use these free tools to monitor your site:

- **Uptime Monitoring**: [Uptime Robot](https://uptimerobot.com)
- **Error Tracking**: [Sentry](https://sentry.io)
- **Performance**: Built into Vercel dashboard

### 4. Optimize Performance

Run Lighthouse audit:

1. Open site in Chrome
2. DevTools → Lighthouse
3. Run audit
4. Fix any issues

### 5. SEO Verification

1. Submit sitemap to Google Search Console
   - URL: `https://your-domain.com/sitemap.xml`
2. Submit sitemap to Bing Webmaster Tools
3. Verify domain ownership
4. Monitor search impressions and clicks

---

## Custom Domain Setup

### Vercel

1. Dashboard → Settings → Domains
2. Add your domain
3. Follow DNS instructions
4. SSL is automatic

### Netlify

1. Dashboard → Site Settings → Domain Management
2. Add custom domain
3. Update DNS at your registrar
4. SSL is automatic

### Self-Hosted

1. Point domain DNS to your server IP
2. Setup SSL with Let's Encrypt (free)
3. Configure web server (Nginx/Apache)

---

## Environment-Specific Configuration

### Development

```bash
npm run dev  # Runs on localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Vercel Deployment Environments

Vercel automatically creates:

- **Production**: `https://your-domain.com`
- **Preview**: Auto-generated for each PR
- **Development**: For local testing

---

## Troubleshooting

### Port Already in Use

```bash
lsof -i :3000
kill -9 <PID>
npm run dev
```

### Build Fails

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Contact Form Not Working

1. Check browser console for errors
2. Verify API key is set
3. Check firewall/CORS settings
4. Test with Postman if using custom API

### Deployment Fails

1. Ensure all environment variables are set
2. Check Node.js version compatibility
3. Review deployment logs
4. Try rebuilding from scratch

---

## Monitoring & Maintenance

### Weekly

- Check analytics for traffic patterns
- Monitor error tracking (Sentry)
- Check uptime monitoring

### Monthly

- Review contact submissions
- Update case studies if needed
- Check SEO rankings
- Review Core Web Vitals

### Quarterly

- Refresh content
- Update proof metrics
- Review and optimize conversion funnel

---

## Scaling Considerations

Current setup handles:

- 1000s of visitors/month easily
- Unlimited case study views
- No database queries needed initially

When scaling further:

- Use CDN for global distribution (Vercel automatic)
- Add database for analytics
- Setup caching headers
- Monitor Core Web Vitals

---

## Backup & Recovery

### Before deploying

```bash
# Backup to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR-USER/portfolio
git push -u origin main
```

### Restore from backup

```bash
git clone https://github.com/YOUR-USER/portfolio
cd portfolio
npm install
npm run dev
```

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion

---

**Ready to deploy? Start with Option 1 (Vercel) for fastest setup!**
