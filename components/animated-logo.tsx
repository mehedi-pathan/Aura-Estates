"use client"

import { motion } from "framer-motion"

export function AnimatedLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className={className}
    >
      <svg viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#6B46C1" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B46C1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main building structure */}
        <motion.rect
          x="10"
          y="25"
          width="20"
          height="25"
          rx="2"
          fill="url(#logoGradient)"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Second building */}
        <motion.rect
          x="32"
          y="20"
          width="16"
          height="30"
          rx="2"
          fill="url(#logoGradient)"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Third building */}
        <motion.rect
          x="50"
          y="15"
          width="12"
          height="35"
          rx="2"
          fill="url(#logoGradient)"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Animated aura/glow effect */}
        <motion.circle
          cx="36"
          cy="10"
          r="8"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1"
          opacity="0.6"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.6] }}
          transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        />

        {/* Inner aura ring */}
        <motion.circle
          cx="36"
          cy="10"
          r="4"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="0.5"
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8] }}
          transition={{ duration: 1.5, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        />

        {/* Windows animation */}
        <motion.rect
          x="14"
          y="30"
          width="3"
          height="3"
          rx="0.5"
          fill="#ffffff"
          opacity="0.9"
          animate={{ opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
        <motion.rect
          x="20"
          y="30"
          width="3"
          height="3"
          rx="0.5"
          fill="#ffffff"
          opacity="0.9"
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2.5 }}
        />
        <motion.rect
          x="36"
          y="25"
          width="3"
          height="3"
          rx="0.5"
          fill="#ffffff"
          opacity="0.9"
          animate={{ opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        />

        <motion.text
          x="75"
          y="28"
          className="font-heading font-black text-4xl"
          fill="url(#textGradient)"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          AURA
        </motion.text>
        <motion.text
          x="75"
          y="45"
          className="font-sans font-semibold text-xl tracking-wider"
          fill="url(#textGradient)"
          opacity="0.8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          ESTATES
        </motion.text>

        {/* Subtle underline animation */}
        <motion.line
          x1="75"
          y1="48"
          x2="145"
          y2="48"
          stroke="url(#textGradient)"
          strokeWidth="1"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />
      </svg>
    </motion.div>
  )
}
