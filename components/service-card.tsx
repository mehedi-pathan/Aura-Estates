"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
    image: string
  }
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
        <div className="relative">
          <div
            className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="absolute top-4 left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
            <service.icon className="h-6 w-6" />
          </div>
        </div>

        <CardHeader>
          <CardTitle className="font-heading font-bold text-xl">{service.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{service.description}</p>

          <div className="space-y-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <Button className="w-full mt-6 group">
            Learn More
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
