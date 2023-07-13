import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectType } from '../Projects';
import { SingleProjectCard } from './styles';

  
export default function SingleProject(props: {project: ProjectType} ) {
    const project = props.project
    const colorList = []

  return (
    <SingleProjectCard sx={{
      ':hover': {
        transform: "scale(1.05)", // theme.shadows[20]
      },
    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>

        <Typography variant="body2" style={{marginTop: "3%", padding: "0 1%"}}>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        {project.link !== "" &&  <Button color="secondary" size="small" href={project.link} target='_blank'>Learn More</Button>}
       
      </CardActions>
    </SingleProjectCard>
  );
}