"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, CheckCircle, Award, ThumbsUp } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "CarDeal made buying my first luxury car an absolute breeze. The team was incredibly knowledgeable and helped me find the perfect BMW that fit both my lifestyle and budget. The financing options were transparent and the delivery was seamless!",
    rating: 5,
    car: "BMW X5",
    verified: true,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "I was skeptical about buying a car online, but CarDeal's virtual tour and detailed inspection reports gave me complete confidence. The Tesla Model 3 I purchased exceeded my expectations. Their customer service is unmatched!",
    rating: 5,
    car: "Tesla Model 3",
    verified: true,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "After visiting multiple dealerships, CarDeal stood out with their no-pressure approach and extensive inventory. I found my dream Mercedes-Benz and the entire process was smooth from start to finish. Highly recommend!",
    rating: 5,
    car: "Mercedes-Benz C-Class",
    verified: true,
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Real Estate Agent",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The team at CarDeal went above and beyond to help me find the right SUV for my family. Their expertise in safety features and family-friendly vehicles was invaluable. The Toyota Highlander we purchased is perfect!",
    rating: 5,
    car: "Toyota Highlander",
    verified: true,
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Healthcare Professional",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    quote: "As a busy healthcare worker, I needed a reliable car quickly. CarDeal's express delivery service was a lifesaver. My Honda Accord was delivered within 24 hours and has been running perfectly ever since!",
    rating: 5,
    car: "Honda Accord",
    verified: true,
    date: "2 months ago"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "CarDeal's premium selection and competitive pricing made my decision easy. The Audi A6 I purchased is exactly what I was looking for. Their after-sales support has been exceptional as well.",
    rating: 5,
    car: "Audi A6",
    verified: true,
    date: "1 month ago"
  }
];

const stats = [
  { number: "98%", label: "Customer Satisfaction", icon: ThumbsUp },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "500+", label: "Happy Customers", icon: Award },
  { number: "24hr", label: "Delivery Time", icon: CheckCircle }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers
            <span className="block text-blue-600">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied customers who found their perfect vehicles with us.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Quote className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.car}
                    </Badge>
                  </div>

                  {/* Date */}
                  <div className="text-xs text-gray-400 text-right">
                    {testimonial.date}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the CarDeal difference and find your perfect vehicle today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Browse Inventory
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}