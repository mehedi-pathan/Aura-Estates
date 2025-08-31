"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, CheckCircle, TrendingUp, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge variant="secondary" className="w-fit">
              Stay Informed
            </Badge>
            <h2 className="font-heading font-black text-3xl md:text-4xl">
              Get Market Insights &<span className="text-primary block">Exclusive Listings</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Join over 10,000 subscribers who receive our weekly market reports, exclusive property listings, and
              expert real estate insights.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Weekly Market Reports</h4>
                  <p className="text-sm text-muted-foreground">Latest trends and price analysis</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Exclusive Listings</h4>
                  <p className="text-sm text-muted-foreground">First access to premium properties</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Expert Insights</h4>
                  <p className="text-sm text-muted-foreground">Tips from industry professionals</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl">Subscribe to Our Newsletter</h3>
                  <p className="text-muted-foreground">
                    Get the latest market insights delivered to your inbox every week.
                  </p>
                </div>

                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-center"
                      required
                    />
                    <Button type="submit" className="w-full h-12 text-base font-medium">
                      Subscribe Now
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-green-600">Successfully Subscribed!</h4>
                    <p className="text-sm text-muted-foreground">
                      Thank you for subscribing. You'll receive our next newsletter soon.
                    </p>
                  </motion.div>
                )}

                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-xs text-muted-foreground">
                    Join 10,000+ subscribers • Unsubscribe anytime • No spam, ever
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
