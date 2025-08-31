// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Phone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { AnimatedLogo } from "@/components/animated-logo"
// import { ThemeToggle } from "@/components/theme-toggle"

// const navItems = [
//   { href: "/", label: "Home" },
//   { href: "/listings", label: "Properties" },
//   { href: "/about", label: "About" },
//   { href: "/services", label: "Services" },
//   { href: "/blog", label: "Blog" },
//   { href: "/contact", label: "Contact" },
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <motion.nav className="fixed top-0 left-0 right-0 z-50">
//       {/* Top Purple Bar */}
//       <AnimatePresence>
//         {!scrolled && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="bg-purple-600 dark:bg-purple-700 text-white overflow-hidden"
//           >
//             <div className="max-w-[93rem] mx-auto px-4 sm:px-6 lg:px-8 py-2">
//               <div className="flex items-center justify-between text-sm">
//                 <div className="flex items-center space-x-2">
//                   <Phone size={16} />
//                   <span className="font-medium">Call Now: +1 (555) 123-4567</span>
//                 </div>
//                 <div className="hidden sm:flex items-center space-x-4">
//                   <span>24/7 Customer Support</span>
//                   <span>•</span>
//                   <span>Free Property Consultation</span>
//                 </div>
//                 <Button
//                   size="sm"
//                   variant="secondary"
//                   className="bg-white text-purple-600 hover:bg-gray-100 font-medium"
//                   asChild
//                 >
//                   <Link href="tel:+15551234567">Call Now</Link>
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main Navbar */}
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
//           scrolled ? "shadow-lg" : ""
//         }`}
//       >
//         <div className="max-w-[93rem] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <Link href="/" className="flex items-center space-x-2">
//               <AnimatedLogo />
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`relative px-3 py-2 text-sm font-medium transition-colors ${
//                     pathname === item.href
//                       ? "text-purple-600 dark:text-purple-400"
//                       : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
//                   }`}
//                 >
//                   {item.label}
//                   {pathname === item.href && (
//                     <motion.div
//                       layoutId="activeTab"
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
//                     />
//                   )}
//                 </Link>
//               ))}
//               <ThemeToggle />
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center space-x-2">
//               <ThemeToggle />
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-gray-700 dark:text-gray-300"
//               >
//                 {isOpen ? <X size={20} /> : <Menu size={20} />}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
//             >
//               <div className="px-4 py-2 space-y-1">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
//                       pathname === item.href
//                         ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
//                         : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//                 <Button size="sm" className="w-full mt-2 bg-purple-600 hover:bg-purple-700" asChild>
//                   <Link href="tel:+15551234567">
//                     <Phone size={16} className="mr-2" />
//                     Call Now: +1 (555) 123-4567
//                   </Link>
//                 </Button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </motion.nav>
//   )
// }




"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef(null)

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      if (isOpen) setIsOpen(false) // Close menu on scroll
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Purple Bar */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-purple-600 dark:bg-purple-700 text-white overflow-hidden"
          >
            <div className="max-w-[93rem] mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span className="font-medium">Call Now: +1 (555) 123-4567</span>
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                  <span>24/7 Customer Support</span>
                  <span>•</span>
                  <span>Free Property Consultation</span>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-medium"
                  asChild
                >
                  <Link href="tel:+15551234567">Call Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-[93rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <AnimatedLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
                    />
                  )}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      pathname === item.href
                        ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button size="sm" className="w-full mt-2 bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="tel:+15551234567">
                    <Phone size={16} className="mr-2" />
                    Call Now: +1 (555) 123-4567
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  )
}
