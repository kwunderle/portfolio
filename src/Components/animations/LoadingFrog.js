import React from "react";
import { motion } from "framer-motion";

export default function LoadingFrog() {
  const frogRaceVariants = {
    race: {
      x: [0, 50, 0], // hop right and back
      y: [0, -10, 0], // vertical hop
      transition: {
        x: { yoyo: Infinity, duration: 1, ease: "easeInOut" },
        y: { yoyo: Infinity, duration: 0.5, ease: "easeInOut" },
      },
    },
  };

  return (
    <motion.span
      variants={frogRaceVariants}
      animate="race"
      style={{ display: "inline-block", fontSize: "1.5rem" }}
    >
      🐸
    </motion.span>
  );
}
