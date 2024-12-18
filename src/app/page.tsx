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
              Transform Your Online Presence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We create stunning websites and implement powerful SEO strategies to help your business thrive in the digital world.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="transition-transform duration-200 hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="transition-transform duration-200 hover:scale-105"
              >
                Learn More
              </Button>
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