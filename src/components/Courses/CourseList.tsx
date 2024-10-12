import React from 'react';
import Divider from '@mui/material/Divider';
import CourseCard from '../../ui/Courses/CourseCard';
import { courses } from '../../data/constant';
import PaginationCourses from '../../ui/Courses/PaginationCourses';

const CourseList: React.FC = () => {
	return (
		<div>
			{courses.map(course => (
				<div key={course.id}>
					<CourseCard course={course} />
					<Divider variant="fullWidth" orientation="horizontal" />
				</div>
			))}
			<PaginationCourses />
		</div>
	);
};

export default CourseList;
