import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainHeaderText from '../MainHeaderText';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccourdionTopicDetail from '../Topic/AccourdionTopicDetail';
export default function AccordionTopic() {
	return (
		<div>
			<Accordion sx={{ border: 'none', boxShadow: 'none' }}>
				
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<MainHeaderText text={'Topic'} className="font-bold" />
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionTopicDetail
						topicTitle={'game development fundementals'}
						topicNumber={20}
					/>
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionTopicDetail
						topicTitle={'unity'}
						topicNumber={20}
					/>
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionTopicDetail
						topicTitle={'c# programing language'}
						topicNumber={20}
					/>
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionTopicDetail
						topicTitle={'blender'}
						topicNumber={20}
					/>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
