import React from 'react';
import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Modern Technology Stack',
    description:
      'Built with the latest technologies including React, Next.js, and TypeScript for optimal performance.',
  },
  {
    title: 'Responsive Design',
    description:
      'Fully responsive websites that look great on all devices, from mobile to desktop.',
  },
  {
    title: 'SEO Optimized',
    description:
      'Built-in SEO best practices to help your website rank higher in search results.',
  },
  {
    title: 'Performance Focused',
    description:
      'Lightning-fast load times and optimized performance for the best user experience.',
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with creative excellence to deliver
            outstanding results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map(({ title, description }, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
