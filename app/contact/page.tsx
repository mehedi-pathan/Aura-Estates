"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["123 Luxury Avenue", "Beverly Hills, CA 90210"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["Main: (555) 123-4567", "Emergency: (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@auraestates.com", "support@auraestates.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat - Sun: 10:00 AM - 5:00 PM"],
  },
]

const officeLocations = [
  {
    name: "Beverly Hills Office",
    address: "123 Luxury Avenue, Beverly Hills, CA 90210",
    phone: "(555) 123-4567",
    manager: "Sarah Johnson",
  },
  {
    name: "Manhattan Office",
    address: "456 Park Avenue, New York, NY 10022",
    phone: "(555) 234-5678",
    manager: "Michael Chen",
  },
  {
    name: "Miami Beach Office",
    address: "789 Ocean Drive, Miami Beach, FL 33139",
    phone: "(555) 345-6789",
    manager: "Emily Rodriguez",
  },
]

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/15551234567", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="font-heading font-black text-4xl md:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your real estate journey? Our expert team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <info.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-bold mb-3">{info.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {info.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading font-black text-3xl mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Map and Office Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-black text-3xl mb-4">Visit Our Offices</h2>
                <p className="text-muted-foreground mb-6">
                  We have multiple locations to serve you better. Visit us at any of our offices.
                </p>

                {/* Map Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mb-6">
                  <div className="text-center space-y-2">
                    <MapPin className="h-8 w-8 text-primary mx-auto" />
                    <p className="text-sm text-muted-foreground">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Beverly Hills Office Location</p>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="space-y-4">
                  {officeLocations.map((office, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h4 className="font-heading font-bold mb-2">{office.name}</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {office.address}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {office.phone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            Manager: {office.manager}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h2 className="font-heading font-black text-3xl mb-4">Need Immediate Assistance?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the best way to reach us based on your preference and urgency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold mb-2">Call Now</h3>
                  <p className="text-sm text-muted-foreground mb-4">Speak directly with our experts</p>
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-4567
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">Quick chat for instant responses</p>
                  <Button onClick={handleWhatsAppClick} variant="outline" className="w-full bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">Detailed inquiries and documents</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Follow */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="font-heading font-black text-3xl md:text-4xl">Stay Connected</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Follow us on social media for the latest property updates, market insights, and company news.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="icon" className="rounded-full">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}
