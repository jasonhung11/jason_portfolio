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
  description: string | JSX.Element;
  link: string;
  skills: string[]
}

function CreateProjectDetails(
  title: string,
  description: string | JSX.Element,
  link: string,
  skills: string[]
): ProjectType {
  return { title, description, link, skills } as ProjectType;
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
      "",
      []
    ),
    CreateProjectDetails(
      "City hackaython",
      "Create a travel-based social media application in React native, and use serverless Architecture in AWS cloud to set up the service. People tend to travel by themselves rather than travel agency nowadays, as most of the information could be found online. ",
      "",
      []
    ),
    CreateProjectDetails(
      "CTF 2021",
      "Continuous innovation in Internet technology development and applications has enhanced quality of life and work efficiency but at the same time has created various new cyber security challenges. By participating the competition, my cyber security skills have been strengthen and building teamwork, creative thinking and cyber security skills by solving those problems. ",
      "https://www.hkcert.org/event/capture-the-flag-challenge-2021",
      []
    ),
  ];

  const sideProjects = [
    CreateProjectDetails(
      "Stock Tracker ",
      <>This is a web app I built where users can track their favorite stocks and get notified when prices hit a target. I used React with TypeScript for the front end, and let users add stocks to their personal watchlist. Behind the scenes, the app <b>fetches real-time stock data from a third-party API and checks if any tracked stock meets the user’s alert criteria</b>. It’s hosted on AWS S3 with CI/CD handled by GitHub Actions, so updates are smooth and automated. Super handy for keeping an eye on the market without constantly checking.</>,
      "",
      ["ReactTS", "Java Spring Boot", "RESTful API", "AWS RDS", "AWS S3 hosting", "Github Actions"]
    ),
    CreateProjectDetails(
      "Instagram Auto-following Bot ",
      <>This is a Python-based automation bot I built to help with audience growth on Instagram.<b> It runs on AWS EC2 and connects to the Instagram API to automatically follow users based on a target list</b>. The bot identifies potential followers by pulling usernames from competitor or niche accounts, then interacts with them to increase visibility. It was a fun project to dive deeper into automation, APIs, and cloud hosting.</>,
      "", ["Python", "AWS EC2", "AWS RDS"]
    ),
    CreateProjectDetails(
      "Portfolio",
      "I built this website using React with TypeScript to showcase my projects, experience, and skills as a software engineer. It’s a simple, responsive site that highlights my journey and the work I’ve done so far. I’m using GitHub Pages for deployment and set up GitHub Actions for automatic updates whenever I push changes. It’s my little corner of the internet where I can keep everything organized and share my work with others."

      ,
      "", ["ReactTS", "Material UI", "Docker", "Github Pages", "Github Actions"]
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
