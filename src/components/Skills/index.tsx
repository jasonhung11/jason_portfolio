import { Grid, Tooltip } from "@mui/material";
import React from "react";
import { useThemeContext } from "src/context/themeContext";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGit,
  FaDocker,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiTerraform,
  SiKubernetes,
  SiPostman,
  SiSwagger,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiNestjs,
  SiJest,
  SiTestinglibrary,
  SiRedis,
} from 'react-icons/si';

export default function Skills() {
  const { themeMode, } = useThemeContext();


  const skills = [
    <Tooltip title="Java">
      <span>
        <FaJava size={30} color="#007396" />
      </span>
    </Tooltip>,
    <Tooltip title="ReactJS" arrow>
      <span>
        <FaReact size={30} color="#61DAFB" />
      </span>
    </Tooltip>,
    <Tooltip title="Next.js" arrow>
      <span>
        <SiNextdotjs size={30} color={themeMode === "dark" ? '#ffffff' : '#000000'} />
      </span>
    </Tooltip>,
    <Tooltip title="Node.js" arrow>
      <span>
        <FaNodeJs size={30} color="#339933" />
      </span>
    </Tooltip>,
    <Tooltip title="Python" arrow>
      <span>
        <SiPython size={30} color="#3776AB" />
      </span>
    </Tooltip>,
    <Tooltip title="MySQL" arrow>
      <span>
        <SiMysql size={30} color="#00758F" />
      </span>
    </Tooltip>,
    <Tooltip title="AWS" arrow>
      <span>
        <FaAws size={30} color="#FF9900" />
      </span>
    </Tooltip>,
    <Tooltip title="Terraform" arrow>
      <span>
        <SiTerraform size={30} color="#623CE4" />
      </span>
    </Tooltip>,
    <Tooltip title="Git" arrow>
      <span>
        <FaGit size={30} color="#F05032" />
      </span>
    </Tooltip>,
    <Tooltip title="Docker" arrow>
      <span>
        <FaDocker size={30} color="#2496ED" />
      </span>
    </Tooltip>,
    <Tooltip title="Kubernetes" arrow>
      <span>
        <SiKubernetes size={30} color="#326CE5" />
      </span>
    </Tooltip>,
    <Tooltip title="Redis" arrow>
      <span>
        <SiRedis size={30} color="#DC382D" />
      </span>
    </Tooltip>,
  ]

  return (

    <Grid container spacing={2} justifyContent="center" alignContent="center" sx={{ overflow: "visible" }}>
      {skills.map((skill, index) => {
        return (
          <Grid item xs={3} md={3} lg={2} textAlign="center">
            {skill}
          </Grid>
        )
      })}
    </Grid>
  );
}
