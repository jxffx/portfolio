import React from "react";
import { motion } from "framer-motion";
export function Work() {
  const products = [
    {
      title: "Product 1",
      description: "Description of product 1",
      image:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Product 2",
      description: "Description of product 2",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <main className="w-full relative z-10">
      <section className="min-h-screen px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              My Work
            </h1>
            <p className="text-xl text-gray-300">
              Check out some of my latest projects
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 ease-out"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                  className="p-8"
                >
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {product.description}
                  </p>
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={product.link}
                    className="inline-block bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg text-white font-medium"
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
