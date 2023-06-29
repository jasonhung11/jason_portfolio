import { Grid, Button, Card, useMediaQuery } from "@mui/material";
import me from "../../images/me.png";
import { MyImage } from "./styles";
import Skills from "../Skills";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function AboutMe() {
  const isDesktopView = useMediaQuery("(min-width: 700px)");
  // fix Icon and Skills spacing
  const aboutMeStyle = {
    alignItems: "center",
    display: isDesktopView ? "flex" : "block",
  };

  const contactIconStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    cursor: "pointer",
  };

  const skillsGridStyle = {
    width: "100%",
    padding: "2% 0",
  };

  const iconStyle = {
    width: "300px",
    height: "auto",
  };
  const contactList = [
    createContactItem(<GitHubIcon fontSize="medium" />, "jasonhung11", "https://github.com/jasonhung11"),
    createContactItem(<LinkedInIcon fontSize="medium" />, "jasonhung", "https://www.linkedin.com/in/jason-hung-3a5791217/"),
    createContactItem(<EmailIcon fontSize="medium" />, "jasonhung9923@gmail.com", "mailto:jasonhung9923@gmail.com"),
  ];

  function createContactItem(item: JSX.Element, id: string, url: string) {
    return { item, id, url };
  }

  return (
    <Grid style={aboutMeStyle}>
      <Grid style={{ textAlign: "center" }}>
        <MyImage src={me} style={iconStyle} />
        <div>
          <ul style={{ listStyleType: "none", textAlign: "left" }}>
            {contactList.map((contact, index) => {
              const { item, id, url } = contact;
              return (
                <li
                  id={index.toString()}
                  onClick={() => {window.open(url)}}
                  style={contactIconStyle}
                >
                  {item}
                  <span style={{ marginLeft: "3px" }}>{id}</span>
                </li>
              );
            })}
            {/* <li onClick={() => {}} style={contactIconStyle}>
              <GitHubIcon fontSize="medium" /> <span>jasonhung11</span>
            </li>
            <li onClick={() => {}} style={contactIconStyle}>
              <LinkedInIcon fontSize="medium" /> jasonhung
            </li>
            <li onClick={() => {}} style={contactIconStyle}>
              <EmailIcon fontSize="medium" /> jasonhung9923@gmail.com
            </li> */}
          </ul>
        </div>
      </Grid>

      <Grid
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          style={{
            padding: "2% 5%",
          }}
        >
          <h1>Welcome to Jason's Portfolio</h1>
          <p style={{ alignItems: "center" }}>
            I’m Jason, currently work as a programmer in StrawberryNet. I would
            say I'm passionate in software development which build projects with
            myself or with other friends. I have also participated in different
            IT competitions with my friends to strengthen my real- world coding
            experience.
          </p>

          <Card style={skillsGridStyle}>
            <Skills />
          </Card>
          <Button>Download MY CV</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
