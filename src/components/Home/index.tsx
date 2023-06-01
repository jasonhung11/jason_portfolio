import AboutMe from "../AboutMe";
import Certificate from "../Certificate";
import Navbar from "../NavBar";
import Projects from "../Projects";
import Skills from "../Skills";
import Works from "../Works";
import { Element } from 'react-scroll'
import { Grid } from "@mui/material";
import React from "react";

export default function Home(){
    const elementList = [
        // createNavItem(<Navbar/>, "navbar"),
        createNavItem(<AboutMe/>, "About Me"),
        createNavItem(<Projects/>, "Projects"),
        createNavItem(<Certificate/>, "Certificate"),
        createNavItem(<Works/>, "Works")
        
    ]
    function createNavItem(item: JSX.Element, id: string){
        return {item, id}
    }
    return (
        <>
            <Navbar/>
            {elementList.map(({item, id}: {item: JSX.Element, id: string}) => {
                return (
                    <Element id={id} name={id}>
                        <Grid>
                            <h1 style={{padding: "2% 15% 0% 15%"}}>
                                    {id}
                            </h1>
                            {item}
                        </Grid>
                        
                    </Element>
                )
            })}
        </>
    )
}