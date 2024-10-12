import React from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { CourseCardProps } from '../../types/types';

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center md:items-start my-4 cursor-pointer">
			<img className="w-1/3" src={course.image} alt={course.title} />
			<div className="mx-4 text-center md:text-left">
				<div className="font-bold text-lg capitalize">
					{course.title}
				</div>
				<div className="text-sm text-gray-700 mb-1">
					<p>{course.description}</p>
				</div>
				<div className="text-sm text-gray-400">
					<p>Instructors: {course.instructors}</p>
				</div>
				<div className="text-sm text-gray-400">
					<p>Team: {course.team}</p>
				</div>
				<div className="text-sm text-gray-700 my-1 flex justify-center md:justify-start items-center">
					<span className="font-bold">{course.rating}</span>
					<Stack spacing={1}>
						<Rating
							name="half-rating"
							defaultValue={course.rating}
							precision={0.5}
							sx={{
								fontSize: '15px',
								color: '#B4690E',
							}}
						/>
					</Stack>
					<span>out of 5 {course.rating}</span>
				</div>
				<div className="text-sm text-gray-400">
					<p>
						({course.totalReviews}) {course.totalHours} total hours
						{course.lectures} lectures All Level
					</p>
				</div>
			</div>
			<div>
				<p className="font-bold">EL{course.price}</p>
				<del>EL{course.oldPrice}</del>
			</div>
		</div>
	);
};

export default CourseCard;
