import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function formatMileage(miles: number) {
  return `${miles.toLocaleString()} miles`;
}
