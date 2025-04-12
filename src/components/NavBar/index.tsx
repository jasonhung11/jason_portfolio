import AppBar from "@mui/material/AppBar";
import { BsLinkedin } from "react-icons/bs";
import Grid from "@mui/material/Grid";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
import Toolbar from "@mui/material/Toolbar";
import { NavBarLinkContainer, NavBarTitle } from "./styles";
import { Link } from "react-scroll";
import { IconButton } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../context/themeContext";

export default function Navbar({ isHideNavItem }: { isHideNavItem: boolean }) {
  const navbarItems = [
    CreateNavbarItem("projects", "Projects"),
    CreateNavbarItem("certificate", "Certificate"),
    CreateNavbarItem("working experience", "Working Experience"),
  ];
  const { themeMode, setTheme } = useThemeContext();
  function CreateNavbarItem(id: string, name: string) {
    return { id, name };
  }
  // soical media button --> LinkedIn, Github

  function CreateSocialIcons(icon: IconType, iconName: string, link: string) {
    return { icon, iconName, link };
  }

  // Add email button
  const soicalIcons = [
    CreateSocialIcons(FaGithub, "GitHub", "https://github.com/jasonhung11"),
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
                    style={{ margin: "0 1em", fontSize: "1.2rem", cursor: "pointer" }}
                    to={item.id}
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
            <IconButton
              onClick={() => setTheme()}
              style={{ color: themeMode === "light" ? "#000" : "#fff" }}
            >
              {themeMode === "light" ? (
                <WbSunnyOutlinedIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Grid>
        </NavBarLinkContainer>
      </Toolbar>
    </AppBar>
  );
}
