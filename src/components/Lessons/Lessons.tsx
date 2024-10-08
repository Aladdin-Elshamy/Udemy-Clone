import { Link } from 'react-router-dom';
import LessonTitle from '../../ui/Lesson/LessonTitle';
import LessonSwiper from './LessonSwiper';

const Lessons = () => {
	return (
		<div>
			<LessonTitle />
			<LessonSwiper />
			<Link to="/" className="text-purple-800 capitalize font-bold">
				view free game development fundementals courses
			</Link>
		</div>
	);
};

export default Lessons;
