import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface AboutAccordionTitleProp {
	title: string;
}
const AboutAccordionTitle = ({ title }: AboutAccordionTitleProp) => {
	return (
		<div>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1-content"
				id="panel1-header"
				className="font-bold text-sm md:text-xl capitalize"
			>
				{title}
			</AccordionSummary>
		</div>
	);
};

export default AboutAccordionTitle;
