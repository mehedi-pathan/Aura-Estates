"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, TrendingUp, Shield, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Expert guidance through buying and selling luxury properties with personalized service.",
    features: ["Market Analysis", "Property Valuation", "Negotiation Support"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment consulting to maximize your real estate portfolio returns.",
    features: ["Portfolio Analysis", "Market Insights", "ROI Optimization"],
  },
  {
    icon: Shield,
    title: "Property Management",
    description: "Comprehensive property management services for hassle-free ownership experience.",
    features: ["Tenant Screening", "Maintenance", "Financial Reporting"],
  },
  {
    icon: Users,
    title: "Concierge Services",
    description: "White-glove service including staging, photography, and marketing support.",
    features: ["Professional Staging", "Marketing", "Client Support"],
  },
]

export function ServicesPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary">Our Services</Badge>
          <h2 className="font-heading font-black text-3xl md:text-4xl">Comprehensive Real Estate Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From buying and selling to investment advisory, we provide end-to-end real estate services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg">Explore All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
