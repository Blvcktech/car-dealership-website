"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import FilterSidebar from "@/components/sections/FilterSidebar";
import CarCard from "@/components/sections/CarCard";
import carsData from "@/data/cars.json";

export default function Shop() {
  const [brands, setBrands] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [transmissions, setTransmissions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Math.min(...carsData.map((c: { price: number }) => c.price)),
    Math.max(...carsData.map((c: { price: number }) => c.price)),
  ]);
  const [sort, setSort] = useState("newest");

  const filteredCars = useMemo(() => {
    const result = carsData.filter(
      (car) =>
        (brands.length === 0 || brands.includes(car.brand)) &&
        (fuelTypes.length === 0 || fuelTypes.includes(car.fuelType)) &&
        (transmissions.length === 0 || transmissions.includes(car.transmission)) &&
        car.price >= priceRange[0] &&
        car.price <= priceRange[1]
    );

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "mileage":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [brands, fuelTypes, transmissions, priceRange, sort]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            🚗 Browse Our Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Car Inventory</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium vehicles. Find the perfect car that matches your lifestyle and budget.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">All Brands</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">All Prices</option>
                <option value="0-20000">$0 - $20,000</option>
                <option value="20000-40000">$20,000 - $40,000</option>
                <option value="40000-60000">$40,000 - $60,000</option>
                <option value="60000+">$60,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
                Search Cars
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-600">
            Showing <span className="font-semibold">{filteredCars.length}</span> cars
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="mileage">Mileage: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            brands={brands}
            setBrands={setBrands}
            fuelTypes={fuelTypes}
            setFuelTypes={setFuelTypes}
            transmissions={transmissions}
            setTransmissions={setTransmissions}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredCars.map((car) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CarCard car={car} showWishlist={true} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}