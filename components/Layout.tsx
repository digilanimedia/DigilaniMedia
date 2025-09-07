"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black border-b border-neutral-800">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-2xl font-bold text-[#e49400] hover:opacity-80">
            Digilani Media
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#videos" className="hover:text-[#e49400] transition-colors">
              Videos
            </Link>
            <Link href="#blog" className="hover:text-[#e49400] transition-colors">
              Blog
            </Link>
            <Link href="#about" className="hover:text-[#e49400] transition-colors">
              About
            </Link>
            <Link href="#newsletter" className="hover:text-[#e49400] transition-colors">
              Newsletter
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="bg-neutral-900 py-8 mt-12 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Digilani Media. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/@DigilaniMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e49400] transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e49400] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e49400] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e49400] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
