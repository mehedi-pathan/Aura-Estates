"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square } from "lucide-react"

interface Property {
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

interface FeaturedSidebarProps {
  properties: Property[]
}

export function FeaturedSidebar({ properties }: FeaturedSidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Badge variant="secondary">Featured</Badge>
          Properties
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {properties.slice(0, 3).map((property) => (
          <div key={property.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div
              className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-3 bg-cover bg-center"
              style={{ backgroundImage: `url(${property.image})` }}
            />

            <div className="space-y-2">
              <h4 className="font-heading font-bold text-sm">{property.title}</h4>

              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {property.location}
              </p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Bed className="h-3 w-3" />
                  {property.beds}
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-3 w-3" />
                  {property.baths}
                </div>
                <div className="flex items-center gap-1">
                  <Square className="h-3 w-3" />
                  {property.sqft}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-heading font-black text-primary">{property.price}</span>
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full mt-4 bg-transparent">
          View All Featured
        </Button>
      </CardContent>
    </Card>
  )
}
