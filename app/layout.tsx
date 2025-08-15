import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Car Dealership",
  description: "Premium car dealership with a wide range of vehicles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable}`}
      >
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
