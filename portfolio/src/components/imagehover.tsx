

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logo = [
  { name: "one", image: "./airbnb-pc.png" },
  { name: "two", image: "./h-1.avif" },
  { name: "three", image: "./chat-pc2.png" },
  { name: "five", image: "./h-2.avif" },
  
];

export default function Images() {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logo.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative flex justify-center items-center h-full w-full overflow-hidden rounded-4xl">
    <AnimatePresence mode="sync"> 
      <motion.img
        key={logo[index].name}
        src={logo[index].image}
        className="absolute h-full w-full object-fill rounded-4xl"
        initial={{ y: "100%", opacity: 0 }} 
        animate={{ y: "0%", opacity: 1 }} 
        exit={{ y: "-100%", opacity: 0 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </AnimatePresence>
  </div>
  );
}
