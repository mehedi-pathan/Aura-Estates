"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, MapPin } from "lucide-react"
import Link from "next/link"

const marketData = [
  {
    location: "Beverly Hills",
    change: "+12.5%",
    trend: "up",
    avgPrice: "$3.2M",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    location: "Manhattan",
    change: "+8.3%",
    trend: "up",
    avgPrice: "$2.8M",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    location: "Miami Beach",
    change: "-2.1%",
    trend: "down",
    avgPrice: "$1.9M",
    icon: TrendingDown,
    color: "text-red-600",
  },
  {
    location: "Malibu",
    change: "+15.7%",
    trend: "up",
    avgPrice: "$4.1M",
    icon: TrendingUp,
    color: "text-green-600",
  },
]

export function MarketInsights() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary">Market Insights</Badge>
          <h2 className="font-heading font-black text-3xl md:text-4xl">Real Estate Market Trends</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest market data and trends in luxury real estate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketData.map((data, index) => (
            <motion.div
              key={data.location}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <data.icon className={`h-5 w-5 ${data.color}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">{data.location}</h3>
                    <p className="text-2xl font-bold text-primary">{data.avgPrice}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${data.color}`}>{data.change}</span>
                    <span className="text-xs text-muted-foreground">vs last quarter</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View Market Reports
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
