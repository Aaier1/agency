"use client";

import { motion } from "framer-motion";


interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  image?: string;
  icon?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-16 flex items-center justify-center mb-12 relative ${centered ? "text-center" : ""} border-b py-12 border-gray-200`}
    >
      <div className=" mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="text-2xl text-muted-foreground max-w-6xl mx-auto mb-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-xl text-muted-foreground max-w-6xl mx-auto">
            {description}
          </p>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-200 opacity-50" />
    </motion.div>
  );
}
