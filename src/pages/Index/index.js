import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { motion } from "framer-motion";

import "./index.css";

const Index = () => {
  return (
    <div className="container-index">
      <div className="container-text">
        <motion.h1 className="text-title">{"<Sebastian Martinez />"}</motion.h1>
        <p className="text-subtitle">A Frontend Developer</p>
      </div>
      <div className="container-social">
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
        >
          <a href="https://github.com/msebasv" target="_blank">
            <GitHubIcon className="github" sx={{ fontSize: "30px" }} />
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <TwitterIcon className="twitter" sx={{ fontSize: "30px" }} />
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <a href="https://www.linkedin.com/in/msebasv/" target="_blank">
            <LinkedInIcon className="linkedin" sx={{ fontSize: "30px" }} />
          </a>
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
    </div>
  );
};

export default Index;
