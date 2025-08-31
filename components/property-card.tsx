"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface PropertyCardProps {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  image: string
  featured?: boolean
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  image,
  featured = false,
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <div
            className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {featured && <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>}

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-bold text-xl mb-1">{title}</h3>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {location}
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                {beds} beds
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                {baths} baths
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                {sqft}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-heading font-black text-2xl text-primary">{price}</span>
              <Link href={`/property/${id}`}>
                <Button variant="outline" className="font-medium bg-transparent">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
