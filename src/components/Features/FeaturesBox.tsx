import Features from '../../ui/Features/Features';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Divider from '@mui/material/Divider';
import MainHeaderText from '../../elements/MainHeaderText';
import StarIcon from '@mui/icons-material/Star';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const FeaturesBox = () => {
	return (
		<div className="my-5">
			<MainHeaderText
				text={'Why learn on Udemy?'}
				className="font-bold text-xl mb-2 ml-5"
			/>
			<Divider variant="fullWidth" orientation="horizontal" />
			<div className="flex flex-col md:flex-row ">
				<Features
					text={
						'Learn in-demand skills with over 250,000 video courses'
					}
					icon={
						<PlayArrowIcon
							sx={{
								padding: '5px',
								borderRadius: '50%',
								backgroundColor: '#D1D7DC',
								fontSize: '35px ',
								marginRight: '10px',
							}}
						/>
					}
				/>
				<Features
					text={'Choose courses taught by real-world experts'}
					icon={
						<StarIcon
							sx={{
								padding: '5px',
								borderRadius: '50%',
								backgroundColor: '#D1D7DC',
								fontSize: '35px ',
								marginRight: '10px',
							}}
						/>
					}
				/>
				<Features
					text={
						'Learn at your own pace, with lifetime access on mobile and desktop'
					}
					icon={
						<AllInclusiveIcon
							sx={{
								padding: '5px',
								borderRadius: '50%',
								backgroundColor: '#D1D7DC',
								fontSize: '35px ',
								marginRight: '10px',
							}}
						/>
					}
				/>
			</div>

			<Divider variant="fullWidth" orientation="horizontal" />
		</div>
	);
};

export default FeaturesBox;
