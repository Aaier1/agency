'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Search, Code, BarChart } from 'lucide-react'
import { useState } from 'react'
import Portfolio from '@/components/projects'
import Faqs from '@/components/Faqs'
import Features from '@/components/Features'
import Starts from '@/components/Starts'
import Link from 'next/link'
import Image from 'next/image'

// ServiceCard component
const ServiceCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="p-6 transition-shadow duration-200" 
        style={{ 
          boxShadow: isHovered ? '0 10px 30px -15px rgba(0,0,0,0.2)' : 'none'
        }}>
        <motion.div 
          className="mb-4"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  )
}


// Main page component
export default function HomePage() {
  const heroAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Data-driven SEO strategies to improve your search rankings and drive organic traffic."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to grow your online presence and reach."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...heroAnimation}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Create Stunning Websites and Powerful SEO Strategies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Unleash the potential of your digital presence with our unique websites and data-driven SEO strategies. As a leading Web Design and application development company in Kathmandu, Nepal, we are dedicated to crafting websites that drive business success.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/get-started">
                <Button 
                  size="lg"
                  variant="outline"
                  className="transition-transform duration-200 hover:scale-105 hover:bg-orange-500 text-black font-bold border-2 border-orange-500"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="transition-transform duration-200 hover:scale-105 hover:bg-purple-600 text-black font-bold border-2 border-purple-600"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
           <Link href="/services"> <Button
              variant="outline"
              size="lg"
              className="transition-transform duration-200 hover:scale-105 hover:bg-gray-200"
            >
              View All Services
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Helping Businesses in All Domains Section */}
       <section className="py-16  bg-white rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Helping Businesses in All Domains</h2>
          <p className="text-xl text-gray-600  mx-auto mb-8">
            To understand what we can do for you, start by understanding what we’ve done for others. We are proud of the strong working relationships we’ve built with all our clients over the years. These names are a testament to our proven capabilities and strategic approach.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-green-500 text-black font-bold border-2 border-green-500"
            >
              Tour and Travels
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-yellow-500 text-black font-bold border-2 border-yellow-500"
            >
              Education Service
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-red-500 text-black font-bold border-2 border-red-500"
            >
              NGO / INGO
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-blue-400 text-black font-bold border-2 border-blue-400"
            >
              Health Service
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-orange-500 text-black font-bold border-2 border-orange-500"
            >
              Enterprise Service
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-purple-500 text-black font-bold border-2 border-purple-500"
            >
              Restaurant Service
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-pink-500 text-black font-bold border-2 border-pink-500"
            >
              Government
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-blue-500 text-black font-bold border-2 border-blue-500"
            >
              Business Consultant
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-brown-500 text-black font-bold border-2 border-brown-500"
            >
              Banking Service
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-gray-500 text-black font-bold border-2 border-gray-500"
            >
              Event & Ticket
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:bg-cyan-500 text-black font-bold border-2 border-cyan-500"
            >
              Ecommerce Development
            </Button>
          </div>
        </div>
      </section>
      
{/* Tools & Technology */}
      <section>
        <h4 className='text-center text-4xl py-4'>Tools & Technology</h4>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/android-icon.png" alt="Android Icon" className="h-8 w-8" />
          <Image src="/html-icon.png" alt="HTML Icon" className="h-8 w-8" />
          <Image src="/css-icon.png" alt="CSS Icon" className="h-8 w-8" />
          <Image src="/sass-icon.png" alt="Sass Icon" className="h-8 w-8" />
          <Image src="/jquery-icon.png" alt="jQuery Icon" className="h-8 w-8" />
          <Image src="/vue-icon.png" alt="Vue Icon" className="h-8 w-8" />
          <Image src="/react-icon.png" alt="React Icon" className="h-8 w-8" />
          <Image src="/php-icon.png" alt="PHP Icon" className="h-8 w-8" />
          <Image src="/laravel-icon.png" alt="Laravel Icon" className="h-8 w-8" />
          <Image src="/wordpress-icon.png" alt="WordPress Icon" className="h-8 w-8" />
          <Image src="/mysql-icon.png" alt="MySQL Icon" className="h-8 w-8" />
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Related Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent work and see how we&apos;ve helped businesses achieve their digital goals.
            </p>
          </div>
          <Portfolio/>
          <div className="text-center mt-12">
           <Link href="/portfolio"> <Button
              variant="outline"
              size="lg"
              className="transition-transform duration-200 hover:scale-105 hover:bg-gray-200"
            >
              View All Projects
            </Button>
            </Link>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <Starts/>

      {/* Features Section */}
      <Features/>

    

      {/* FAQ Section */}
      <Faqs/>


    </div>
  )
}