import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { AccordionCoursesProps } from '../../types/types';

const AccourdionDetail = ({ rating, reviewCount }: AccordionCoursesProps) => {
	return (
		<div>
			<Box>
				<div className="flex justify-start items-center ml-7">
					<FormControlLabel control={<Radio />} label={null} />
					<Stack spacing={0} sx={{ marginRight: '5px' }}>
						<Rating
							name="half-rating-read"
							value={rating}
							precision={0.5}
							sx={{
								fontSize: '15px',
								color: '#B4690E',
							}}
						/>
					</Stack>
					<p className="font-medium">{rating}</p>
					<p className="mx-1 font-medium">&</p>
					<p className="font-medium">up</p>
					<p className="ml-1 text-gray-500">({reviewCount})</p>
				</div>
			</Box>
		</div>
	);
};

export default AccourdionDetail;
