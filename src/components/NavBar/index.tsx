import AppBar from "@mui/material/AppBar";
import { BsLinkedin } from "react-icons/bs";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { GoMarkGithub } from "react-icons/go";
import { IconContext, IconType } from "react-icons";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Link } from '@mui/material';
import { NavBarLinkContainer, NavBarTitle } from "./styles";
import { Link } from "react-scroll";
import React from "react";
import { useMediaQuery } from "../../useMediaQuery";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// const ScrollLink = Scroll

export default function Navbar({ isHideNavItem }: { isHideNavItem: boolean }) {
  const navbarItems = [
    CreateNavbarItem("projects", "Projects"),
    CreateNavbarItem("skills", "Skills"),
    CreateNavbarItem("certificate", "Certificate"),
    CreateNavbarItem("work", "Working Experience"),
  ];

  function CreateNavbarItem(id: string, name: string) {
    return { id, name };
  }
  // soical media button --> LinkedIn, Github

  function CreateSocialIcons(icon: IconType, iconName: string, link: string) {
    return { icon, iconName, link };
  }

  // Add email button
  const soicalIcons = [
    CreateSocialIcons(GoMarkGithub, "GitHub", "https://github.com/jasonhung11"),
    CreateSocialIcons(
      BsLinkedin,
      "Linkedin",
      "https://www.linkedin.com/in/jason-hung-3a5791217/"
    ),
  ];

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <NavBarLinkContainer
          container
          display="flex"
          justifyContent="space-between"
        >
          <Grid item display="flex">
            <NavBarTitle> Jason's Profile</NavBarTitle>
            {isHideNavItem && (
              <Grid item display="flex" alignItems="center">
                {navbarItems.map((item) => (
                  <Link
                    // activeClass="active"
                    // color="inherit"
                    style={{ margin: "0 1em", fontSize: "1.2rem" }}
                    to={item.id}
                    // to={"/#" + item.id}
                    spy={true}
                    smooth={true}
                  >
                    {item.name}
                  </Link>
                ))}
              </Grid>
            )}
          </Grid>
          <Grid item display="flex" alignItems="center">
            <WbSunnyOutlinedIcon />
            <DarkModeIcon />
          </Grid>

          {/* <Grid item display="flex" alignItems="center">
            {soicalIcons.map((item) => (
              <IconContext.Provider value={{ color: "white", size: "1.7em" }}>
                <a
                  href={item.link}
                  style={{ marginLeft: "2em" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <item.icon />
                </a>
              </IconContext.Provider>
            ))}
          </Grid> */}
        </NavBarLinkContainer>
      </Toolbar>
    </AppBar>
  );
}
