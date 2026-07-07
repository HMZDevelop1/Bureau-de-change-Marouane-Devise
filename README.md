# Marouane Devise

Premium currency exchange website for Marouane Devise — a trusted bureau de change in Casablanca, Morocco.

## Features

- **Multilingual**: French (default), English, Arabic with full RTL support
- **Dark/Light Mode**: Automatic system detection + manual toggle
- **Exchange Rate Dashboard**: Real-time rates for 10 currencies
- **Currency Calculator**: Instant conversion with no commission
- **Reservation System**: Form + WhatsApp quick booking
- **SEO Optimized**: Schema.org, OpenGraph, Twitter Cards, sitemap, robots.txt
- **Performance**: Lighthouse 100/100 target
- **Security**: CSP headers, XSS protection, secure form handling
- **Responsive**: Mobile, tablet, desktop, large screens
- **Animations**: Framer Motion with smooth transitions

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React framework with App Router |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| next-intl | Internationalization |
| next-themes | Dark/Light mode |
| Lucide Icons | Icon library |

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/marouane-devise.git

# Navigate to project
cd marouane-devise

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Production Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Auto-detects Next.js
4. Deploy

```bash
# Or deploy via CLI
vercel --prod
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_PHONE=+212721791914
NEXT_PUBLIC_WHATSAPP=+212721791914
```

## Folder Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Root redirect
│   ├── robots.ts            # Robots.txt
│   ├── sitemap.ts           # Sitemap
│   └── [locale]/
│       ├── layout.tsx       # Locale layout
│       └── page.tsx         # Homepage
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Page sections
│   ├── ui/                  # Reusable components
│   ├── theme-provider.tsx   # Theme provider
│   └── seo-schema.tsx       # Schema.org
├── data/                    # Static data
├── dictionaries/            # i18n translations
├── lib/                     # Utilities
├── types/                   # TypeScript types
└── public/                  # Static assets
```

## Languages

| Language | Code | RTL |
|----------|------|-----|
| French | `fr` | No |
| English | `en` | No |
| Arabic | `ar` | Yes |

## License

MIT License © 2026 Marouane Devise
