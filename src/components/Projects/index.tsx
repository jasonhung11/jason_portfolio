import { Grid } from "@mui/material";
// import SingleProject from "./SingleProject";
import { Box } from "@mui/system";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import * as React from "react";
import { Typography } from "@mui/material";
import SingleProject from "../SingleProject";
import { useMediaQuery } from "../../useMediaQuery";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface ProjectType {
  title: string;
  description: string;
  link: string;
}

function CreateProjectDetails(
  title: string,
  description: string,
  link: string
): ProjectType {
  return { title, description, link } as ProjectType;
}

const Project = (props: { project: ProjectType[] }) => {
  const { project } = props;
  return (
    <Grid>
      {project.map((item: ProjectType) => (
        <SingleProject project={item} />
      ))}
    </Grid>
  );
};

export default function Projects({
  isDesktopView,
}: {
  isDesktopView: boolean;
}) {
  const isMobileView = useMediaQuery("(min-width: 700px)");
  const projects = [
    CreateProjectDetails(
      "UST hackaython",
      "Design a dating app that bring people with similar hobbies together, aims to bring the user from the internet to the real world. ",
      ""
    ),
    CreateProjectDetails(
      "City hackaython",
      "Create a travel-based social media application in React native, and use serverless Architecture in AWS cloud to set up the service. People tend to travel by themselves rather than travel agency nowadays, as most of the information could be found online. ",
      ""
    ),
    CreateProjectDetails(
      "CTF 2021",
      "Continuous innovation in Internet technology development and applications has enhanced quality of life and work efficiency but at the same time has created various new cyber security challenges. By participating the competition, my cyber security skills have been strengthen and building teamwork, creative thinking and cyber security skills by solving those problems. ",
      "https://www.hkcert.org/event/capture-the-flag-challenge-2021"
    ),
  ];

  const sideProjects = [
    CreateProjectDetails(
      "Instagram Auto-following Bot (Python)",
      "Use AWS EC2 to follow target audience by getting the target list, which help business account to gain more exposure by following target audience\
      Receive email notification if there is any error",
      ""
    ),
    CreateProjectDetails(
      "Portfolio (React TS)",
      "Use React TS to write front-end code and use git Action to push it to AWS S3 static host for hosting",
      ""
    ),
    CreateProjectDetails(
      "Algorithmic Trading (Python)",
      "Place order on IB automatically using AWS technology, set tradingView alarm to trigger AWS lambda. And place it into AWS SQS and start up the connection with IB.",
      ""
    ),
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const projectGridStyle = {
    padding: isDesktopView ? "0% 15% 2% 15%" : "0% 5% 2% 5%",
  };

  return (
    <Grid style={projectGridStyle}>
      <Box sx={{ borderBottom: 1, borderColor: "#c9cdcc" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="inherit"
        >
          <Tab label="Side Projects" />
          <Tab label="IT Event" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Project project={sideProjects} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Project project={projects} />
      </TabPanel>
    </Grid>
  );
  {
    /*
            <Grid style={{padding: "0% 20% 2% 20%",}}>
                {projects.map((item) =>(
                    <SingleProject props={item} style={{boxShadow: "0.5rem 0.5rem 0.5rem 0.5rem lightcoral",}}/>
                ))}
            </Grid>
                */
  }
}
