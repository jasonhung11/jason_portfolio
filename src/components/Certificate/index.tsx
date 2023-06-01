import { Box, Card } from "@mui/material";
import saa_03 from "../../images/aws-certified-solutions-architect-associate.png";
export default function Certificate() {
  return (
    <div style={{ padding: "0% 20% 2% 20%" }}>
      <Card style={{ boxShadow: "0.5rem" }}>
        <a
          href="https://www.credly.com/badges/25c16f1e-bc70-461c-9118-0af2c63e907a/public_url"
          target="_blank"
        >
          <img src={saa_03}></img>
        </a>
      </Card>
    </div>
  );
}
