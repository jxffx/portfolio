import React from "react";
import { motion } from "framer-motion";
import { SearchBox } from "./SearchBox";
import { ExternalLink, Play, DollarSign } from "lucide-react";
export function Home() {
  const products = [
    {
      title: "CC Mysterious",
      description: "Colouring i use for many videos",
      link: "https://payhip.com/b/hGE3C",
      price: 0.5,
      type: "paid",
    },
    {
      title: "CC Warm",
      description: "Colouring ive used for many viral videos",
      link: "https://payhip.com/b/nxmLw",
      price: 0.5,
      type: "paid",
    },
    {
      title: "OLD Editing Pack",
      description: "Old but still amazing for AE beginners",
      link: "https://payhip.com/b/yrx2B",
      price: 1.0,
      type: "paid",
    },
    {
      title: "My Zooms",
      description: "Free zoom for stunning edits. Please give creds :)",
      link: "https://drive.google.com/file/d/1RsFdXG4i5LrIGRHHwHTNvBz_4U9rEA8E/view",
      type: "free",
    },
  ];
  const tutorials = [
    {
      title: "Advanced Editing Tutorial",
      thumbnail: "https://img.youtube.com/vi/FA4Z8SycqUc/maxresdefault.jpg",
      link: "https://youtu.be/FA4Z8SycqUc?si=Ngh3wtXsjvNfooar",
    },
    {
      title: "Professional Effects Guide",
      thumbnail: "https://img.youtube.com/vi/VF7fkdIkVGw/maxresdefault.jpg",
      link: "https://youtu.be/VF7fkdIkVGw?si=cN7zGsSmNHffsiQG",
    },
  ];
  return (
    <main className="w-full">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900" />
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center z-10 px-4"
        >
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-8 relative"
          >
            <div className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.pink.600),theme(colors.purple.400),theme(colors.pink.600))] bg-[length:200%_auto] animate-gradient">
              Jx.ffx
            </div>
            <div className="text-7xl md:text-9xl font-bold mb-6">Portfolio</div>
          </motion.div>
        </motion.div>
      </section>
      <section className="py-20 px-4 relative bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient"
          >
            Connect With Me
          </motion.h2>
          <SearchBox />
        </div>
      </section>
      <section className="py-20 px-4 relative bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-color"
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="space-y-4 leading-relaxed">
                  <span className="block mb-4">
                    Editing started as just something fun to mess around with,
                    but it quickly became so much more. I've gotten so many nice
                    comments and followers, and that's something I'll always
                    appreciate.
                  </span>
                  <span className="block mb-4">
                    I actually started editing back in like 2017 on Kinemaster
                    💀. Then I got into CapCut and Video Star (they've actually
                    followed me on a few accounts, which is pretty cool).
                    Eventually, I started using After Effects in 2022, I think?
                  </span>
                  <span className="block mb-4">
                    I remember hitting 10k followers when I was still figuring
                    out AE, and honestly, I was so bad back then 🥲. But I kept
                    practicing and improving, and now I'm only 500 followers
                    away from 50k—like, what?!
                  </span>
                  <span className="block">
                    Seriously, I can't thank you guys enough for all the love
                    and support. You mean the world to me, and I love y'all so
                    much ❤️
                  </span>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient">
                Software & Skills
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Main Editing Software
                  </h4>
                  <motion.div
                    className="grid grid-cols-1 gap-4"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                  >
                    {[
                      "After Effects 2025",
                      "After Effects 2025 Beta",
                      "Premiere Pro 2025 Beta",
                    ].map((software, index) => (
                      <motion.div
                        key={software}
                        whileHover={{
                          scale: 1.02,
                          x: 10,
                        }}
                        className="bg-gray-800/50 p-4 rounded-lg text-left text-gray-300 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                      >
                        {software}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Expertise
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        skill: "Video Effects & Transitions",
                        level: 95,
                      },
                      {
                        skill: "Color Grading & CC",
                        level: 92,
                      },
                      {
                        skill: "Sound Design & Sync",
                        level: 90,
                      },
                      {
                        skill: "Visual Flow & Timing",
                        level: 94,
                      },
                      {
                        skill: "AMV Editing",
                        level: 93,
                      },
                    ].map((item, index) => (
                      <div key={item.skill} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300 font-medium">
                            {item.skill}
                          </span>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
                            {item.level}%
                          </span>
                        </div>
                        <motion.div
                          className="h-1.5 bg-gray-700 rounded-full overflow-hidden"
                          initial={{
                            opacity: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                          }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient"
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${item.level}%`,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 0.5 + index * 0.1,
                            }}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
              delay: 0.4,
            }}
            className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              My Editing Process
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’ll spend hours just searching for the perfect audio. I’m super
              picky about it because the right track can totally change the
              vibe. Once I find something that feels right, everything else
              starts coming together. From there, it’s a lot of experimenting
              playing with timing, pacing, and effects until it starts to click.
              I don’t rush through it; I like to let things flow and see where
              they go. By the time I’m happy with it, I’ve probably spent way
              too much time tweaking little things until it feels perfect.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-color"
          >
            Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 animate-float hover:border-purple-500/50"
                style={{
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                      {product.title}
                    </h3>
                    {product.type === "paid" ? (
                      <div className="flex items-center bg-purple-600/20 px-3 py-1 rounded-full">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>{product.price}</span>
                      </div>
                    ) : (
                      <div className="bg-green-600/20 px-3 py-1 rounded-full">
                        Free
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg text-white font-medium"
                  >
                    <span>Get Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 relative bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-color"
          >
            Tutorials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <motion.a
                href={tutorial.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
              >
                <div className="relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="inline-flex items-center space-x-2 text-purple-400"
                  >
                    <span>Watch Tutorial</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
