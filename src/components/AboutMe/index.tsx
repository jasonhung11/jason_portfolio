import { Grid, Button, Card, useMediaQuery } from "@mui/material";
import me from "../../images/me.png";
import { MyImage } from "./styles";
import Skills from "../Skills";
import React from "react";

export default function AboutMe() {
  const isDesktopView = useMediaQuery("(min-width: 700px)");
  // fix Icon and Skills spacing
  const aboutMeStyle = {
    alignItems: "center",
    display: isDesktopView ? "flex" : "block",
  };

  const skillsGridStyle = {
    width: "100%",
    padding: "2% 0",
  };

  const iconStyle = {
    width: "300px",
    height: "auto",
  };
  return (
    <Grid style={aboutMeStyle}>
      <Grid style={{ textAlign: "center" }}>
        <MyImage src={me} style={iconStyle} />
      </Grid>

      <Grid
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid style={{
            padding: "2%"
        }}>
          <h1>Welcome to Jason's Portfolio</h1>
          <p style={{ alignItems: "center" }}>I'm Jason xxxxxxx</p>
          <Card style={skillsGridStyle}>
            <Skills />
          </Card>
          <Button>Download MY CV</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
