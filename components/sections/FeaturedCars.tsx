"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import cars from "@/data/cars.json";
import { Star, Clock, MapPin, Zap, CheckCircle, Shield, Truck, ArrowRight, Calendar, Users, Award } from "lucide-react";
import { useState } from "react";

const featuredCars = cars.slice(0, 6);

export default function FeaturedCars() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (carId: string) => {
    setImageErrors(prev => ({ ...prev, [carId]: true }));
  };

  const getFallbackImage = (car: any) => {
    // Return a gradient background as fallback
    return `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
  };

  return (
    <section className="clean-section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="clean-container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
                      <div className="inline-flex items-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Featured Collection
              </Badge>
            </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Premium
            <span className="block clean-text-gradient">Vehicles</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience luxury and performance with our carefully curated selection of premium vehicles. 
            Each car is handpicked for quality, reliability, and driving excellence.
          </p>
        </motion.div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="clean-card overflow-hidden">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {imageErrors[car.id] ? (
                    // Fallback gradient background
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: getFallbackImage(car) }}
                    >
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">🚗</div>
                        <div className="text-sm font-medium">{car.name}</div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={() => handleImageError(car.id)}
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {car.year}
                    </Badge>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{car.name}</h3>
                      <p className="text-muted-foreground text-sm">{car.brand} • {car.model}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold clean-text-gradient">
                        ${car.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Starting Price</div>
                    </div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Mileage</div>
                      <div className="font-semibold text-foreground">{car.mileage.toLocaleString()} mi</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Fuel</div>
                      <div className="font-semibold text-foreground capitalize">{car.fuelType}</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Transmission</div>
                      <div className="font-semibold text-foreground capitalize">{car.transmission}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Key Features</div>
                    <div className="flex flex-wrap gap-2">
                      {car.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button className="flex-1 clean-button bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Details
                    </Button>
                    <Button variant="outline" className="clean-button px-4">
                      <Zap className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="clean-card p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">All vehicles undergo rigorous inspection</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Delivery</h3>
              <p className="text-muted-foreground">Get your car within 24 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Nationwide Service</h3>
              <p className="text-muted-foreground">Available across all locations</p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 md:p-16 text-primary-foreground shadow-2xl">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            {/* Animated Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-8 left-8 w-20 h-20 bg-white/10 rounded-full blur-xl"
            ></motion.div>

            {/* Content */}
            <div className="relative z-10">
              {/* Enhanced Icon Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                  <span className="text-4xl">🚗</span>
                </div>
              </motion.div>

              {/* Enhanced Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Ready to Find Your
                <span className="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Perfect Car?
                </span>
              </motion.h3>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Join <span className="font-semibold text-amber-300">10,000+</span> satisfied customers who found their dream vehicles with us. 
                Experience premium service, competitive pricing, and a seamless car buying journey.
              </motion.p>

              {/* Enhanced Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-primary-foreground/90 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-sm font-medium">Free Test Drive</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-primary-foreground/90 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-sm font-medium">Warranty Included</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-primary-foreground/90 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-teal-400/20 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-teal-300" />
                  </div>
                  <span className="text-sm font-medium">Free Delivery</span>
                </motion.div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="clean-button bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                  >
                    <Link href="/shop" className="flex items-center justify-center">
                      Browse All Cars
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    asChild 
                    size="lg" 
                    className="clean-button border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 group w-full sm:w-auto"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Schedule Test Drive
                      <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-white/20"
              >
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary-foreground/90">
                  <motion.div 
                    className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-4 h-4 text-amber-300 fill-current" />
                    <span className="font-medium">4.9/5 Rating</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-4 h-4 text-emerald-300" />
                    <span className="font-medium">10,000+ Happy Customers</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-4 h-4 text-teal-300" />
                    <span className="font-medium">25+ Years Experience</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}