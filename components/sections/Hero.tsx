"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Car, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Star,
  TrendingUp,
  Heart
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      icon: Car,
      value: "500+",
      label: "Premium Vehicles",
      description: "Carefully selected for quality"
    },
    {
      icon: Award,
      value: "25+",
      label: "Years Experience",
      description: "Industry expertise you can trust"
    },
    {
      icon: Users,
      value: "10k+",
      label: "Happy Customers",
      description: "Satisfied families served"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Expert Support",
      description: "Always here when you need us"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 clean-container h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full shadow-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Premium Selection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground"
            >
              Discover Your
              <span className="block clean-text-gradient">
                Dream Car
              </span>
              <span className="text-muted-foreground text-4xl md:text-5xl lg:text-6xl font-light">
                Today
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              Explore our curated collection of premium vehicles. From elegant sedans to versatile SUVs, 
              find the perfect car that matches your lifestyle and aspirations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild size="lg" className="clean-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 group">
                <Link href="/shop" className="flex items-center">
                  Browse Inventory
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="clean-button border-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg rounded-xl transition-all duration-300 group">
                <Link href="/contact" className="flex items-center">
                  Schedule Test Drive
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                <span>Certified Vehicles</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                <span>Free Test Drive</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary mr-2">✓</span>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Search Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="clean-card p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Match</h3>
              <p className="text-muted-foreground text-sm">Quick and easy car search</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-foreground text-sm font-medium mb-2">Brand</label>
                <select className="clean-input">
                  <option value="">Select Brand</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                  <option value="tesla">Tesla</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2">Price Range</label>
                  <select className="clean-input">
                    <option value="">Select Price</option>
                    <option value="0-20000">$0 - $20,000</option>
                    <option value="20000-40000">$20,000 - $40,000</option>
                    <option value="40000-60000">$40,000 - $60,000</option>
                    <option value="60000+">$60,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2">Year</label>
                  <select className="clean-input">
                    <option value="">Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-foreground text-sm font-medium mb-2">Body Type</label>
                <select className="clean-input">
                  <option value="">Select Body Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="coupe">Coupe</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>
              
              <Button className="clean-button w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Search Cars
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Popular Searches:</span>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs cursor-pointer hover:bg-accent/80 transition-colors">BMW X5</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs cursor-pointer hover:bg-accent/80 transition-colors">Tesla Model 3</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs cursor-pointer hover:bg-accent/80 transition-colors">Toyota Camry</span>
                </div>
              </div>
                </div>
          </motion.div>
        </div>

     
   
      </div>
    </section>
  );
}