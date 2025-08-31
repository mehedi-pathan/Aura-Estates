import { AnimatedLogo } from "@/components/animated-logo"
import { Button } from "@/components/ui/button"
import { PropertySearch } from "@/components/property-search"
import { PropertyCard } from "@/components/property-card"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { ServicesPreview } from "@/components/services-preview"
import { MarketInsights } from "@/components/market-insights"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { NewsletterSection } from "@/components/newsletter-section"
import { WhyChooseUs } from "@/components/why-choose-us"

const featuredProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2.5M",
    beds: 4,
    baths: 3,
    sqft: "3,200 sq ft",
    image: "/modern-luxury-villa.png",
    featured: true,
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$4.2M",
    beds: 3,
    baths: 2,
    sqft: "2,800 sq ft",
    image: "/downtown-penthouse.png",
    featured: true,
  },
  {
    id: 3,
    title: "Waterfront Estate",
    location: "Miami Beach, FL",
    price: "$6.8M",
    beds: 5,
    baths: 4,
    sqft: "4,500 sq ft",
    image: "/waterfront-estate.png",
    featured: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-secondary">
        <div className="absolute inset-0 bg-[url('/luxury-real-estate-background.png')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto text-center space-y-8 relative z-10">
          <Badge variant="secondary" className="mb-4">
            Premium Real Estate Agency
          </Badge>
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-balance">
            Discover Your
            <span className="text-primary block">Dream Estate</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience luxury living with Aura Estates. We specialize in premium properties that define elegance and
            sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings">
              <Button size="lg" className="text-lg px-8 py-6">
                Browse Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Schedule Viewing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Search */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <PropertySearch />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading font-black text-3xl md:text-4xl text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-black text-3xl md:text-4xl text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-black text-3xl md:text-4xl text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-black text-3xl md:text-4xl text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/listings">
              <Button variant="outline" size="lg">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Market Insights */}
      <MarketInsights />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">About Aura Estates</Badge>
              <h2 className="font-heading font-black text-3xl md:text-4xl">
                Your Trusted Partner in Luxury Real Estate
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 15 years of experience in the luxury real estate market, Aura Estates has established itself
                as the premier choice for discerning clients seeking exceptional properties.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Expert market knowledge and insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Personalized service tailored to your needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Exclusive access to premium properties</span>
                </div>
              </div>
              <Link href="/about">
                <Button size="lg">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"></div>
              <div className="absolute inset-4 bg-[url('/luxury-real-estate-team.png')] bg-cover bg-center rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from satisfied clients who found their dream properties with Aura Estates
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="font-heading font-black text-3xl md:text-4xl">Ready to Find Your Dream Property?</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Let our expert team help you discover the perfect property that matches your lifestyle and investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Your Search
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <AnimatedLogo />
              <p className="text-sm text-muted-foreground">
                Your trusted partner in luxury real estate, delivering exceptional service and premium properties.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/listings" className="block hover:text-primary transition-colors">
                  Properties
                </Link>
                <Link href="/services" className="block hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/about" className="block hover:text-primary transition-colors">
                  About
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold">Services</h4>
              <div className="space-y-2 text-sm">
                <Link href="/services" className="block hover:text-primary transition-colors">
                  Buy Property
                </Link>
                <Link href="/services" className="block hover:text-primary transition-colors">
                  Sell Property
                </Link>
                <Link href="/services" className="block hover:text-primary transition-colors">
                  Property Management
                </Link>
                <Link href="/services" className="block hover:text-primary transition-colors">
                  Investment Consulting
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>123 Luxury Avenue</p>
                <p>Beverly Hills, CA 90210</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@auraestates.com</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aura Estates. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <div className="flex space-x-6">
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
              <div className="text-xs">
                Developed by{" "}
                <Link
                  href="https://mehedipathan.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Mehedi Pathan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
