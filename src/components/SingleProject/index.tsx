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

        <Typography variant="body2">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small" href={project.link} target='_blank'>Learn More</Button>
      </CardActions>
    </SingleProjectCard>
  );
}