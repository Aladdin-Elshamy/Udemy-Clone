import Numbers from '../../ui/Header/Numbers';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const NumberHeader = () => {
	return (
		<div>
			<div className="block md:hidden">
				<Swiper
					slidesPerView={2}
					spaceBetween={10}
					navigation
					modules={[Navigation]}
				>
					<SwiperSlide>
						<Numbers
							text={'Number of learners'}
							number={'3,249,113'}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Numbers text={'Total courses'} number={'1520'} />
					</SwiperSlide>
					<SwiperSlide>
						<Numbers
							text={'Active users'}
							number={'999'}
							icon={<HelpOutlineIcon />}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Numbers
							text={'Completed tasks'}
							number={'800'}
							icon={<StarIcon className="text-yellow-600" />}
						/>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="hidden md:flex">
				<Numbers text={'Number of learners'} number={'3,249,113'} />
				<div className="vr"></div>
				<Numbers text={'Total courses'} number={'1520'} />
				<div className="vr"></div>
				<Numbers
					text={'Active users'}
					number={'999'}
					icon={<HelpOutlineIcon />}
				/>
				<div className="vr"></div>
				<Numbers
					text={'Completed tasks'}
					number={'800'}
					icon={<StarIcon className="text-yellow-600" />}
				/>
			</div>
		</div>
	);
};

export default NumberHeader;
