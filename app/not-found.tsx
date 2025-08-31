"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
      <div className="container mx-auto mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* Animated 404 */}
            <motion.h1
              className="text-8xl md:text-9xl font-bold text-purple-600 dark:text-purple-400 mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              404
            </motion.h1>

            {/* Building illustration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <svg
                className="w-32 h-32 mx-auto text-purple-600 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <motion.rect
                  x="10"
                  y="40"
                  width="15"
                  height="50"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect
                  x="30"
                  y="25"
                  width="18"
                  height="65"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect
                  x="52"
                  y="35"
                  width="16"
                  height="55"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect
                  x="72"
                  y="20"
                  width="18"
                  height="70"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  style={{ transformOrigin: "bottom" }}
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Property Not Found</h2>
            <p className="text-lg text-muted-foreground mb-2">
              The property you're looking for seems to have moved to a different neighborhood.
            </p>
            <p className="text-muted-foreground">
              Don't worry, we have plenty of other amazing properties waiting for you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/listings" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Browse Properties
              </Link>
            </Button>

            <Button asChild variant="ghost" size="lg">
              <Link href="javascript:history.back()" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Link>
            </Button>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-purple-300 rounded-full opacity-20"
            animate={{
              y: [0, -30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-3 h-3 bg-purple-500 rounded-full opacity-20"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  )
}
