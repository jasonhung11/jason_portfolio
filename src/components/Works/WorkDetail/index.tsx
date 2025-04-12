import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import WorkIcon from '@mui/icons-material/Work';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { Work } from '..';

import { Box, } from '@mui/material';


export default function WorkDetail(props: { work: Work, index: number }) {
    const { company, position, timeRange, duty, skills } = props.work
    const index = props.index
    return (
        <>
            <TimelineItem sx={{ marginBottom: "1rem" }}>
                <TimelineOppositeContent color="textSecondary">
                    <Typography variant="subtitle2" component="h4">{timeRange}</Typography>
                    <Typography variant="h5" component="h4" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                        {company}
                    </Typography>
                    <Typography variant="h5" component="h4" style={{ fontWeight: "bold" }}>
                        {position}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <WorkIcon />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    {skills.length > 0 && <>Tech Stacks: {' '}
                        <strong>{skills.join(', ')}</strong>
                    </>}
                    <Box>
                        <ul>
                            {duty}
                        </ul>

                    </Box>
                </TimelineContent>
            </TimelineItem>
        </>
    );
}