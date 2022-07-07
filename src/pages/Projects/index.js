import React from "react";

import { Grid } from "@mui/material";

import CardProject from "../../components/CardProject";

import { motion } from "framer-motion";

import "./index.css";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-projects"
    >
      <Grid
        className="container-grid-projects"
        container
        // rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid xs={12} sm={12} md={12} item>
          <h1>{"<Proyectos />"}</h1>
        </Grid>
        {[1].map((index) => {
          return (
            <Grid xs={12} sm={6} md={4} item key={index}>
              <CardProject />;
            </Grid>
          );
        })}
      </Grid>
      ;
    </motion.div>
  );
};

export default Projects;

//  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//    <Grid xs={12} sm={12} md={12} item>
//      <h1>{"<Proyectos />"}</h1>
//    </Grid>
//    {[1, 2].map((index) => {
//      return (
//        <Grid xs={12} sm={6} md={4} item key={index}>
//          <CardProject />
//        </Grid>
//      );
//    })}
//  </Grid>;
