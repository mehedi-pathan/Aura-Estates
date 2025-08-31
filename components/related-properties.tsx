"use client"

import { PropertyCard } from "@/components/property-card"

interface RelatedPropertiesProps {
  currentPropertyId: number
}

const relatedProperties = [
  {
    id: 2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$4.2M",
    beds: 3,
    baths: 2,
    sqft: "2,800 sq ft",
    image: "/downtown-penthouse.png",
    featured: true,
  },
  {
    id: 3,
    title: "Waterfront Estate",
    location: "Miami Beach, FL",
    price: "$6.8M",
    beds: 5,
    baths: 4,
    sqft: "4,500 sq ft",
    image: "/waterfront-estate.png",
    featured: true,
  },
  {
    id: 4,
    title: "Contemporary Apartment",
    location: "San Francisco, CA",
    price: "$1.8M",
    beds: 2,
    baths: 2,
    sqft: "1,400 sq ft",
    image: "/contemporary-apartment.png",
    featured: false,
  },
]

export function RelatedProperties({ currentPropertyId }: RelatedPropertiesProps) {
  const filteredProperties = relatedProperties.filter((p) => p.id !== currentPropertyId)

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-heading font-black text-3xl">Similar Properties</h2>
        <p className="text-muted-foreground">Discover other properties you might be interested in</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredProperties.slice(0, 3).map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  )
}
