"use client";

import { useWishlist } from "@/hooks/useWishlist";
import CarCard from "@/components/sections/CarCard";
import carsData from "@/data/cars.json";
import { motion } from "framer-motion";
import { Heart, Car, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Saved() {
  const { wishlist } = useWishlist();
  const savedCars = carsData.filter((car) => wishlist.includes(car.id));

  return (
    <section className="clean-section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="clean-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Saved Cars
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {savedCars.length > 0 
              ? `You have ${savedCars.length} saved vehicle${savedCars.length > 1 ? 's' : ''} in your wishlist.`
              : "Start building your dream car collection by saving vehicles you love."
            }
          </p>
        </motion.div>

        {/* Empty State */}
        {savedCars.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="w-12 h-12 text-muted-foreground" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">
              No Saved Cars Yet
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Browse our inventory and save the cars you&apos;re interested in. 
              They&apos;ll appear here for easy access later.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="clean-button bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/shop" className="flex items-center">
                  Browse Inventory
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="clean-button">
                <Link href="/" className="flex items-center">
                  Back to Home
                  <ArrowLeft className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          /* Saved Cars Grid */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <CarCard car={car} showWishlist={true} />
                </motion.div>
              ))}
            </div>
            
            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="clean-card p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to Take Action?
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Contact us to schedule test drives or get more information about your saved vehicles.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="clean-button bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact" className="flex items-center">
                      Contact Us
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="clean-button">
                    <Link href="/shop" className="flex items-center">
                      Browse More Cars
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}