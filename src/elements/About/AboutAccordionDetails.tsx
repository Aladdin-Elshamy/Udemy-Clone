import AccordionDetails from '@mui/material/AccordionDetails';

interface AboutAccordionDetailsProp {
	text: string;
}
const AboutAccordionDetails = ({ text }: AboutAccordionDetailsProp) => {
	return (
		<div>
			<AccordionDetails>{text}</AccordionDetails>
		</div>
	);
};

export default AboutAccordionDetails;
