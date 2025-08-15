"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice, slugify, formatMileage } from "@/lib/utils";

type Car = {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  images: string[];
  features: string[];
  tags: string[];
  description: string;
};

type CarCardProps = {
  car: Car;
  showWishlist?: boolean;
};

export default function CarCard({ car, showWishlist = false }: CarCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg">
        {showWishlist && (
          <Toggle
            className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200"
            pressed={isInWishlist(car.id)}
            onPressedChange={() => toggleWishlist(car.id)}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(car.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Toggle>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
            Available
          </span>
        </div>
        
        <div className="relative overflow-hidden">
          <Image 
            src={car.images[0]} 
            alt={car.name} 
            width={400} 
            height={300} 
            className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick Actions */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
              Quick View
            </Button>
              <Button size="sm" variant="outline" className="bg-white/90 text-gray-700 text-xs">
                Compare
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {car.year} • {car.transmission.toUpperCase()}
            </span>
            <span className="text-xs text-gray-500">{car.fuelType.toUpperCase()}</span>
          </div>
          <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {car.name}
          </CardTitle>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-blue-600">{formatPrice(car.price)}</span>
            <span className="text-sm text-gray-500">{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-4">
            {car.features.slice(0, 2).map((feature) => (
              <span key={feature} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
            {car.features.length > 2 && (
              <span className="text-xs text-gray-500">+{car.features.length - 2} more</span>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            <Link href={`/cars/${slugify(car.name)}-${car.id}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}