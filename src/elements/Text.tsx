import { stylesProps } from '../types/types';

const Text = ({ text, className }: stylesProps) => {
	return (
		<div>
			<p className={className ? className : ''}>{text}</p>
		</div>
	);
};

export default Text;
