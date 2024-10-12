import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import LessonCard from '../../ui/Lesson/LessonCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LessonSwiper = () => {
	return (
		<Swiper
			modules={[Pagination, Navigation]}
			spaceBetween={20}
			slidesPerView={3}
			pagination={{ clickable: true }}
			navigation={true}
			className="mt-10 mb-4"
			breakpoints={{
				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
			}}
		>
			<SwiperSlide className="border border-gray-300 w-fit py-10 px-4">
				<LessonCard
					title={'Unity & Mobile Game Development Tutorial'}
					min={'1 min video'}
				/>
			</SwiperSlide>
			<SwiperSlide className="border border-gray-300 w-fit py-10 px-4">
				<LessonCard
					title={'Unity & Mobile Game Development Tutorial'}
					min={'5 min video'}
				/>
			</SwiperSlide>
			<SwiperSlide className="border border-gray-300 w-fit py-10 px-4">
				<LessonCard
					title={'Unity & Mobile Game Development Tutorial'}
					min={'8 min video'}
				/>
			</SwiperSlide>
			<SwiperSlide className="border border-gray-300 w-fit py-10 px-4">
				<LessonCard
					title={'Unity & Mobile Game Development Tutorial'}
					min={'7 min video'}
				/>
			</SwiperSlide>
			<SwiperSlide className="border border-gray-300 w-fit py-10 px-4">
				<LessonCard
					title={'Unity & Mobile Game Development Tutorial'}
					min={'12 min video'}
				/>
			</SwiperSlide>
			<SwiperSlide className="border border-gray-300 w-fit py-10 px-4">
				<LessonCard
					title={'Unity & Mobile Game Development Tutorial'}
					min={'20 min video'}
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default LessonSwiper;
