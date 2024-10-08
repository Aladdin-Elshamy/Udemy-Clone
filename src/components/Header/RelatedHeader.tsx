import Related from '../../ui/Header/Related';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const RelatedHeader = () => {
	return (
		<div className="bg-gray-100 p-4">
			<div className="flex justify-between items-center">
				<p className="font-bold capitalize pt-2 text-black">Related</p>
			</div>
			
			<div className="block md:hidden">
				<Swiper
					slidesPerView={1}
					spaceBetween={2}
					navigation 
					modules={[Navigation]} 
				>
					<SwiperSlide>
						<Related text={'development'} className={''} />
					</SwiperSlide>
					<SwiperSlide>
						<Related text={'design'} className={''} />
					</SwiperSlide>
					<SwiperSlide>
						<Related text={'game development'} className={''} />
					</SwiperSlide>
					<SwiperSlide>
						<Related text={'other IT & software'} className={''} />
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="hidden md:flex">
				<Related text={'development'} className={''} />
				<Related text={'design'} className={''} />
				<Related text={'game development'} className={''} />
				<Related text={'other IT & software'} className={''} />
			</div>
		</div>
	);
};

export default RelatedHeader;
