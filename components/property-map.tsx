"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface PropertyMapProps {
  coordinates: { lat: number; lng: number }
  address: string
}

export function PropertyMap({ coordinates, address }: PropertyMapProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">{address}</p>

          {/* Map Placeholder - In real app, would integrate with Google Maps or similar */}
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-8 w-8 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Interactive Map</p>
              <p className="text-xs text-muted-foreground">
                Lat: {coordinates.lat}, Lng: {coordinates.lng}
              </p>
            </div>
          </div>

          {/* Nearby Places */}
          <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <h4 className="font-medium mb-2">Schools</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>Beverly Hills High School - 0.5 mi</div>
                <div>Hawthorne Elementary - 0.3 mi</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Shopping</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>Rodeo Drive - 0.8 mi</div>
                <div>Beverly Center - 1.2 mi</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
