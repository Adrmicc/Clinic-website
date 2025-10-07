import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Klinika Medycyny Estetycznej | Laser, Kosmetologia, Dermatologia",
  description:
    "Profesjonalna klinika medycyny estetycznej oferująca depilację laserową, kosmetologię, medycynę estetyczną i dermatologię.",
  icons: {
    icon: "/clinic-logo.jpg",
    apple: "/clinic-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
