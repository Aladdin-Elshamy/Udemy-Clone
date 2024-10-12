import { stylesProps } from '../types/types';

const MainHeaderText = ({ text, className }: stylesProps) => {
	return (
		<div>
			<p className={className ? className : ''}>{text}</p>
		</div>
	);
};

export default MainHeaderText;
