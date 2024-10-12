export interface Course {
	id: number;
	image: string;
	title: string;
	description: string;
	instructors: string;
	team: string;
	rating: number;
	totalHours: string;
	lectures: number;
	price: number;
	oldPrice: number;
	totalReviews: number;
}

export interface AccordionCoursesProps {
	rating: number;
	reviewCount: number;
}

export interface AccordionTopicProps {
	topicTitle: string;
	topicNumber: number;
}

export interface AccordionVideoProps {
	hourNumber: string;
	videoNumber: number;
}

export interface CourseCardProps {
	course: Course;
}

export type stylesProps = {
	className?: string;
	text: string;
};

export type StylesNumberProps = {
	className?: string;
	text: string;
	number: string;
	icon?: JSX.Element;
};
