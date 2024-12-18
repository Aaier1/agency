"use client"
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/section-header'
import { Card } from '@/components/ui/card'
import { Users, Target, Award, Heart } from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import SEOFaqSystem from '@/components/Faqs'
import Image from 'next/image'

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Client-Focused",
    description: "We put our clients first, ensuring their success is our top priority."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Results-Driven",
    description: "We focus on delivering measurable results that impact your business."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description: "We're passionate about technology and helping businesses grow."
  }
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About Us"
          subtitle="Learn about our mission and values"
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2020, AaierIt has been at the forefront of digital innovation, helping businesses transform their online presence and achieve sustainable growth.
            </p>
            <p className="text-muted-foreground">
              Our team of experts combines technical expertise with creative thinking to deliver solutions that drive results. We believe in building long-term partnerships with our clients and becoming an integral part of their success story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
              width={800}
              height={450} // Adjusted height for aspect ratio
              layout="responsive" // Makes image responsive
            />
          </motion.div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* SEO FAQ System Section */}
      <SEOFaqSystem />
    </div>
  )
}

function ValueCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 text-center">
        <div className="mb-4 text-primary flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  )
}
