# Djongh Drones - Professional Drone Services Website

A modern, responsive website for Djongh Drones, a professional drone services company specializing in aerial surveying, topography, infrastructure inspection, and promotional content creation.

## 🚁 About

Djongh Drones offers comprehensive drone services including:

- **Aerial Surveying**: Mapping, orthomosaics, digital elevation models, agricultural monitoring
- **Topography**: Detailed land surveys, volume calculations, 3D terrain modeling
- **Infrastructure Inspection**: Telecommunications towers, bridges, solar panels, electrical networks
- **Engineering & Architecture**: 3D modeling, construction monitoring, urban planning
- **Promotional Content**: High-resolution aerial photography, advertising videos, institutional content
- **Port Operations**: Port area monitoring, vessel inspection, port infrastructure assessment

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Styled Components
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics
- **UI Components**: Radix UI, Lucide React
- **Form Handling**: Zod validation
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Cookie Management**: React Cookie Consent

## 📁 Project Structure

```
djongh-drones/
├── public/                 # Static assets
│   ├── clients-logos/      # Client company logos
│   └── equipamentos-logos/ # Equipment brand logos
├── src/
│   ├── assets/            # Images, videos, icons
│   ├── components/        # Reusable UI components
│   │   ├── Button/
│   │   ├── Counter/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HeroPages/
│   │   └── PartnershipSection/
│   ├── pages/             # Page components
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── home/          # Home page
│   │   └── services/      # Services page
│   ├── coockies/          # Cookie consent management
│   ├── App.tsx           # Main app component
│   └── main.tsx          # App entry point
├── package.json
├── vite.config.ts
└── vercel.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd djongh-drones
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The project is configured for deployment on Vercel with the following features:

- **SPA Routing**: Configured to handle client-side routing
- **Analytics**: Vercel Analytics integration for performance monitoring
- **Cookie Consent**: GDPR-compliant cookie management

## 📱 Features

### Responsive Design
- Mobile-first approach
- Optimized for all device sizes
- Touch-friendly navigation

### Performance
- Fast loading with Vite
- Optimized images and assets
- Lazy loading for better performance

### User Experience
- Smooth animations and transitions
- Interactive service modals
- Contact form with validation
- Cookie consent management

### SEO & Analytics
- Vercel Analytics integration
- Sitemap generation
- Robots.txt configuration
- Meta tags optimization

## 🎨 Design System

The website uses a consistent design system with:
- Modern, professional color scheme
- Typography optimized for readability
- Consistent spacing and layout
- Interactive hover effects
- Smooth transitions

## 📞 Contact

For more information about Djongh Drones services, visit the contact page or reach out through the website.

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.
---

Developed with ❤️ for DeJongh Drones
