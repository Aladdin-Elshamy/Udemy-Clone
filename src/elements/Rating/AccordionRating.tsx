import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import MainHeaderText from '../MainHeaderText';
import AccourdionDetail from './AccourdionDetail';
export default function AccordionRating() {
	return (
		<div>
			<Accordion defaultExpanded
				sx={{ border: 'none', boxShadow: 'none' }}
				>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<MainHeaderText text={'Ratings'} className="font-bold" />
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionDetail rating={4.5} reviewCount={50} />
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionDetail rating={4} reviewCount={114} />
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionDetail rating={3.5} reviewCount={210} />
				</AccordionDetails>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccourdionDetail rating={3} reviewCount={110} />
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
