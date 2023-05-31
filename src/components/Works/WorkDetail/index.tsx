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
        <Timeline position="left" style={{backgroundColor: '', paddingLeft: paddingLeftPercentage, width: '100%'}}>
            <TimelineItem>
                <TimelineContent style={{textAlign:'left'}}>
                    <Typography variant="h6" component="h4">{timeRange}</Typography>
                    <Typography variant="h5" component="h4" style={{fontWeight: "bold"}}>
                        {position}
                    </Typography>

                    <Typography>{company}</Typography>
                    <ul style={{listStyleType: "U+1F44D"}}>
                        {duty.map((detail, item) => {
                            return <li ><Typography variant="body1" component="h4" >{detail}</Typography></li>
                        })}
                    </ul>


                </TimelineContent>
                <TimelineSeparator>
                    <WorkIcon htmlColor="#C5C5C5">
                        {/*
                        <IconButton 
                        size="small"
                        onClick={() => {
                            window.open("", "_blank");
                        }}>
                            <StrawberryLogo style={{ height: 40, width: 40 }}></StrawberryLogo>
                        </IconButton>
                        */}
                    </WorkIcon>
                    <TimelineConnector />
                </TimelineSeparator>

            </TimelineItem>
        </Timeline>
    );
  }