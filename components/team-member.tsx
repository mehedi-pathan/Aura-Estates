"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamMemberProps {
  member: {
    id: number
    name: string
    role: string
    bio: string
    image: string
    specialties: string[]
  }
  index: number
}

export function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6 text-center">
          <div className="relative mb-4">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
          </div>

          <h3 className="font-heading font-bold text-lg mb-1">{member.name}</h3>
          <p className="text-primary font-medium mb-3">{member.role}</p>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

          <div className="flex flex-wrap gap-1 justify-center">
            {member.specialties.map((specialty, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
