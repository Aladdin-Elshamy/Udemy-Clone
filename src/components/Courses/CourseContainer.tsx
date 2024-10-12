import Divider from '@mui/material/Divider';
import AccordionCourses from '../../ui/Courses/AccordionList';
import Card from './CourseList';

const CourseContainer = () => {
	return (
		<div className="flex mt-5">
			<div className="w-1/3 p-4 hidden xl:block">
				<Divider />
				<div>
					<AccordionCourses />
				</div>
			</div>

			<div className="w-full md:w-3/4 bg-white p-4">
				<Card />
			</div>
		</div>
	);
};

export default CourseContainer;
