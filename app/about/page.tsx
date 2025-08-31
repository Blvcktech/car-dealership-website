"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Users, 
  Award, 
  Shield, 
  Heart, 
  Star, 
  CheckCircle,
  ThumbsUp,
  Target,
  Zap
} from "lucide-react";

export default function About() {
  const stats = [
    { icon: Car, value: "500+", label: "Vehicles in Stock" },
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Award, value: "25+", label: "Years of Experience" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring their satisfaction is our top priority."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Honest pricing, clear communication, and complete transparency in all our dealings."
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Every vehicle undergoes rigorous inspection to meet our high quality standards."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing new technologies and methods to provide the best car buying experience."
    }
  ];

  const team = [
    {
      name: "Michael Topher",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "25+ years in automotive industry, passionate about customer satisfaction"
    },
    {
      name: "Sarah Johnson",
      position: "Sales Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Expert in customer relations and vehicle financing solutions"
    },
    {
      name: "David Chen",
      position: "Service Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Certified mechanic with 15+ years of automotive expertise"
    },
    {
      name: "Emily Rodriguez",
      position: "Finance Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Helping customers find the best financing options for their needs"
    }
  ];

  const achievements = [
    {
      year: "1999",
      title: "Company Founded",
      description: "Started with a small lot and big dreams in New York"
    },
    {
      year: "2005",
      title: "First Award",
      description: "Recognized as 'Best Customer Service' by Auto Dealer Association"
    },
    {
      year: "2012",
      title: "Expansion",
      description: "Opened second location and launched online inventory"
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Launched comprehensive online car buying platform"
    },
    {
      year: "2023",
      title: "Industry Leader",
      description: "Named 'Dealership of the Year' by Automotive News"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            About Topher Cars
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            For over 25 years, we&apos;ve been helping families find their perfect vehicles with honesty, integrity, and exceptional service.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1999 by Michael Topher, Topher Cars began as a small family-owned dealership with a simple mission: to make car buying honest, transparent, and enjoyable.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a single lot with 20 vehicles has grown into one of New York&apos;s most trusted automotive retailers, serving over 10,000 satisfied customers.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we continue to innovate while staying true to our founding principles of integrity, quality, and customer-first service.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                BBB Accredited
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                A+ Rating
              </Badge>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1563720223186-11003d516935?w=600&h=400&fit=crop" 
              alt="Topher Cars Dealership" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-gray-900">Since 1999</p>
              <p className="text-xs text-gray-600">Trusted by thousands</p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and have been the foundation of our success for over two decades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are here to help you find the perfect vehicle and provide exceptional service throughout your car buying journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 mb-2">{member.position}</p>
                  <p className="text-xs text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry recognition, here&apos;s how we&apos;ve grown over the years.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Badge variant="outline" className="mr-2">{achievement.year}</Badge>
                        </div>
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have found their dream vehicle with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/shop" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Browse Inventory
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}