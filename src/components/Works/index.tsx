import { Grid, Typography } from "@mui/material";
import WorkDetail from "./WorkDetail";
import {
  Timeline,
  timelineOppositeContentClasses,

} from "@mui/lab";
import React from "react";

export interface Work {
  company: string;
  position: string;
  timeRange: string;
  duty: JSX.Element;
  skills: string[];
}

export default function Works() {
  function createWork(
    company: string,
    position: string,
    timeRange: string,
    duty: JSX.Element,
    skills: string[]
  ): Work {
    return { company, position, timeRange, duty, skills } as Work;
  }

  function createWorkDuty(...duty: (string | JSX.Element)[]): JSX.Element {
    return (
      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
        {duty.map((detail, index) => (
          <li key={index}>
            <Typography variant="body1" component="h4">
              {detail}
            </Typography>
          </li>
        ))}
      </ul>
    );
  }

  const workExp = [
    createWork(
      "CBI Health",
      "Accounting Clerk",
      "01/2024 - 07/2024",
      createWorkDuty(
        <>Data Management & Analysis: <strong>Utilized advanced Excel functions </strong>and macros to streamline financial data processing.</>,
        <>Process Automation: Developed and <strong>implemented VBA scripts </strong>to automate routine financial tasks, resulting in a 30% reduction in processing time and increased productivity.</>
      ),
      ["Excel", "Excel VBA"]
    ),
    createWork(
      "CornerStone Technologies",
      "Backend developer",
      "02/2023 - 08/2023",
      createWorkDuty(
        <>Collaborated with cross-functional teams, including frontend developers, designers, and system administrators, to <strong>design and implement robust and secure APIs </strong>and server-side functionality using Java Spring Boot.</>,
        <>Enhanced security by implementing <strong>JWT-based authentication and cryptographic operations</strong>, ensuring data protection and compliance with industry standards.</>,
        <> <strong>Automated CI/CD pipeline using GitHub Actions & AWS Elastic Beanstalk</strong>, reducing deployment time by 90% and eliminating manual deployment tasks.</>,
        <><strong>Improved database query performance</strong>, as measured by reducing 20% of the querying time, by making use of <strong>SQL Procedure and Views </strong>to return necessary columns and rows for the specific task.</>,
        // "Migrate on-premises server to AWS using Elastic beanstalk, RDS, OpenSearch etc…",
      ),
      ["Java Spring Boot", "AWS (Elastic Beanstalk, DynamoDB, S3, EC2)", "SQL", "Git", "Kubernetes"]
    ),
    createWork(
      "StrawberryNet",
      "Programmer",
      "12/2021 - 02/2023",
      createWorkDuty(
        <>Collaborated with cross-functional teams, including designers and backend developers, to <strong>create and implement responsive web applications</strong>, ensuring optimal user experience across different devices and browsers.</>,
        <><strong>Integrated front-end interfaces with server-side logic and APIs</strong>, working closely with the backend team to ensure smooth 	data flow and functionality, written in React Typescript.
        </>,
        <>Developed the front-end of a scalable e-commerce platform, optimizing performance and improving user experience, resulting 	in a 20% increase in conversion rates, by using <strong>React state management tools (Redux)</strong>.
        </>,
        <>Implemented backend system with MS SQL database, writing <strong>API for connecting database</strong> and allow frontend to get data through API using <strong>NodeJS</strong>.</>,
        <><strong>Implemented dynamic product filtering and sorting functionalities</strong>, enhancing the search, and browsing experience for 	users, by leveraging <strong>React Hooks </strong>for efficient state management.
        </>
      ), ["ReactJS", "NodeJS", "Python", "Redux", "MongoDB", "MS SQL", "Git", "Material UI"]
    ),

  ];

  return (
    <Grid width="100%">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
        // position="alternate"
        style={{ backgroundColor: "", paddingLeft: 0 }}
      >
        {workExp.map((work, index) => {
          return <WorkDetail index={index} work={work}></WorkDetail>;
        })}
      </Timeline>

    </Grid>
  );
}
