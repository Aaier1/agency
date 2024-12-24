"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and medical records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Real Estate Website",
    description: "Property listing website with advanced search and filtering capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Google Maps API"],
    link: "#"
  },
  // More projects...
]

export default function Portfolio() {
  return (
    <div className="mb-24 pt-24 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ title, description, image, tags, link }: {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="relative w-full h-48">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <Button variant="outline" className="w-full hover:bg-gray-200" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}