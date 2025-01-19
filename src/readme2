import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Background } from "./components/Background";
export function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen w-full relative overflow-hidden">
        <Background />
        <div className="relative z-10">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}
