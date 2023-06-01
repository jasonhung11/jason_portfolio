import { Card } from "@mui/material";
import saa_03 from "../../images/aws-certified-solutions-architect-associate.png";
import comingSoon from "../../images/abstract-coming-soon-halftone-style-background-design_1017-27282.png";
import React from "react";

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
  return (
    <div style={{ padding: "0% 20% 2% 20%", display: "flex" }}>
      {certs.map((cert: Cert, i: number) => (
        <Card style={{ boxShadow: "0.5rem gold", borderColor: "#FFD700", margin: "0 2%", padding: "2%" }}>
          <a href={cert.url} target="_blank">
            <img src={cert.image}></img>
          </a>
        </Card>
      ))}

      <img style={{marginLeft: "10%", height: "216px" }} src={comingSoon}></img>
    </div>
  );
}
