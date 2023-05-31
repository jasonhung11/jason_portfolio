import { Grid, Button } from "@mui/material";
import me from "../../images/me.png"
import { MyImage } from "./styles";
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
                <Button>
                    Download MY CV
                </Button>
            </Grid>
        </Grid>
    </Grid>
    )
}
