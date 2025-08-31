"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Property Investor",
    content:
      "Aura Estates helped me find the perfect investment property. Their expertise and attention to detail made the entire process seamless.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First-time Buyer",
    content:
      "As a first-time buyer, I was nervous about the process. The team at Aura Estates guided me every step of the way with patience and professionalism.",
    rating: 5,
    avatar: "/professional-man.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Luxury Home Owner",
    content:
      "The luxury properties showcased by Aura Estates exceeded my expectations. They truly understand what discerning clients are looking for.",
    rating: 5,
    avatar: "/elegant-woman.png",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <Quote className="h-8 w-8 text-primary mx-auto mb-4" />

              <p className="text-lg text-muted-foreground mb-6 italic">"{testimonials[currentIndex].content}"</p>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-heading font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
