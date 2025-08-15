"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Heart, Home, Info, Mail, Phone, Search, Menu, X, User, ShoppingCart } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Inventory", icon: Car },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest > 100);
  });

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@cardeal.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">🚚 Free Delivery Available</span>
              <span>|</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
        variants={{
          visible: { height: 80, paddingTop: 16, paddingBottom: 16 },
          hidden: { height: 60, paddingTop: 8, paddingBottom: 8 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🚗</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">CarDeal</div>
              <div className="text-xs text-blue-600 font-medium">Premium Dealership</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex"
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* CTA Button */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex">
              Get Quote
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Search cars, brands, models..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              <hr className="my-4" />
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>info@cardeal.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}