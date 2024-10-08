import Divider from '@mui/material/Divider';
import AccordionRating from '../../elements/Rating/AccordionRating';
import AccordionVideo from '../../elements/video/AccordionVideo';
import AccordionTopic from '../../elements/Topic/AccordionTopic';

const AccordionList = () => {
	return (
		<div>
			<AccordionRating />
			<Divider />
			<AccordionVideo />
			<Divider />
			<AccordionTopic />
			<Divider />
			<Divider />
			<AccordionVideo />
			<Divider />
			<AccordionTopic />
			<Divider />
			<AccordionVideo />
			<Divider />
			<AccordionTopic />
			<Divider />
			<Divider />
			<AccordionVideo />
			<Divider />
			<AccordionTopic />
		</div>
	);
};
export default AccordionList;
