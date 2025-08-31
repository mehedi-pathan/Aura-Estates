"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

interface BlogCardProps {
  post: {
    id: number
    title: string
    excerpt: string
    category: string
    author: string
    date: string
    readTime: string
    image: string
    featured?: boolean
  }
  index: number
  featured?: boolean
}

export function BlogCard({ post, index, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={featured ? "lg:col-span-1" : ""}
    >
      <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
        <div className="relative">
          <div
            className={`${featured ? "aspect-video" : "aspect-[4/3]"} bg-gradient-to-br from-primary/20 to-primary/5 bg-cover bg-center`}
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{post.category}</Badge>
          </div>

          {featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className={`font-heading font-bold ${featured ? "text-xl" : "text-lg"} mb-2 line-clamp-2`}>
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </div>

            <Button variant="outline" className="w-full group bg-transparent">
              Read More
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
