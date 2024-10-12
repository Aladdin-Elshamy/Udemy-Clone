import MainHeaderText from '../../elements/MainHeaderText';
import Text from '../../elements/Text';

const Title = () => {
	return (
		<div>
			<MainHeaderText
				text={'Game Development Fundamentals'}
				className={
					'text-2xl md:text-4xl lg:text-5xl font-custom font-bold'
				}
			/>
			<MainHeaderText
				text={'Courses'}
				className={
					'text-2xl md:text-4xl lg:text-5xl font-custom font-bold'
				}
			/>
			<Text
				text={
					'Learn the basics of creating video games through Game Development Fundamentals courses. Gain insight into game design, programming, and asset creation to develop engaging and interactive games. Ideal for aspiring game developers and designers.'
				}
				className={'mt-6 text-sm md:text-base w-100 md:w-2/3'}
			/>
		</div>
	);
};

export default Title;
