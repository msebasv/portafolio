import React from "react";

import Grid from "@mui/material/Grid";

import avatar from "../../assets/images/avatar.png";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import music from "../../assets/images/music.png";

import "./index.css";

const About = () => {
  return (
    <div className="container-about">
      <Grid container className="container-grid">
        <Grid xs={12} md={12} item>
          <h1>{"<About />"}</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="container-image">
            <img src={avatar} className="picture-avatar" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="container-description">
            <h2>HOLA,</h2>
            <h3>Soy desarrollador web front-end</h3>
            <p>
              Desarrollador web front-end y estudiante de Ingeniería de sistemas
              con conocimiento en desarrollo de software bajo los lenguajes de
              programación Java, JavaScript, desarrollo frontend con React JS,
              lenguaje de marcado HTML y lenguaje de estilos CSS.
            </p>
            <span className="line" />
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-logos">
                <img src={html} className="html" />
                <img src={css} className="css" />
                <img src={javascript} className="javascript" />
                <img src={react} className="react" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={12} md={12} item>
          <h1 className="title-hobbies">Hobbies</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="description-hobbies">
            Disfruto de los deportes, de todo tipo de actividad física, además
            de que me ejercito constantemente para buscar un buen estado físico,
            me encanta la música, todo el tiempo estoy escuchando música de todo
            género, aunque si pudiera escoger un género en específico, sería el
            reggae.
            <br />
            <br />
            Me gusta los videojuegos, uno de mis juegos favoritos es el League
            of Legends (lol), aunque a veces puede ser un juego estresante por
            la competitividad, me divierto jugando y aún más si es con amigos.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="container-image">
            <img src={music} className="picture-music" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;

{
  /* <h1>{"<About />"}</h1>
        <div className="container-card-about">
          <div className="first-section">
            <Grid item xs={12} md={6}>
              <div className="container-image">
                <img src={avatar} className="picture-avatar" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="container-description">
                <h2>HOLA,</h2>
                <h3>Soy desarrollador web front-end</h3>
                <p>
                  Desarrollador web front-end y estudiante de Ingeniería de
                  sistemas con conocimiento en desarrollo de software bajo los
                  lenguajes de programación Java, JavaScript, desarrollo
                  frontend con React JS, lenguaje de marcado HTML y lenguaje de
                  estilos CSS.
                </p>
                <span className="line" />
                <div className="skills">
                  <h3>Skills</h3>
                  <div className="skills-logos">
                    <img src={html} className="html" />
                    <img src={css} className="css" />
                    <img src={javascript} className="javascript" />
                    <img src={react} className="react" />
                  </div>
                </div>
              </div>
            </Grid>
          </div>
          <div className="hobbies">
            <h1 className="title-hobbies">Hobbies</h1>
            <div className="second-section">
              <div className="container-description-hobbies">
                <p className="description-hobbies">
                  Disfruto de los deportes, de todo tipo de actividad física,
                  además de que me ejercito constantemente para buscar un buen
                  estado físico, me encanta la música, todo el tiempo estoy
                  escuchando música de todo género, aunque si pudiera escoger un
                  género en específico, sería el reggae.
                  <br />
                  <br />
                  Me gusta los videojuegos, uno de mis juegos favoritos es el
                  League of Legends (lol), aunque a veces puede ser un juego
                  estresante por la competitividad, me divierto jugando y aún
                  más si es con amigos.
                </p>
              </div>
              <div className="container-image">
                <img src={music} className="picture-music" />
              </div>
            </div>
          </div>
        </div> */
}
