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

export default function Projects({isDesktopView}: {isDesktopView: boolean}) {
  const isMobileView = useMediaQuery("(min-width: 700px)");
  const projects = [
    CreateProjectDetails(
      "UST hackaython",
      "use program to auto follow user to reach more target audience",
      ""
    ),
    CreateProjectDetails(
      "City hackaython",
      "descibe myself and express my skill set",
      ""
    ),
    CreateProjectDetails(
      "CFT 2021",
      "descibe myself and express my skill set",
      ""
    ),
  ];

  const sideProjects = [
    CreateProjectDetails(
      "Instagram Auto-following Bot",
      "Allow user to gain more exposure by following target audience",
      ""
    ),
    CreateProjectDetails(
      "Portfolio",
      "descibe myself and express my skill set",
      ""
    ),
    CreateProjectDetails(
      "Portfolio",
      "descibe myself and express my skill set",
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
        <Tabs value={value} onChange={handleChange} centered textColor="inherit">
          <Tab label="IT Event" />
          <Tab label="Side Projects" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Project project={projects} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Project project={sideProjects} />
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
