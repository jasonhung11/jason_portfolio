import AboutMe from "../AboutMe";
import Certificate from "../Certificate";
import Navbar from "../NavBar";
import Projects from "../Projects";
import Skills from "../Skills";
import Works from "../Works";
import { Element } from "react-scroll";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
export default function Home() {
  const isRowBased = useMediaQuery("(min-width: 818px)");
  const isDesktopView = useMediaQuery("(min-width: 700px)");
  const isChangeProjectView = useMediaQuery("(min-width: 1000px)");
  const elementList = [
    // createNavItem(<Navbar/>, "navbar"),
    createNavItem(<AboutMe />, ""),
    createNavItem(<Projects isDesktopView={isChangeProjectView} />, "Projects"),
    createNavItem(<Certificate isDesktopView={isDesktopView} />, "Certificate"),
    createNavItem(<Works />, "Working Experience"),
  ];
  function createNavItem(item: JSX.Element, id: string) {
    return { item, id };
  }

  const elementStyle = {
    padding: isRowBased ? "0% 12% 2%" : "0 3% 1%",
  }

  const matches = useMediaQuery('(min-width:700px)', { noSsr: true });
  const elementHeaderStyle = {
    padding: matches ? "0" : "5%",
  }
  
  return (
    <div >
      {/*  display navbar or sidebar */}
      {<Navbar isHideNavItem={isRowBased} />}
      {elementList.map(({ item, id }: { item: JSX.Element; id: string }) => {
        return (
          <Element id={id.toLowerCase()} name={id.toLowerCase()} style={elementStyle} >
            <Grid>
              {id !== "" && <h1 style={elementHeaderStyle}>{id}</h1>}
              <div >{item}</div>
            </Grid>
          </Element>
        );
      })}
    </div>
  );
}
