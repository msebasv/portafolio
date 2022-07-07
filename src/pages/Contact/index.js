import React from "react";

import FormContact from "../../components/FormContact";

import "./index.css";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-contact"
    >
      <FormContact />
    </motion.div>
  );
};

export default Contact;
