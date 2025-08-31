"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Users, Award, TrendingUp, HeartHandshake } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Licensed professionals with 15+ years of experience and full legal compliance.",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your real estate needs and emergencies.",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated specialists in luxury properties with deep market knowledge.",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as the top luxury real estate agency for 3 consecutive years.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
  },
  {
    icon: TrendingUp,
    title: "Market Leaders",
    description: "Consistently delivering above-market returns and successful transactions.",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
  },
  {
    icon: HeartHandshake,
    title: "Personal Touch",
    description: "Tailored service that understands your unique needs and preferences.",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <Badge variant="secondary">Why Choose Aura Estates</Badge>
          <h2 className="font-heading font-black text-3xl md:text-4xl">
            Your Success is Our
            <span className="text-primary block">Top Priority</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine years of expertise with cutting-edge technology and personalized service to deliver exceptional
            results for every client.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`h-16 w-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="font-heading font-black text-3xl md:text-4xl text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="font-heading font-black text-3xl md:text-4xl text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Properties Sold</div>
          </div>
          <div className="space-y-2">
            <div className="font-heading font-black text-3xl md:text-4xl text-primary">$2.5B</div>
            <div className="text-sm text-muted-foreground">Total Sales Volume</div>
          </div>
          <div className="space-y-2">
            <div className="font-heading font-black text-3xl md:text-4xl text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
