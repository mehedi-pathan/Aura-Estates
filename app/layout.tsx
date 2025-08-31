import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingSpinner } from "@/components/loading-spinner"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"], // Including Black weight
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Aura Estates - Luxury Real Estate Agency",
  description: "Discover premium properties with Aura Estates. Your trusted partner in luxury real estate.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${montserrat.variable} ${openSans.variable} antialiased pt-[104px]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Navigation />
          <PageTransition>
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </PageTransition>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
