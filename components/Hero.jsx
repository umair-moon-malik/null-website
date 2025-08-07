"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-[80vh] text-white px-4">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="lg:text-[10rem] text-[7rem] font-light tracking-tighter mb-2">
          n|u
        </div>
        <h2 className="lg:text-5xl text-2xl mb-4">Welcome to</h2>
        <h2 className="lg:text-5xl text-3xl  font-black mb-4 tracking-wide">
          Null Student Chapter
        </h2>
        <h2 className="lg:text-5xl text-3xl  font-black mb-4">VIT Bhopal</h2>
      </motion.div>
    </section>
  );
};

export default Hero;
