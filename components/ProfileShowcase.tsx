"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileShowcase() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 1.03 }}
      className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(.19,1,.22,1)]"
    >
      {/* 🌈 PERFECT SMOOTH GLOW (no cut, rotating softly) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.6, 0.9, 0.6],
          scale: [1.05, 1.15, 1.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[360px]
          h-[360px]
          rounded-full
          blur-3xl
          bg-[conic-gradient(from_0deg,rgba(16,185,129,0.7),rgba(56,189,248,0.7),rgba(129,140,248,0.7),rgba(16,185,129,0.7))]
        "
      />

      {/* 📊 Minimal data-themed shapes */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-6 w-3 h-3 bg-blue-400/70 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-12 right-8 w-2.5 h-2.5 bg-purple-400/70 rotate-45"
      />

      {/* 🔷 Soft grid background */}
      <div className="
        absolute inset-0 
        bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),
        linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
        bg-[size:26px_26px]
        rounded-3xl 
        opacity-20
      " />

      {/* ⭐ Main Image Card */}
      <motion.div
        className="
          relative 
          rounded-3xl 
          overflow-hidden 
          shadow-2xl 
          bg-slate-900/20 
          backdrop-blur-xl 
          p-[3px]
        "
      >
        {/* 💫 Glow border (smooth, no cut) */}
        <div
          className="
            absolute inset-0 
            rounded-3xl 
            bg-[conic-gradient(from_0deg,#10b981,#38bdf8,#818cf8,#10b981)]
            opacity-60
            blur-lg
            pointer-events-none
          "
        />

        {/* 🖼 Profile Image */}
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="
            rounded-3xl 
            z-10 
            relative 
            object-cover 
            transition-transform 
            duration-[700ms] 
            ease-[cubic-bezier(.19,1,.22,1)]
          "
        />
      </motion.div>
    </motion.div>
  );
}