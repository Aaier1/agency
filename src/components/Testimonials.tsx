import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content:
      "Working with this team transformed our online presence. Our conversion rates have increased by 150% since launching our new website.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Michael Chen",
    role: "Marketing Director",
    company: "Global Solutions",
    content:
      "The SEO strategies implemented have dramatically improved our search rankings. We're now ranking #1 for our main keywords.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Labs",
    content:
      "Outstanding service and attention to detail. They didn't just build a website, they built a digital experience for our customers.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Labs",
    content:
      "Outstanding service and attention to detail. They didn't just build a website, they built a digital experience for our customers.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Labs",
    content:
      "Outstanding service and attention to detail. They didn't just build a website, they built a digital experience for our customers.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Labs",
    content:
      "Outstanding service and attention to detail. They didn't just build a website, they built a digital experience for our customers.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Labs",
    content:
      "Outstanding service and attention to detail. They didn't just build a website, they built a digital experience for our customers.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Labs",
    content:
      "Outstanding service and attention to detail. They didn't just build a website, they built a digital experience for our customers.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Labs",
    content:
      "Outstanding service and attention to detail. They didn't just build a website, they built a digital experience for our customers.",
    image: "/api/placeholder/100/100",
  },
 
];

// TestimonialCard component
const TestimonialCard = ({
  author,
  role,
  company,
  content,
  image,
}: {
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
}) => {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image} alt={author} fill className="object-cover" />
        </div>
        <div>
          <p className="text-muted-foreground mb-4">{content}</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from some of our
            satisfied clients.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
