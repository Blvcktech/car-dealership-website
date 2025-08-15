"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  Car,
  Users,
  Award,
  Shield
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@tophercars.com",
      description: "We'll respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Auto Drive, New York, NY 10001",
      description: "Free parking available"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-8PM, Sat: 10AM-6PM",
      description: "Sunday: By appointment only"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const features = [
    {
      icon: Car,
      title: "Wide Selection",
      description: "Over 500+ vehicles in stock"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified automotive professionals"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing guaranteed"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "Comprehensive vehicle protection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to find your perfect car? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <info.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{info.title}</h3>
                        <p className="text-sm font-medium text-gray-900">{info.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Chat
                </Button>
                <Button className="w-full" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Schedule Test Drive
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="sm" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Topher Cars?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best car buying experience with exceptional service and quality vehicles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Find Our Dealership</CardTitle>
              <CardDescription>
                Visit us at our convenient location with free parking and easy access.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}