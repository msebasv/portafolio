import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { motion } from "framer-motion";

import "./index.css";

const SocialMedia = () => {
  return (
    <motion.div
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="container-social"
    >
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
    </motion.div>
  );
};

export default SocialMedia;
