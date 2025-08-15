"use client";

import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <LayoutGroup>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </LayoutGroup>
  );
}