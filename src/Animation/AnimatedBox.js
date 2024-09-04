import React from "react";
import { motion } from "framer-motion";

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Start with 0 opacity and offset to the left
      animate={{ opacity: 1, x: 0 }} // Animate to full opacity and its original position
      transition={{ duration: 0.5 }} // Animation duration of 0.5 seconds
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        margin: "50px auto",
      }}
    />
  );
};

export default AnimatedBox;
