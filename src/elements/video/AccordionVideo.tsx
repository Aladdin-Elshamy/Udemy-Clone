import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainHeaderText from '../MainHeaderText';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccourdionVideoDetail from './AccourdionVideoDetail';
export default function AccordionVideo() {
	return (
		<div>
			<Accordion sx={{ border: 'none', boxShadow: 'none' }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<MainHeaderText
						text={'Video Duration'}
						className="font-bold"
					/>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionVideoDetail
						hourNumber={'0-3'}
						videoNumber={20}
					/>
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionVideoDetail
						hourNumber={'1-2'}
						videoNumber={20}
					/>
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionVideoDetail
						hourNumber={'3-6'}
						videoNumber={20}
					/>
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionVideoDetail
						hourNumber={'1-3'}
						videoNumber={20}
					/>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
