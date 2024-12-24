"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Code, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8" />
              <span className="font-bold text-xl">AaierIt</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground/80 hover:text-foreground">Services</Link>
            <Link href="/portfolio" className="text-foreground/80 hover:text-foreground">Portfolio</Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground">About</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link>
            <Link href="/get-started">
              <Button 
                variant="outline" 
                className="mt-1 hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-200 ease-in-out"
              >
                <motion.div 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b">
          <Link href="/services" className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/portfolio" className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/get-started">
            <Button 
              variant="outline" 
              className="w-full mt-4 hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              <motion.div 
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Button>
          </Link>
        </div>
      </motion.div>
    </nav>
  )
}