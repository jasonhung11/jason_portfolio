import { Grid, Button, Card } from "@mui/material";
import me from "../../images/me.png"
import { MyImage } from "./styles";
import Skills from "../Skills";
import React from "react";
export default function AboutMe(){
    return (
        <Grid style={{display: "flex", margin: "2% 15%", justifyContent:"center"}}>
        <Grid>
            <MyImage src={me}/>
        </Grid>
        
        <Grid style={{alignItems: "center", display: "flex", }}>
            <Grid>
                <h1>
                    Welcome to Jason's Portfolio
                </h1>
                <p style={{alignItems: "center"}}>
                    I'm Jason xxxxxxx  
                </p> 
                <Card style={{width: "70%", padding: "2% 0"}} >
                    <Skills/>
                </Card>
                <Button>
                    Download MY CV
                </Button>
            </Grid>
        </Grid>
    </Grid>
    )
}
