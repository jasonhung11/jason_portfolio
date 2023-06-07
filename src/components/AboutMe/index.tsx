import { Grid, Button, Card, useMediaQuery } from "@mui/material";
import me from "../../images/me.png";
import { MyImage } from "./styles";
import Skills from "../Skills";
import React from "react";

export default function AboutMe() {
  const displayIcon = useMediaQuery("(min-width: 700px)");
  // fix Icon and Skills spacing
  const aboutMeStyle = {
    display: displayIcon ? "flex" : "block",
    margin: "2% 15%",
    justifyContent: "center",
  };
  return (
    <Grid style={aboutMeStyle}>
      {/* {displayIcon && (
        <Grid>
          <MyImage src={me} />
        </Grid>
      )} */}
      <Grid>
        <MyImage src={me} />
      </Grid>

      <Grid style={{ alignItems: "center", display: "flex" }}>
        <Grid>
          <h1>Welcome to Jason's Portfolio</h1>
          <p style={{ alignItems: "center" }}>I'm Jason xxxxxxx</p>
          <Card style={{ width: "70%", padding: "2% 0" }}>
            <Skills />
          </Card>
          <Button>Download MY CV</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
