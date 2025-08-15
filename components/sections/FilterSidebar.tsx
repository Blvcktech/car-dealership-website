"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import cars from "@/data/cars.json";
import { formatPrice } from "@/lib/utils";

type FilterSidebarProps = {
  brands: string[];
  setBrands: (brands: string[]) => void;
  fuelTypes: string[];
  setFuelTypes: (fuelTypes: string[]) => void;
  transmissions: string[];
  setTransmissions: (transmissions: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
};

export default function FilterSidebar({
  brands,
  setBrands,
  fuelTypes,
  setFuelTypes,
  transmissions,
  setTransmissions,
  priceRange,
  setPriceRange,
}: FilterSidebarProps) {
  const allBrands = [...new Set(cars.map((car) => car.brand))];
  const allFuelTypes = [...new Set(cars.map((car) => car.fuelType))];
  const allTransmissions = [...new Set(cars.map((car) => car.transmission))];
  const minPrice = Math.min(...cars.map((car) => car.price));
  const maxPrice = Math.max(...cars.map((car) => car.price));

  return (
    <aside className="w-64 p-4 bg-muted rounded-lg">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      <Accordion type="multiple">
        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            {allBrands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={brands.includes(brand)}
                  onCheckedChange={(checked) =>
                    setBrands(checked ? [...brands, brand] : brands.filter((b) => b !== brand))
                  }
                />
                <Label htmlFor={`brand-${brand}`}>{brand}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="fuel">
          <AccordionTrigger>Fuel Type</AccordionTrigger>
          <AccordionContent>
            {allFuelTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`fuel-${type}`}
                  checked={fuelTypes.includes(type)}
                  onCheckedChange={(checked) =>
                    setFuelTypes(checked ? [...fuelTypes, type] : fuelTypes.filter((t) => t !== type))
                  }
                />
                <Label htmlFor={`fuel-${type}`}>{type}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="transmission">
          <AccordionTrigger>Transmission</AccordionTrigger>
          <AccordionContent>
            {allTransmissions.map((trans) => (
              <div key={trans} className="flex items-center space-x-2">
                <Checkbox
                  id={`trans-${trans}`}
                  checked={transmissions.includes(trans)}
                  onCheckedChange={(checked) =>
                    setTransmissions(checked ? [...transmissions, trans] : transmissions.filter((t) => t !== trans))
                  }
                />
                <Label htmlFor={`trans-${trans}`}>{trans}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={1000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between mt-2">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}