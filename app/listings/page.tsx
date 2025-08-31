"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilters } from "@/components/property-filters"
import { FeaturedSidebar } from "@/components/featured-sidebar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Grid, List, SlidersHorizontal } from "lucide-react"

// Mock property data
const allProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2.5M",
    beds: 4,
    baths: 3,
    sqft: "3,200 sq ft",
    image: "/modern-luxury-villa.png",
    featured: true,
    type: "villa",
    priceValue: 2500000,
  },
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
    type: "penthouse",
    priceValue: 4200000,
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
    type: "house",
    priceValue: 6800000,
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
    type: "apartment",
    priceValue: 1800000,
  },
  {
    id: 5,
    title: "Historic Mansion",
    location: "Boston, MA",
    price: "$3.9M",
    beds: 6,
    baths: 5,
    sqft: "5,200 sq ft",
    image: "/historic-mansion.png",
    featured: false,
    type: "house",
    priceValue: 3900000,
  },
  {
    id: 6,
    title: "Luxury Condo",
    location: "Chicago, IL",
    price: "$1.2M",
    beds: 2,
    baths: 2,
    sqft: "1,600 sq ft",
    image: "/luxury-condo.png",
    featured: false,
    type: "apartment",
    priceValue: 1200000,
  },
]

export default function ListingsPage() {
  const [filteredProperties, setFilteredProperties] = useState(allProperties)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("price-high")
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (filters: any) => {
    let filtered = [...allProperties]

    // Filter by price range
    if (filters.priceRange && filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map((p: string) => {
        if (p === "5m+") return [5000000, Number.POSITIVE_INFINITY]
        return Number.parseInt(p.replace("k", "000").replace("m", "000000"))
      })

      if (filters.priceRange === "5m+") {
        filtered = filtered.filter((p) => p.priceValue >= 5000000)
      } else {
        const minPrice = min * (filters.priceRange.includes("k") ? 1000 : 1000000)
        const maxPrice = max * (filters.priceRange.includes("k") ? 1000 : 1000000)
        filtered = filtered.filter((p) => p.priceValue >= minPrice && p.priceValue <= maxPrice)
      }
    }

    // Filter by property type
    if (filters.propertyType && filters.propertyType !== "all") {
      filtered = filtered.filter((p) => p.type === filters.propertyType)
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((p) => p.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    // Sort properties
    if (sortBy === "price-high") {
      filtered.sort((a, b) => b.priceValue - a.priceValue)
    } else if (sortBy === "price-low") {
      filtered.sort((a, b) => a.priceValue - b.priceValue)
    } else if (sortBy === "newest") {
      filtered.sort((a, b) => b.id - a.id)
    }

    setFilteredProperties(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              Property Listings
            </Badge>
            <h1 className="font-heading font-black text-4xl md:text-5xl">Browse Properties</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover your perfect home from our curated collection of luxury properties
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 space-y-6">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>

              {/* Filters */}
              <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
                <PropertyFilters onFilterChange={handleFilterChange} />
              </div>

              {/* Featured Properties Sidebar */}
              <div className="hidden lg:block">
                <FeaturedSidebar properties={allProperties.filter((p) => p.featured)} />
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{filteredProperties.length} properties found</span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode */}
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Properties Grid/List */}
              <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="default" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
