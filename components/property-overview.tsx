"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Home, Ruler, CheckCircle } from "lucide-react"

interface PropertyOverviewProps {
  property: {
    title: string
    description: string
    propertyType: string
    yearBuilt: number
    features: string[]
  }
}

export function PropertyOverview({ property }: PropertyOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle>Property Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{property.description}</p>
        </CardContent>
      </Card>

      {/* Property Details */}
      <Card>
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Home className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Property Type</div>
                <div className="text-sm text-muted-foreground">{property.propertyType}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Year Built</div>
                <div className="text-sm text-muted-foreground">{property.yearBuilt}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Ruler className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Lot Size</div>
                <div className="text-sm text-muted-foreground">0.5 acres</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features & Amenities */}
      <Card>
        <CardHeader>
          <CardTitle>Features & Amenities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {property.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
