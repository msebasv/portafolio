import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import portafolio from "../../assets/images/portafolio.png";

import "./index.css";

const CardProject = () => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        image={portafolio}
        alt="image-portafolio"
        className="card-image"
      />
      <CardContent className="card-content">
        <h3>Portafolio</h3>
        <p>Información personal donde deseo mostrar mis proyectos y skills</p>
      </CardContent>
    </Card>
  );
};

export default CardProject;
