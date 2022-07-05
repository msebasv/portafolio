import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import SendIcon from "@mui/icons-material/Send";

import "./index.css";

const FormContact = () => {
  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <Grid>
      <Card className="card-contact">
        <CardContent>
          <Grid container>
            <Grid xs={12} sm={6} md={6} item style={{ marginBottom: "10px" }}>
              <div className="container-information">
                <div className="header-information">
                  <Typography
                    gutterBottom
                    variant="h4"
                    className="title-contact"
                  >
                    Contáctame
                  </Typography>
                </div>
                <div className="content-information">
                  <Typography
                    gutterBottom
                    variant="h1"
                    className="logo-contact"
                  >
                    {"<SM/>"}
                  </Typography>
                </div>
                <div className="content-footer">
                  <a href="https://github.com/msebasv" target="_blank">
                    <GitHubIcon className="github-contact" />
                  </a>
                  <a href="https://github.com/msebasv" target="_blank">
                    <TwitterIcon className="twitter-contact" />
                  </a>
                  <a href="https://github.com/msebasv" target="_blank">
                    <LinkedInIcon
                      className="linkedin-contact"
                      sx={{ fontSize: "30px" }}
                    />
                  </a>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} item>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid xs={12} item>
                    <TextField
                      name="name"
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Mensaje"
                      multiline
                      rows={5}
                      placeholder="Ingresa tu mensaje"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      className="button-send"
                      fullWidth
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FormContact;
