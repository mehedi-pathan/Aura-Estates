"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { Home, TrendingUp, Building, PiggyBank, ArrowRight, Users, Award, Clock, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Buy Property",
    description: "Find your dream home with our expert guidance and exclusive access to premium properties.",
    features: [
      "Personalized property search",
      "Market analysis and pricing guidance",
      "Negotiation and closing support",
      "Access to off-market properties",
    ],
    image: "/service-buy.png",
  },
  {
    icon: TrendingUp,
    title: "Sell Property",
    description: "Maximize your property's value with our comprehensive marketing and sales strategy.",
    features: [
      "Professional property valuation",
      "Premium marketing campaigns",
      "Staging and photography services",
      "Expert negotiation and closing",
    ],
    image: "/service-sell.png",
  },
  {
    icon: Building,
    title: "Property Management",
    description: "Comprehensive property management services to protect and grow your real estate investments.",
    features: [
      "Tenant screening and placement",
      "Rent collection and accounting",
      "Maintenance and repairs coordination",
      "Regular property inspections",
    ],
    image: "/service-management.png",
  },
  {
    icon: PiggyBank,
    title: "Investment Consulting",
    description: "Strategic investment advice to build and optimize your real estate portfolio.",
    features: [
      "Market research and analysis",
      "Investment strategy development",
      "Portfolio optimization",
      "Risk assessment and mitigation",
    ],
    image: "/service-investment.png",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin with a comprehensive consultation to understand your needs, goals, and preferences.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our team creates a customized strategy tailored to your specific requirements and market conditions.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the plan with precision, keeping you informed every step of the way.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at closing. We provide continued support for all your real estate needs.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="font-heading font-black text-4xl md:text-5xl">Premium Real Estate Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your unique needs and investment goals
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results for every client
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-black text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full ml-4 h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Why Choose Us</Badge>
              <h2 className="font-heading font-black text-3xl md:text-4xl">Excellence in Every Service</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our commitment to excellence extends across all our services. We combine industry expertise,
                cutting-edge technology, and personalized attention to deliver results that exceed expectations.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Users, text: "Dedicated team of licensed professionals" },
                  { icon: Award, text: "Award-winning service and client satisfaction" },
                  { icon: Clock, text: "24/7 availability and rapid response times" },
                  { icon: Shield, text: "Comprehensive insurance and legal protection" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-6">
                Schedule Free Consultation
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"></div>
              <div className="absolute inset-4 bg-[url('/services-hero-image.png')] bg-cover bg-center rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="font-heading font-black text-3xl md:text-4xl">Ready to Get Started?</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Take the first step towards your real estate goals. Our expert team is ready to provide personalized
            solutions for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-xl">Aura Estates</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner in luxury real estate, delivering exceptional service and premium properties.
              </p>
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
