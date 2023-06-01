import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import WorkIcon from '@mui/icons-material/Work';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import IconButton from '@mui/material/IconButton';
import { Work } from '..';


export default function WorkDetail(props: {work: Work, index: number}) {
    const {company, position, timeRange, duty} = props.work
    const index = props.index 
    console.log(index, "index")
    var paddingLeftPercentage = index * 15 + '%';
    return (
        
            <TimelineItem>
                <TimelineSeparator>
                    <WorkIcon htmlColor="#C5C5C5"/>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography variant="h6" component="h4">{timeRange}</Typography>
                    <Typography variant="h5" component="h4" style={{fontWeight: "bold"}}>
                        {position}
                    </Typography>

                    <Typography variant="h6" component="h4" style={{fontWeight: "bold"}}>{company}</Typography>
                    {/* <ul style={{listStyleType: "U+1F44D"}}> */}
                        {duty.map((detail, item) => {
                            return <Typography variant="body1" component="h4" >- {detail}</Typography>
                        })}
                    {/* </ul> */}


                </TimelineContent>


            </TimelineItem>
    );
  }