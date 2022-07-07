import React from "react";

import Typewriter from "typewriter-effect";

import { motion } from "framer-motion";

import "./index.css";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-index"
    >
      <div className="container-text">
        <p className="i-am">I AM</p>
        <h1 className="text-title">{"<Sebastian Martinez />"}</h1>
        <div className="text-subtitle">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("A Frontend Developer")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
      <div className="container-scroll">
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <h5 className="scroll">Scroll</h5>
        </motion.div>
        <motion.div
          className="line-contact"
          initial={{
            height: 0,
          }}
          animate={{
            height: "3rem",
          }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.8,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Index;
