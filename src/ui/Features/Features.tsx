import { ReactNode } from 'react';

interface FeaturesProps {
	text: string;
	icon: ReactNode;
}

const Features = ({ text, icon }: FeaturesProps) => {
	return (
		<div className='flex justify-start items-center p-5'>
			{icon}
			<p className='font-bold'>{text}</p>
		</div>
	);
};

export default Features;
