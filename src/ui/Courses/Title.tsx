import MainHeaderText from '../../elements/MainHeaderText';
import Text from '../../elements/Text';
import InfoIcon from '@mui/icons-material/Info';

const Title = () => {
	return (
		<div>
			<MainHeaderText
				text={'All Game Development Fundamentals courses'}
				className={'text-xl md:text-2xl lg:text-3xl font-bold'}
			/>

			<div className="flex items-center mt-6  border border-gray-300 p-5">
				<InfoIcon className=" mr-4" /> {/* Add icon */}
				<Text
					text={
						'Not sure? All courses have a 30-day money-back guarantee'
					}
					className={'text-sm md:text-base font-medium'}
				/>
			</div>
		</div>
	);
};

export default Title;
