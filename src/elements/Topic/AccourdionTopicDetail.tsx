import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { AccordionTopicProps } from '../../types/types';

const AccourdionTopicDetail = ({
	topicTitle,
	topicNumber,
}: AccordionTopicProps) => {
	return (
		<div>
			<Box>
				<div className="flex justify-start items-center px-1">
					<FormControlLabel
						control={<Checkbox />}
						label={null}
						sx={{ margin: '0' }}
					/>
					<p className="text-xs">{topicTitle}</p>
					<p className="mx-1 text-gray-500 text-xs">
						({topicNumber})
					</p>
				</div>
			</Box>
		</div>
	);
};

export default AccourdionTopicDetail;
