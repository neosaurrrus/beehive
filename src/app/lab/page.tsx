"use client";

import { Heading1, Heading2 } from "@/components/Text/Text";
import { motion } from "framer-motion";
import Variant from "./Variant/Variant";

export default function Lab() {
  return (
    <div>
      <Heading1>Motion Lab</Heading1>

      <div className="flex flex-col justity-center items-center gap-24 mt-24">
        <motion.div
          className="w-20 h-20 bg-accent"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            duration: 10, // Weird how this should work but does not
            type: "spring",
            stiffness: 260,
            damping: 20,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="bg-accent w-20 h-20"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />

        <div>
          <Heading2>Hover</Heading2>
          <motion.div
            className="bg-accent w-20 h-20"
            whileHover={{ scale: [null, 3, 0.5] }}
            transition={{ duration: 3 }}
          />
        </div>

        <Variant />
      </div>
    </div>

    // refresh page to see animation
  );
}
