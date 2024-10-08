import Filterbox from '../../ui/Courses/Filterbox';
import Title from '../../ui/Courses/Title';
import CourseContainer from './CourseContainer';

const Courses = () => {
	return (
		<div className="p-2 md:p-8">
			<Title />
			<Filterbox />
			<CourseContainer />
		</div>
	);
};

export default Courses;
