import { Grid, Button, Card, useMediaQuery } from "@mui/material";
import me from "../../images/me.png";
import { MyImage } from "./styles";
import Skills from "../Skills";
import React from "react";

export default function AboutMe() {
  const displayIcon = useMediaQuery("(min-width: 700px)");
  const isMatch_1200 = useMediaQuery("(min-width: 1200px)");
  // fix Icon and Skills spacing
  const aboutMeStyle = {
    display: isMatch_1200 ? "flex" : "block",
    margin: "2% 15%",
    justifyContent: "center",
  };

  const skillsGridStyle = {
    width: isMatch_1200 ? "70%" : "100%",
    padding: "2% 0" 
  }

  const iconStyle = {
    width: '400px',
    height: 'auto'
    //testing
  }
  return (
    <Grid style={aboutMeStyle}>
      {/* {displayIcon && (
        <Grid>
          <MyImage src={me} />
        </Grid>
      )} */}
      <Grid>
        <MyImage src={me} style={iconStyle}/>
      </Grid>

      <Grid style={{ alignItems: "center", display: "flex" }}>
        <Grid>
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
