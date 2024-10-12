import Text from '../../elements/Text';
import { stylesProps } from '../../types/types';


const Related = ({ text, className }: stylesProps) => {
	return (
		<div className={className}>
			<div>
				<Text
					text={text}
					className={
						'rounded-3xl p-2 px-4 bg-white border border-black w-fit m-1 text-center text-sm font-bold capitalize cursor-pointer hover:bg-gray-200'
					}
				/>
			</div>
		</div>
	);
};

export default Related;
