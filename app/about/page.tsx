"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TeamMember } from "@/components/team-member"
import { Award, Users, TrendingUp, Shield, Heart, Target, Star, Building, Clock } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With over 15 years in luxury real estate, Sarah founded Aura Estates with a vision to redefine premium property services.",
    image: "/team-sarah.png",
    specialties: ["Luxury Properties", "Investment Strategy", "Market Analysis"],
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Property Advisor",
    bio: "Michael brings expertise in commercial and residential properties, helping clients make informed investment decisions.",
    image: "/team-michael.png",
    specialties: ["Commercial Real Estate", "Property Valuation", "Negotiation"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Luxury Home Specialist",
    bio: "Emily specializes in high-end residential properties and has an eye for matching clients with their perfect homes.",
    image: "/team-emily.png",
    specialties: ["Luxury Homes", "Interior Design", "Client Relations"],
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Investment Consultant",
    bio: "David helps clients build wealth through strategic real estate investments and portfolio management.",
    image: "/team-david.png",
    specialties: ["Investment Analysis", "Portfolio Management", "Market Trends"],
  },
]

const achievements = [
  { icon: Award, label: "Industry Awards", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "1,200+" },
  { icon: TrendingUp, label: "Properties Sold", value: "$500M+" },
  { icon: Building, label: "Years Experience", value: "15+" },
]

const whyChooseUs = [
  {
    icon: Target,
    title: "Personalized Service",
    description: "Every client receives tailored attention and customized solutions for their unique needs.",
  },
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Our team of licensed professionals brings decades of combined experience to every transaction.",
  },
  {
    icon: Star,
    title: "Premium Network",
    description: "Access to exclusive properties and off-market opportunities through our extensive network.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock availability to ensure you never miss an opportunity or need assistance.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              About Aura Estates
            </Badge>
            <h1 className="font-heading font-black text-4xl md:text-5xl">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the story behind Aura Estates and meet the team dedicated to your real estate success
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Our Mission</Badge>
              <h2 className="font-heading font-black text-3xl md:text-4xl">Redefining Luxury Real Estate Excellence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Aura Estates, we believe that finding the perfect property should be an extraordinary experience.
                Founded in 2009 with a vision to transform the luxury real estate landscape, we've built our reputation
                on delivering unparalleled service, expert market knowledge, and genuine care for our clients' dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple philosophy: every client deserves access to the finest properties and
                the most professional service. Today, we're proud to be the trusted choice for discerning clients
                seeking exceptional real estate experiences.
              </p>
              <div className="flex items-center gap-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-medium">Passion for Excellence in Every Transaction</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"></div>
              <div className="absolute inset-4 bg-[url('/about-hero-image.png')] bg-cover bg-center rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="font-heading font-black text-3xl text-primary mb-2">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to helping you achieve your real estate goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl">Why Choose Aura Estates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what sets us apart in the luxury real estate market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="font-heading font-black text-3xl md:text-4xl">Ready to Work With Us?</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Experience the Aura Estates difference. Let our expert team guide you through your real estate journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View Our Services
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
