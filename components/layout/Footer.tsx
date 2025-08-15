import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Shield,
  Truck,
  CreditCard,
  Star,
  ArrowRight,
  Car,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🚗</span>
              </div>
              <div>
                <div className="text-xl font-bold">CarDeal</div>
                <div className="text-sm text-gray-400">Premium Dealership</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect vehicle. We offer premium cars, 
              exceptional service, and a seamless car buying experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/shop" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Browse Inventory
              </Link>
              <Link href="/about" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                About Us
              </Link>
              <Link href="/contact" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Contact Us
              </Link>
              <Link href="/saved" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Saved Cars
              </Link>
              <Link href="/financing" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Financing Options
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Car className="w-4 h-4 mr-2 text-blue-400" />
                Car Sales
              </div>
              <div className="flex items-center text-gray-300">
                <Truck className="w-4 h-4 mr-2 text-blue-400" />
                Free Delivery
              </div>
              <div className="flex items-center text-gray-300">
                <CreditCard className="w-4 h-4 mr-2 text-blue-400" />
                Financing
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                Extended Warranty
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-4 h-4 mr-2 text-blue-400" />
                Test Drives
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">123 Auto Street</p>
                  <p className="text-gray-300">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">info@cardeal.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">Mon-Fri: 9AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-1">15+ Years</h4>
              <p className="text-sm text-gray-400">Industry Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-1">10,000+</h4>
              <p className="text-sm text-gray-400">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-1">500+ Cars</h4>
              <p className="text-sm text-gray-400">Premium Inventory</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-1">100%</h4>
              <p className="text-sm text-gray-400">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new arrivals, special offers, and automotive news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CarDeal. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}