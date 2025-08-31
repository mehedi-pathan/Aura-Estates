"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, DollarSign, Home, Bed, Bath, Filter } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function PropertySearch() {
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [isAdvanced, setIsAdvanced] = useState(false)
  const router = useRouter()

  const isSearchEnabled = location.trim() !== "" && priceRange !== "" && propertyType !== ""

  const handleSearch = () => {
    if (!isSearchEnabled) return

    const searchParams = new URLSearchParams({
      location,
      priceRange,
      propertyType,
      ...(bedrooms && { bedrooms }),
      ...(bathrooms && { bathrooms }),
    })

    router.push(`/listings?${searchParams.toString()}`)
  }

  const fieldClass =
    "h-12 px-4 text-sm border-2 rounded-md focus:border-primary transition-colors w-full"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="font-heading font-bold text-xl text-foreground">Find Your Perfect Property</h3>
              <p className="text-sm text-muted-foreground">Search through thousands of premium properties</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAdvanced(!isAdvanced)}
              className="flex items-center gap-2 h-12 px-4 text-sm w-full md:w-auto"
            >
              <Filter className="h-4 w-4" />
              {isAdvanced ? "Simple Search" : "Advanced Search"}
            </Button>
          </div>

          <div className="space-y-6">
            {/* Main Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Location *
                </label>
                <Input
                  placeholder="Enter city, area, or ZIP code"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-foreground">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Price Range *
                </label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500k">$0 - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                    <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                    <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                    <SelectItem value="10m+">$10M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-foreground">
                  <Home className="h-4 w-4 text-primary" />
                  Property Type *
                </label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  className="w-full h-12 px-4 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  onClick={handleSearch}
                  disabled={!isSearchEnabled}
                >
                  <Search className="h-4 w-4" />
                  Search Properties
                </Button>
              </div>
            </div>

            {/* Advanced Fields */}
            <AnimatePresence>
              {isAdvanced && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t pt-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2 text-foreground">
                        <Bed className="h-4 w-4 text-primary" />
                        Bedrooms
                      </label>
                      <Select value={bedrooms} onValueChange={setBedrooms}>
                        <SelectTrigger className={fieldClass}>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1+ Bedroom</SelectItem>
                          <SelectItem value="2">2+ Bedrooms</SelectItem>
                          <SelectItem value="3">3+ Bedrooms</SelectItem>
                          <SelectItem value="4">4+ Bedrooms</SelectItem>
                          <SelectItem value="5">5+ Bedrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2 text-foreground">
                        <Bath className="h-4 w-4 text-primary" />
                        Bathrooms
                      </label>
                      <Select value={bathrooms} onValueChange={setBathrooms}>
                        <SelectTrigger className={fieldClass}>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1+ Bathroom</SelectItem>
                          <SelectItem value="2">2+ Bathrooms</SelectItem>
                          <SelectItem value="3">3+ Bathrooms</SelectItem>
                          <SelectItem value="4">4+ Bathrooms</SelectItem>
                          <SelectItem value="5">5+ Bathrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Min Square Feet</label>
                      <Input placeholder="e.g. 1500" className={fieldClass} />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Max Square Feet</label>
                      <Input placeholder="e.g. 5000" className={fieldClass} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
            <strong>Search Tips:</strong> Fields marked with * are required. Use advanced search for more specific
            results. Try searching by neighborhood names, ZIP codes, or landmark locations.
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
