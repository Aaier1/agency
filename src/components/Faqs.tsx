"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define FAQ structure
interface Faq {
  id: number;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

const SEOFaqSystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Explicitly type searchResults as an array of Faq objects
  const [searchResults, setSearchResults] = useState<Faq[]>([]);

  // Memoize FAQ data
  const faqs = useMemo(
    () => [
      {
        id: 1,
        question: "How long does website development take?",
        answer:
          "Website development typically takes 4-12 weeks depending on complexity. Simple websites: 4-6 weeks. E-commerce: 8-10 weeks. Custom platforms: 10-12 weeks. Each project includes planning, design, development, testing, and deployment phases.",
        category: "timeline",
        keywords: [
          "website timeline",
          "development time",
          "project duration",
          "how long",
          "website schedule",
        ],
      },
      {
        id: 2,
        question: "What does your web development process include?",
        answer:
          "Our web development process includes: 1) Requirements gathering & planning 2) Design & wireframing 3) Development & coding 4) Testing & QA 5) Deployment & launch 6) Post-launch support. We use agile methodology with regular client updates and feedback sessions.",
        category: "process",
        keywords: [
          "development process",
          "web methodology",
          "website steps",
          "how websites are built",
          "development phases",
        ],
      },
      {
        id: 3,
        question: "What are your website development costs?",
        answer:
          "Website development costs vary based on requirements. Basic business websites: $5,000-$10,000. E-commerce: $10,000-$25,000. Custom platforms: $25,000+. All packages include responsive design, SEO basics, and 30-day support.",
        category: "pricing",
        keywords: [
          "website cost",
          "development pricing",
          "website prices",
          "web development cost",
          "pricing packages",
        ],
      },
      {
        id: 4,
        question: "Do you provide website maintenance services?",
        answer:
          "Yes, we offer comprehensive website maintenance including: Security updates, Content updates, Performance optimization, 24/7 monitoring, Backup management, Technical support. Monthly maintenance packages start at $199/month.",
        category: "maintenance",
        keywords: [
          "website maintenance",
          "site updates",
          "website support",
          "maintenance services",
          "web upkeep",
        ],
      },
      {
        id: 5,
        question: "What technologies do you use for development?",
        answer:
          "We use modern web technologies including: Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Python, PostgreSQL. We also implement AWS/Azure cloud services, CI/CD pipelines, and industry-standard security practices.",
        category: "technical",
        keywords: [
          "web technologies",
          "development stack",
          "programming languages",
          "tech stack",
          "development tools",
        ],
      },
      {
        id: 6,
        question: "Where are you located?",
        answer:
          "We are based in Nepal, a country known for its rich culture, beautiful landscapes, and vibrant tech industry.",
        category: "all",
        keywords: [
          "location",
          "where are you based",
          "office location",
          "company location",
        ],
      },
    ],
    []
  );

  // Memoize categories
  const categories = useMemo(
    () => [
      { id: "all", label: "All Questions", color: "bg-blue-500" },
      { id: "timeline", label: "Timeline", color: "bg-green-500" },
      { id: "process", label: "Process", color: "bg-purple-500" },
      { id: "pricing", label: "Pricing", color: "bg-yellow-500" },
      { id: "technical", label: "Technical", color: "bg-red-500" },
      { id: "maintenance", label: "Maintenance", color: "bg-orange-500" },
    ],
    []
  );

  // Search functionality
  useEffect(() => {
    if (searchTerm.length >= 2) {
      const searchWords = searchTerm.toLowerCase().split(" ");

      const results = faqs.filter((faq) => {
        let score = 0;
        const matches = [];

        // Check question
        if (searchWords.some((word) => faq.question.toLowerCase().includes(word))) {
          score += 3;
          matches.push("question match");
        }

        // Check keywords
        const keywordMatches = searchWords.filter((word) =>
          faq.keywords.some((keyword) => keyword.toLowerCase().includes(word))
        );
        if (keywordMatches.length > 0) {
          score += keywordMatches.length * 2;
          matches.push(`keywords: ${keywordMatches.join(", ")}`);
        }

        // Check answer
        if (searchWords.some((word) => faq.answer.toLowerCase().includes(word))) {
          score += 1;
          matches.push("answer match");
        }

        return score > 0;
      });

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, faqs]);

  // Memoize displayed FAQs
  const displayedFaqs = useMemo(
    () =>
      searchTerm.length >= 2
        ? searchResults
        : faqs.filter((faq) => activeCategory === "all" || faq.category === activeCategory),
    [searchTerm, searchResults, faqs, activeCategory]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-8xl mx-auto px-4">
        {/* SEO Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Web Development Services FAQ</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about our web development services,
            including pricing, timeline, and process.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category.id
                    ? `${category.color} text-white`
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
        <AnimatePresence>
  {displayedFaqs.map((faq, index) => (
    <motion.div
      key={faq.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className={`transition-all hover:shadow-md
          ${expandedIndex === index ? "bg-gray-50" : "bg-white"}`}
        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">{faq.question}</h2>
            {expandedIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </div>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  ))}
</AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default SEOFaqSystem;
