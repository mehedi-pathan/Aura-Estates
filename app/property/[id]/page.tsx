"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyOverview } from "@/components/property-overview"
import { PropertyMap } from "@/components/property-map"
import { InquiryForm } from "@/components/inquiry-form"
import { RelatedProperties } from "@/components/related-properties"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Heart, ArrowLeft, Phone, Mail, MessageCircle } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"

// Mock property data - in real app this would come from API
const propertyData = {
  1: {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    beds: 4,
    baths: 3,
    sqft: "3,200 sq ft",
    yearBuilt: 2020,
    propertyType: "Villa",
    status: "For Sale",
    description:
      "This stunning modern luxury villa represents the pinnacle of contemporary design and sophisticated living. Located in the prestigious Beverly Hills area, this property offers unparalleled luxury with breathtaking views and premium finishes throughout.",
    features: [
      "Gourmet kitchen with premium appliances",
      "Master suite with walk-in closet",
      "Private swimming pool and spa",
      "3-car garage with electric charging",
      "Smart home automation system",
      "Wine cellar and entertainment room",
      "Landscaped gardens with outdoor kitchen",
      "Security system with 24/7 monitoring",
    ],
    images: [
      "/modern-luxury-villa.png",
      "/villa-interior-1.png",
      "/villa-interior-2.png",
      "/villa-pool.png",
      "/villa-kitchen.png",
      "/villa-bedroom.png",
    ],
    coordinates: { lat: 34.0736, lng: -118.4004 },
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@auraestates.com",
      image: "/team-sarah.png",
    },
  },
  2: {
    id: 2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$3,200,000",
    beds: 3,
    baths: 2,
    sqft: "2,800 sq ft",
    yearBuilt: 2019,
    propertyType: "Penthouse",
    status: "For Sale",
    description:
      "Experience luxury living at its finest in this stunning downtown penthouse. Floor-to-ceiling windows offer breathtaking city views, while premium finishes and modern amenities create the perfect urban sanctuary.",
    features: [
      "Floor-to-ceiling windows with city views",
      "Private rooftop terrace",
      "Gourmet kitchen with marble countertops",
      "Master suite with spa-like bathroom",
      "Hardwood floors throughout",
      "In-unit laundry",
      "Concierge service",
      "Fitness center and pool access",
    ],
    images: [
      "/downtown-penthouse.png",
      "/villa-interior-1.png",
      "/villa-interior-2.png",
      "/villa-pool.png",
      "/villa-kitchen.png",
      "/villa-bedroom.png",
    ],
    coordinates: { lat: 40.7589, lng: -73.9851 },
    agent: {
      name: "Michael Chen",
      phone: "(555) 234-5678",
      email: "michael@auraestates.com",
      image: "/team-michael.png",
    },
  },
  3: {
    id: 3,
    title: "Elegant Family Home",
    location: "Westchester, NY",
    price: "$1,850,000",
    beds: 5,
    baths: 4,
    sqft: "4,200 sq ft",
    yearBuilt: 2018,
    propertyType: "House",
    status: "For Sale",
    description:
      "This elegant family home combines classic charm with modern conveniences. Set on a beautifully landscaped lot, it offers spacious living areas, a gourmet kitchen, and a private backyard perfect for entertaining.",
    features: [
      "Spacious open floor plan",
      "Gourmet kitchen with island",
      "Master suite with walk-in closet",
      "Finished basement",
      "Two-car garage",
      "Landscaped backyard",
      "Hardwood floors",
      "Central air conditioning",
    ],
    images: [
      "/contemporary-apartment.png",
      "/villa-interior-1.png",
      "/villa-interior-2.png",
      "/villa-pool.png",
      "/villa-kitchen.png",
      "/villa-bedroom.png",
    ],
    coordinates: { lat: 41.122, lng: -73.7949 },
    agent: {
      name: "Emily Rodriguez",
      phone: "(555) 345-6789",
      email: "emily@auraestates.com",
      image: "/team-emily.png",
    },
  },
}

export default function PropertyDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const propertyId = Number.parseInt(params.id as string)
  const property = propertyData[propertyId as keyof typeof propertyData]
  const [isLiked, setIsLiked] = useState(false)

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Link href="/listings">
            <Button>Back to Listings</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb & Actions */}
      <section className="py-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/listings">
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Listings
                </Button>
              </Link>
              <span>/</span>
              <span>Property Details</span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsLiked(!isLiked)}>
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigator.share?.({ url: window.location.href, title: property.title })}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Gallery */}
            <PropertyGallery images={property.images} title={property.title} />

            {/* Property Overview */}
            <PropertyOverview property={property} />

            {/* Property Map */}
            <PropertyMap coordinates={property.coordinates} address={property.location} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Price & Quick Info */}
            <Card className="sticky top-28">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-black text-3xl text-primary">{property.price}</span>
                    <Badge variant="secondary">{property.status}</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-heading font-bold text-xl">{property.beds}</div>
                      <div className="text-sm text-muted-foreground">Bedrooms</div>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xl">{property.baths}</div>
                      <div className="text-sm text-muted-foreground">Bathrooms</div>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xl">{property.sqft}</div>
                      <div className="text-sm text-muted-foreground">Square Feet</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <Button className="w-full" size="lg" onClick={() => window.open(`tel:${property.agent.phone}`)}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Agent
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      size="lg"
                      onClick={() => window.open(`mailto:${property.agent.email}`)}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Agent
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Schedule Tour
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agent Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={property.agent.image || "/placeholder.svg?height=64&width=64"}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading font-bold">{property.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">Licensed Real Estate Agent</p>
                    <p className="text-sm text-muted-foreground">{property.agent.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <InquiryForm propertyTitle={property.title} />
          </div>
        </div>

        {/* Related Properties */}
        <div className="mt-16">
          <RelatedProperties currentPropertyId={property.id} />
        </div>
      </div>

      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
                <span className="font-heading font-bold text-xl">Aura Estates</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted partner in finding the perfect property. Excellence in real estate since 2010.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/listings" className="block text-muted-foreground hover:text-primary transition-colors">
                  Properties
                </Link>
                <Link href="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4">Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Buy Property</p>
                <p>Sell Property</p>
                <p>Property Management</p>
                <p>Investment Consulting</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>123 Real Estate Ave</p>
                <p>New York, NY 10001</p>
                <p>+1 (555) 123-4567</p>
                <p>info@auraestates.com</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aura Estates. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed by{" "}
              <a
                href="https://mehedipathan.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Mehedi Pathan
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
