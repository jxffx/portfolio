import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-300% animate-gradient"
          >
            jx.ffx ;)
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
