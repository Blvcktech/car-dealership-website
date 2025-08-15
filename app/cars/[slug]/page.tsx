"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Image from "next/image";
import CarCard from "@/components/sections/CarCard";
import carsData from "@/data/cars.json";
import { formatPrice, formatMileage } from "@/lib/utils";
import { notFound } from "next/navigation";

export default function CarDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const id = slug.split('-').pop();
  const car = carsData.find((c) => c.id === id);
  if (!car) notFound();

  const [currentImage, setCurrentImage] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Test drive booked!");
    setName(""); setEmail(""); setMessage("");
  };

  const relatedCars = carsData.filter((c) => c.id !== car.id && c.tags.some((tag) => car.tags.includes(tag))).slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image src={car.images[currentImage]} alt={car.name} width={800} height={600} className="object-cover rounded-lg" />
              <div className="flex gap-2 mt-4">
                {car.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${car.name} thumbnail`}
                    width={100}
                    height={75}
                    className={`object-cover rounded cursor-pointer ${currentImage === index ? 'border-2 border-primary' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
              <p className="text-2xl font-semibold mb-4">{formatPrice(car.price)}</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Spec</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Year</TableCell><TableCell>{car.year}</TableCell></TableRow>
                  <TableRow><TableCell>Mileage</TableCell><TableCell>{formatMileage(car.mileage)}</TableCell></TableRow>
                  <TableRow><TableCell>Fuel Type</TableCell><TableCell>{car.fuelType}</TableCell></TableRow>
                  <TableRow><TableCell>Transmission</TableCell><TableCell>{car.transmission}</TableCell></TableRow>
                </TableBody>
              </Table>
              <div className="mt-4">
                <h3 className="font-bold mb-2">Features</h3>
                <ul className="list-disc pl-5">
                  {car.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview"><p>{car.description}</p></TabsContent>
            <TabsContent value="specs">Detailed specs here.</TabsContent>
            <TabsContent value="finance">Finance options here.</TabsContent>
            <TabsContent value="reviews">Customer reviews here.</TabsContent>
          </Tabs>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Book a Test Drive</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>

          <h2 className="text-2xl font-bold mb-4">Related Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedCars.map((related) => (
              <CarCard key={related.id} car={related} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}