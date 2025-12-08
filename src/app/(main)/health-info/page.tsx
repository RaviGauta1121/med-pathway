"use client";

import { Book, Heart, Activity, Pill, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HealthInfoPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      icon: Heart,
      title: "Diseases & Conditions",
      description: "Comprehensive information about various diseases",
      href: "/health-info/diseases",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Activity,
      title: "Treatments & Procedures",
      description: "Learn about medical treatments and procedures",
      href: "/health-info/treatments",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Pill,
      title: "Medications Guide",
      description: "Information about common medications",
      href: "/health-info/medications",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Book,
      title: "Health Articles",
      description: "Expert articles on health and wellness",
      href: "/health-info/articles",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "10 Tips for a Healthy Heart",
      category: "Cardiology",
      readTime: "5 min read",
      date: "Dec 5, 2025",
    },
    {
      id: 2,
      title: "Understanding Diabetes Management",
      category: "Endocrinology",
      readTime: "7 min read",
      date: "Dec 3, 2025",
    },
    {
      id: 3,
      title: "Mental Health: Breaking the Stigma",
      category: "Psychology",
      readTime: "6 min read",
      date: "Dec 1, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Information Center
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your trusted source for medical information and health resources
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search health topics, diseases, treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className={`${category.color} p-4 rounded-lg w-fit mb-4`}>
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>

        {/* Latest Articles */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{article.date}</p>
                <Link
                  href={`/health-info/articles/${article.id}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
