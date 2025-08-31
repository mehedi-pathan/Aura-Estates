# Aura Estates - Luxury Real Estate Website

A modern, responsive real estate website built with Next.js 15, featuring property listings, advanced search functionality, and a premium user experience.

## 🏠 Features

### Core Functionality
- **Property Listings**: Browse and filter properties with advanced search options
- **Property Details**: Comprehensive property pages with image galleries and detailed information
- **Search & Filter**: Location-based search, price ranges, property types, and amenity filters
- **Responsive Design**: Optimized for all devices from mobile to desktop

### User Experience
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Animated Logo**: Modern SVG logo with smooth animations
- **Page Transitions**: Smooth navigation with Framer Motion animations
- **Loading States**: Custom loading spinners and skeleton screens
- **404 Page**: Custom error page with navigation options

### Pages & Sections
- **Homepage**: Hero section, property search, featured listings, testimonials, and market insights
- **Property Listings**: Grid/list view with advanced filtering and sorting
- **Property Details**: Image galleries, property information, inquiry forms, and related properties
- **About Us**: Company story, team members, and achievements
- **Services**: Buy, sell, property management, and investment consulting
- **Blog**: Real estate insights and market trends
- **Contact**: Multiple contact methods with office locations

### Technical Features
- **Two-Layer Navigation**: Top contact bar with main navigation below
- **Form Validation**: Smart form validation with disabled states
- **Newsletter Signup**: Email subscription with validation
- **Social Media Integration**: Links to social platforms
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Montserrat (headings) + Open Sans (body)
- **Language**: TypeScript

## 🎨 Design System

### Colors
- **Primary**: Purple (#6B46C1)
- **Secondary**: Light Gray variants
- **Accent**: Purple gradients and complementary colors
- **Dark Mode**: Full dark theme support

### Typography
- **Headings**: Montserrat (400, 600, 700)
- **Body**: Open Sans (400, 500)
- **Responsive**: Fluid typography scaling

### Layout
- **Mobile-First**: Responsive design approach
- **Grid System**: CSS Grid and Flexbox
- **Spacing**: Consistent 8px grid system
- **Rounded Corners**: 2xl border radius throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd aura-estates
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
aura-estates/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── listings/          # Property listings
│   ├── property/[id]/     # Dynamic property details
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── animated-logo.tsx
│   ├── navigation.tsx
│   ├── property-card.tsx
│   ├── property-search.tsx
│   └── ...
├── public/               # Static assets
│   ├── images/          # Property and team images
│   └── favicon.ico      # Site favicon
└── README.md
\`\`\`

## 🎯 Key Components

### Navigation
- Two-layer header with contact information and main navigation
- Mobile-responsive hamburger menu
- Dark mode toggle
- Animated logo

### Property Search
- Advanced filtering options
- Form validation
- Search routing to listings page
- Responsive design

### Property Cards
- Interactive hover effects
- Like/favorite functionality
- Responsive grid layout
- Image optimization

### Property Details
- Image gallery with thumbnails
- Comprehensive property information
- Inquiry forms
- Related properties carousel

## 🌟 Features in Detail

### Search Functionality
- Location-based search with suggestions
- Price range sliders
- Property type selection
- Bedroom/bathroom filters
- Amenity checkboxes
- Advanced search toggle

### Property Management
- Featured properties highlighting
- Property status indicators
- Image galleries with navigation
- Property comparison features

### User Interaction
- Contact forms with validation
- Newsletter subscription
- Social media integration
- WhatsApp quick contact
- Call-to-action buttons

### Performance
- Image optimization
- Lazy loading
- Code splitting
- SEO optimization
- Fast page transitions

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced for tablets (768px+)
- **Desktop**: Full experience (1024px+)
- **Large Screens**: Optimized for 4K displays

## 🎨 Customization

### Colors
Update the color scheme in `app/globals.css`:
\`\`\`css
@theme inline {
  --color-primary: #6B46C1;
  --color-secondary: #F3F4F6;
  /* Add your custom colors */
}
\`\`\`

### Typography
Modify fonts in `app/layout.tsx`:
\`\`\`tsx
import { Cute_Font as YourFont } from 'next/font/google'
\`\`\`

### Components
All components are modular and can be easily customized or replaced.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Mehedi Pathan**
- Website: [https://mehedipathan.online/](https://mehedipathan.online/)
- Specialized in modern web development and UI/UX design

## 📞 Support

For support or questions about this project, please contact the development team or visit our website.

---

Built with ❤️ using Next.js and modern web technologies.
