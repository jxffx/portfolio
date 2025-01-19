import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
export function SearchBox() {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const socials = [
    {
      platform: "Red Note",
      username: "Willaep",
      link: "#",
    },
    {
      platform: "TikTok",
      username: "Jx.ffx",
      link: "#",
    },
    {
      platform: "TikTok",
      username: "Jx.avatar",
      link: "#",
    },
    {
      platform: "TikTok",
      username: "Jx.tvd",
      link: "#",
    },
    {
      platform: "TikTok",
      username: "Quinn.mov",
      link: "#",
    },
    {
      platform: "TikTok",
      username: "4nathon",
      link: "#",
    },
    {
      platform: "Instagram",
      username: "Jx.ffx",
      link: "#",
    },
    {
      platform: "Discord",
      username: "Jx.ffx",
      link: "#",
    },
    {
      platform: "Snapchat",
      username: "Willaep",
      link: "#",
    },
    {
      platform: "Fortnite",
      username: "Use Code Jx.ffx",
      link: "#",
    },
  ];
  const filteredSocials = socials.filter(
    (social) =>
      social.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      social.username.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="w-full max-w-md mx-auto relative"
    >
      <div className="relative bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-700/50 overflow-hidden">
        <div className="flex items-center p-3 space-x-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search socials..."
            className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
            onFocus={() => setIsActive(true)}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50"
          >
            <Filter className="w-4 h-4 text-gray-400" />
          </motion.button>
        </div>
        <AnimatePresence>
          {(isActive || searchTerm) && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="border-t border-gray-700/50"
            >
              <div className="max-h-64 overflow-y-auto">
                {filteredSocials.map((social, index) => (
                  <motion.a
                    key={`${social.platform}-${social.username}`}
                    href={social.link}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="flex items-center p-3 hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-white">
                        {social.platform}
                      </div>
                      <div className="text-sm text-gray-400">
                        {social.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
