import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./commons/Header"
import Footer from "./commons/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ramestta Staking Validation",
  description: "Ramestta Staking Validation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
