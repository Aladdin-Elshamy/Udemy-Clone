import Text from '../../elements/Text';
import { StylesNumberProps } from '../../types/types';

const Numbers = ({ text, number, className, icon }: StylesNumberProps) => {
	return (
		<div className={`flex ${className}`}>
			<div className="m-4">
				<Text text={text} className={'mt-6 text-sm'} />
				<div className="flex items-center">
					<Text text={number} className={'text-base font-bold'} />
					{icon && <span className="ml-2">{icon}</span>}
				</div>
			</div>
		</div>
	);
};

export default Numbers;
