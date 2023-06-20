import { Grid } from "@mui/material";
import Asp_Net_icon from "../src/Images/asp-net.png";
import java_icon from "../../images/java_icon.png";
import nextjs_icon from "../../images/nextjs.png";
import nodejs_icon from "../../images/nodejs.png";
import react_icon from "../../images/React-icon.png";
import restful_icon from "../../images/restful-api.png";
import mysql_icon from "../../images/MySQL.png";
import python_icon from "../../images/python.jpeg";
import aws_icon from "../../images/aws.png";
import terraform_icom from "../../images/terraform.png";
import git_icon from "../../images/git.png";
import docker_icon from "../../images/docker.png";
import k8s_icon from "../../images/k8s.png";
import { SkillIcon } from "./styles";
import React from "react";

type SkillList = {
  title: string;
  skills: Skill[];
};

type Skill = {
  skillName: string;
  skillImage: string;
};

export default function Skills() {
  function CreateSingleSkill(skillName: string, skillImage: string): Skill {
    return { skillName, skillImage } as Skill;
  }

  function CreateSkillData(...skill: Skill[]): Skill[] {
    return [...skill];
  }

  function CreateSkillSet(title: string, skills: Skill[]): SkillList {
    return { title, skills } as SkillList;
  }

  const skillSets = [
    CreateSkillSet(
      "Language",
      CreateSkillData(
        CreateSingleSkill("Java", java_icon),
        CreateSingleSkill("React js", react_icon),
        CreateSingleSkill("Next js", nextjs_icon),
        CreateSingleSkill("Node js", nodejs_icon),
        CreateSingleSkill("Python", python_icon),
        CreateSingleSkill("MySQL", mysql_icon)
      )
    ),
    CreateSkillSet(
      "Skills",
      CreateSkillData(
        CreateSingleSkill("Node js", nodejs_icon),
        CreateSingleSkill("Python", python_icon),
        CreateSingleSkill("Restful API", restful_icon)
      )
    ),
    CreateSkillSet("Tools", CreateSkillData()),
  ];

  const skillSets2 = CreateSkillData(
    CreateSingleSkill("Java", java_icon),
    CreateSingleSkill("React js", react_icon),
    CreateSingleSkill("Next js", nextjs_icon),
    CreateSingleSkill("Node js", nodejs_icon),
    CreateSingleSkill("Python", python_icon),
    CreateSingleSkill("MySQL", mysql_icon),
    CreateSingleSkill("AWS", aws_icon),
    CreateSingleSkill("Terraform", terraform_icom),
    CreateSingleSkill("Restful API", restful_icon),
    CreateSingleSkill("Git", git_icon),
    CreateSingleSkill("Docker", docker_icon),
    CreateSingleSkill("K8S", k8s_icon),
    
    // CreateSingleSkill("React js", react_icon),
    // CreateSingleSkill("Next js", nextjs_icon),
    // CreateSingleSkill("Node js", nodejs_icon),
    // CreateSingleSkill("Python", python_icon),
    // CreateSingleSkill("MySQL", mysql_icon),
    // CreateSingleSkill("Node js", nodejs_icon),
    // CreateSingleSkill("Restful API", restful_icon),
    // CreateSingleSkill("React js", react_icon),
    // CreateSingleSkill("Next js", nextjs_icon),
    // CreateSingleSkill("Node js", nodejs_icon),
    // CreateSingleSkill("Python", python_icon),
    // CreateSingleSkill("MySQL", mysql_icon),
    // CreateSingleSkill("Node js", nodejs_icon),
    // CreateSingleSkill("Restful API", restful_icon)
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignContent="center">
      {skillSets2.map((skill, index) => {
        return (
          <Grid item xs={3} md={3} lg={2} textAlign="center">
            <SkillIcon
              //   style={{ padding: "8px" }}
              src={skill.skillImage}
              alt={skill.skillName}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
