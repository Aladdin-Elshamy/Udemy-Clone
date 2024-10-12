import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { AccordionVideoProps } from '../../types/types';

const AccourdionVideoDetail = ({
	hourNumber,
	videoNumber,
}: AccordionVideoProps) => {
	return (
		<div>
			<Box>
				<div className="flex justify-start items-center ml-7">
					<FormControlLabel control={<Checkbox />} label={null} />
					<p className="font-medium">{hourNumber}</p>
					<p className="mx-1 font-medium">hours</p>
					<p className="ml-1 text-gray-500">({videoNumber})</p>
				</div>
			</Box>
		</div>
	);
};

export default AccourdionVideoDetail;
