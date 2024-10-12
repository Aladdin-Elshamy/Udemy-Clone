import MainHeaderText from '../../elements/MainHeaderText';
import Text from '../../elements/Text';
import AboutAccordion from '../../ui/About/AboutAccordion';
import Divider from '@mui/material/Divider';
import Lessons from '../Lessons/Lessons';

const About = () => {
	return (
		<div className="px-2 md:px-80 my-8">
			<MainHeaderText
				text={'Learn more about Game Development Fundamentals'}
				className="font-bold text-base md:text-3xl "
			/>
			<Text
				text={'Frequently asked questions'}
				className="font-bold text-base md:text-2xl mt-8"
			/>
			<Divider
				variant="fullWidth"
				orientation="horizontal"
				sx={{ marginTop: '25px' }}
			/>
			<AboutAccordion />

			<Lessons />
		</div>
	);
};

export default About;
