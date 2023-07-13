import { Grid } from "@mui/material";
import WorkDetail from "./WorkDetail";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import React from "react";

export interface Work {
  company: string;
  position: string;
  timeRange: string;
  duty: string[];
}

export default function Works() {
  function createWork(
    company: string,
    position: string,
    timeRange: string,
    duty: string[]
  ): Work {
    return { company, position, timeRange, duty } as Work;
  }

  function createWorkDuty(...duty: string[]): string[] {
    return [...duty];
  }

  const workExp = [
    createWork(
      "CornerStone Technologies",
      "Backend developer",
      "02/2023 - 08/2023",
      createWorkDuty(
        "Maintain and integrate website and kiosk backend system using Java Spring Boot",
        "Write and test new functionality using JUnit based on user’s requirements",
        "Monitor and troubleshoot database query performance",
        "Propose a cloud migration solution from the on-premises server to cloud using AWS",
        "Migrate on-premises server to AWS using Elastic beanstalk, RDS, OpenSearch etc…",
      )
    ),
    createWork(
      "StrawberryNet",
      "Programmer",
      "12/2021 - 02/2023",
      createWorkDuty(
        "Cooperating with front-end developer to write API using TypeScript Next.js",
        "Monitoring the technical performance of internal systems",
        "Create and maintain workflows with teams to provide visibility and to ensure workload balance for consistent visual designs",
        "Writing SQL Stored Procedures for better performance and maintainability",
      )
    ),
    createWork(
      "CCCCCc select",
      "Part Time Marketing Executive",
      "01/2021 - 06/2021",
      createWorkDuty(
        "Conducting research and analysing data to identify and define audiences",
        "Devising and presenting ideas and strategies",
        "Maintaining websites and looking at data analytics"
      )
    ),
  ];

  return (
    <Grid>
      {/* padding: "0% 0% 2% 20%", */}
      <Timeline
        position="alternate"
        style={{ backgroundColor: "", paddingLeft: 0 }}
      >
        {workExp.map((work, index) => {
          return <WorkDetail index={index} work={work}></WorkDetail>;
        })}
      </Timeline>

      {/* <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline> */}
    </Grid>
  );
}
