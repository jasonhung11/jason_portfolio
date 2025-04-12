import { Grid, Button, Card, useMediaQuery, Typography, List, ListItem } from "@mui/material";
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
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    '&:hover': {
      transform: "scale(1.05)",
    },

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
    createContactItem(
      <GitHubIcon fontSize="medium" />,
      "jasonhung11",
      "https://github.com/jasonhung11"
    ),
    createContactItem(
      <LinkedInIcon fontSize="medium" />,
      "jasonhung",
      "https://www.linkedin.com/in/jason-hung-3a5791217/"
    ),
    createContactItem(
      <EmailIcon fontSize="medium" />,
      "jasonhung2399@gmail.com",
      "mailto:jasonhung2399@gmail.com"
    ),
  ];

  function createContactItem(item: JSX.Element, id: string, url: string) {
    return { item, id, url };
  }

  return (
    <Grid style={aboutMeStyle}>
      <Grid style={{ textAlign: "center" }}>
        <MyImage src={me} style={iconStyle} />
        <div>
          <List style={{ listStyleType: "none", textAlign: "left" }}>
            {contactList.map((contact, index) => {
              const { item, id, url } = contact;
              return (
                <ListItem
                  id={index.toString()}
                  onClick={() => {
                    window.open(url);
                  }}
                  sx={contactIconStyle}

                >
                  {item}
                  <span style={{ marginLeft: "3px" }}>{id}</span>
                </ListItem>
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
          </List>
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
          <h1>👋 Hi, This is Jason</h1>
          <p style={{ alignItems: "center" }}>
            {/* I’m Jason, currently work as a programmer in StrawberryNet. I would
            say I'm passionate in software development which build projects with
            myself or with other friends. I have also participated in different
            IT competitions with my friends to strengthen my real- world coding
            experience. */}
            <Typography paragraph>
              I’m a passionate Software Engineer with experience in backend development, APIs, and full-stack applications. I enjoy building secure, scalable systems and bringing ideas to life with clean, maintainable code.
            </Typography>

            <Typography paragraph>
              With a background in <b>Java, TypeScript/JavaScript (ReactJS, NodeJS), Python and C#</b>, and experience across cloud platforms like AWS, I’ve contributed to both startup and enterprise projects — <b>from streamlining e-commerce APIs to migrating infrastructure to the cloud</b>.
            </Typography>

            <Typography paragraph>
              Whether it’s collaborating with cross-functional teams, optimizing performance, or diving into new frameworks, I’m always eager to grow and make meaningful impact through technology.
            </Typography>


          </p>

          <Card style={skillsGridStyle}>
            <Skills />
          </Card>
          {/* <Button>Download MY CV</Button> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
