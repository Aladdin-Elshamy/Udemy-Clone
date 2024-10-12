import PlayCircleIcon from '@mui/icons-material/PlayCircle';
interface LessonCardProps {
	title: string;
	min: string;
}
const LessonCard = ({ title, min }: LessonCardProps) => {
	return (
		<div>
			<div>
				<PlayCircleIcon sx={{ fontSize: '50px' }} />
				<p className='my-6'>{title}</p>
				<p>{min}</p>
			</div>
		</div>
	);
};

export default LessonCard;
