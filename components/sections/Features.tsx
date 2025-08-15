"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Star, Truck, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All vehicles undergo rigorous inspection and come with our quality guarantee.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Clock,
    title: "Quick Delivery",
    description: "Get your car delivered within 24 hours with our express delivery service.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Experience luxury service with our dedicated customer support team.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Truck,
    title: "Free Test Drive",
    description: "Schedule a free test drive and experience the car before buying.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "Get the best financing options with competitive interest rates.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is available round the clock to assist you.",
    color: "bg-indigo-100 text-indigo-600"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            ⭐ Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide exceptional service and support to ensure your car buying experience is seamless and enjoyable.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0 h-auto font-medium">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 