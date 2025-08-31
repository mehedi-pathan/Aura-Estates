"use client"

import { useState, useEffect } from "react"
import { AnimatedLogo } from "@/components/animated-logo"
import { Button } from "@/components/ui/button"
import { PropertySearch } from "@/components/property-search"
import { PropertyCard } from "@/components/property-card"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { ServicesPreview } from "@/components/services-preview"
import { MarketInsights } from "@/components/market-insights"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
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
  // Quick Stats Animation
  const stats = [
    { value: 500, label: "Properties Sold" },
    { value: 15, label: "Years Experience" },
    { value: 98, label: "Client Satisfaction" },
    { value: 24, label: "Support Available", suffix: "+" },
  ]

  const [counters, setCounters] = useState([0, 0, 0, 0])

  useEffect(() => {
    const duration = 2000
    const frameRate = 30
    const totalFrames = duration / frameRate
    const increments = stats.map((stat) => stat.value / totalFrames)
    let frame = 0

    const interval = setInterval(() => {
      frame++
      setCounters((prev) =>
        prev.map((count, i) => {
          const next = count + increments[i]
          return next >= stats[i].value ? stats[i].value : next
        })
      )
      if (frame >= totalFrames) clearInterval(interval)
    }, frameRate)

    return () => clearInterval(interval)
  }, [])

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
            <span className="text-primary block">Dream Estates</span>
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

      {/* Quick Stats with Animated Numbers */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-black text-3xl md:text-4xl text-primary">
                  {Math.floor(counters[i])}
                  {stat.suffix || ""}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
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
    </div>
  )
}
