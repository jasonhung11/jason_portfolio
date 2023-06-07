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
      "StrawberryNet",
      "Junior Programmer",
      "12/2021 - Now",
      createWorkDuty(
        "Develop front end from stretch (marketplace) ",
        "Coding for restful api",
        "Working with different departments"
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
    createWork(
      "YMCA HK",
      "Part Time Tutor",
      "10/2019 - 06/2020,",
      createWorkDuty(
        "Demonstrate academic competence in the subject area(s) and build a curriculum",
        "Maintain a growth mindset toward student learning and teaching practice",
        "Contribute to student learning, growth and advancement",
        "Facilitate problem-solving with a curious mind and critical thinking skills"
      )
    ),
  ];

  return (
    <Grid style={{}}>
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
