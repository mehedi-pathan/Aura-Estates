"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "2024 Luxury Real Estate Market Trends",
    excerpt:
      "Discover the latest trends shaping the luxury real estate market and what they mean for buyers and sellers.",
    category: "Market Analysis",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/blog-market-trends.png",
    featured: true,
  },
  {
    id: 2,
    title: "Investment Strategies for High-End Properties",
    excerpt: "Learn proven strategies for building wealth through luxury real estate investments in today's market.",
    category: "Investment",
    author: "David Thompson",
    date: "2024-01-12",
    readTime: "7 min read",
    image: "/blog-investment.png",
    featured: true,
  },
  {
    id: 3,
    title: "The Art of Home Staging for Luxury Properties",
    excerpt: "Professional staging tips that can significantly increase your property's appeal and market value.",
    category: "Selling Tips",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/blog-staging.png",
    featured: false,
  },
  {
    id: 4,
    title: "Beverly Hills vs Manhattan: A Buyer's Guide",
    excerpt: "Compare two of America's most prestigious real estate markets to make an informed investment decision.",
    category: "Location Guide",
    author: "Michael Chen",
    date: "2024-01-08",
    readTime: "6 min read",
    image: "/blog-location-guide.png",
    featured: false,
  },
  {
    id: 5,
    title: "Smart Home Technology in Luxury Real Estate",
    excerpt: "How cutting-edge technology is transforming luxury homes and adding value to premium properties.",
    category: "Technology",
    author: "Sarah Johnson",
    date: "2024-01-05",
    readTime: "5 min read",
    image: "/blog-smart-home.png",
    featured: false,
  },
  {
    id: 6,
    title: "Negotiating Your Dream Home Purchase",
    excerpt: "Expert negotiation strategies to help you secure the best deal on your luxury property purchase.",
    category: "Buying Tips",
    author: "David Thompson",
    date: "2024-01-03",
    readTime: "8 min read",
    image: "/blog-negotiation.png",
    featured: false,
  },
]

const categories = [
  "All",
  "Market Analysis",
  "Investment",
  "Selling Tips",
  "Buying Tips",
  "Location Guide",
  "Technology",
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime()
      return 0
    })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              Real Estate Insights
            </Badge>
            <h1 className="font-heading font-black text-4xl md:text-5xl">Latest Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with expert insights, market trends, and valuable tips from our real estate professionals
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Badge variant="secondary">Featured</Badge>
              <h2 className="font-heading font-bold text-2xl">Featured Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl">All Articles</h2>
            <span className="text-sm text-muted-foreground">{filteredPosts.length} articles found</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="mt-4 bg-transparent"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
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
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="font-heading font-black text-3xl md:text-4xl">Stay Updated</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter and never miss the latest real estate insights and market updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-primary-foreground text-primary placeholder:text-primary/60"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
