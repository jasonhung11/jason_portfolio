import { Card, Grid } from "@mui/material";
import saa_03 from "../../images/aws-certified-solutions-architect-associate.png";
import comingSoon from "../../images/commingSoon.png";
import React from "react";
import { useMediaQuery } from "../../useMediaQuery";
import { Height } from "@mui/icons-material";
interface Cert {
  url: string;
  image: string;
}

function createCertifcate(url: string, image: string) {
  return { url, image } as Cert;
}
export default function Certificate() {
  var certs = [
    createCertifcate(
      "https://www.credly.com/badges/25c16f1e-bc70-461c-9118-0af2c63e907a/public_url",
      saa_03
    ),
  ];

  certs.push(createCertifcate("", comingSoon));

  const isSpaceBetween = useMediaQuery("(min-width: 700px)");
  const isDesktopView = useMediaQuery("(min-width: 700px)");

  const certificateGridStyle = {
    padding: isDesktopView ? "0% 10% 2% 10%" : "0",
    display: "flex",
  };
  const comingSoonStyle = {
    // padding: "2% 0",
    // marginLeft: isSpaceBetween ? "10%" : "0",
    height: "200px",
    width: "200px",
  };
  return (
    <div style={certificateGridStyle}>
      <Grid container spacing={10} >
        {certs.map((cert: Cert, i: number) => (
          <Grid item xs={6} md={5} lg={3} >
            <Card
              style={{
                justifyContent: "center",
                boxShadow: "0.5rem gold",
                borderColor: "#FFD700",
                // padding: "10%",
                height: "250px",
                width: "250px",
                alignItems: "center",
                display: "flex"
              }}
            >
              <a href={cert.url} target="_blank">
                <img src={cert.image} style={comingSoonStyle}></img>
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* <img style={comingSoonStyle} src={comingSoon}></img> */}
    </div>
  );
}
