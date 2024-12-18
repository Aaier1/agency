"use client"

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/section-header'
import { Card } from '@/components/ui/card'
import { Code, Search, BarChart, Smartphone, Globe, LineChart } from 'lucide-react'

const services = [
  {
    icon: <Code />,
    title: "Web Development",
    description: "Custom-built websites and web applications using cutting-edge technologies.",
    features: ["Responsive Design", "Performance Optimization", "Custom Functionality", "CMS Integration"]
  },
  {
    icon: <Search />,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies to improve your search engine rankings.",
    features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"]
  },
  {
    icon: <BarChart />,
    title: "Digital Marketing",
    description: "Result-driven digital marketing campaigns to grow your business.",
    features: ["Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics"]
  },
  {
    icon: <Smartphone />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"]
  },
  {
    icon: <Globe />,
    title: "E-commerce Solutions",
    description: "Complete e-commerce websites with secure payment integration.",
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Processing"]
  },
  {
    icon: <LineChart />,
    title: "Analytics & Reporting",
    description: "Detailed analytics and reporting to track your online performance.",
    features: ["Traffic Analysis", "Conversion Tracking", "User Behavior", "ROI Reporting"]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive digital solutions to help your business grow"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description, features }: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="p-6 h-full flex flex-col">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground">• {feature}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}