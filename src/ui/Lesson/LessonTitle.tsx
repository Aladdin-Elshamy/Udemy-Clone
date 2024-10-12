import MainHeaderText from '../../elements/MainHeaderText';
import Text from '../../elements/Text';

const LessonTitle = () => {
	return (
		<div>
			<MainHeaderText
				text={'Free Game Development Fundamentals lessons'}
				className="font-bold  text-base md:text-3xl mt-20"
			/>
			<Text
				text={'Bite-sized learning in minutes'}
				className=" text-sm"
			/>
		</div>
	);
};

export default LessonTitle;
