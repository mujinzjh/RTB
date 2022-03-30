/*
 * @Author: mujin
 * @Date: 2022-03-29 14:31:44
 * @LastEditTime: 2022-03-29 15:53:22
 * @Description: 
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay, EffectFade, Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/bundle';
import './index.scss'
import test from '../../assets/imgs/test.png';
import test1 from '../../assets/imgs/test1.png';
const createSlide = (list: any) => {
  if (!list || !list.length) {
    return (
      <>
        <SwiperSlide>
          <img src={test} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test1} alt="" />
        </SwiperSlide>
      </>
    )
  } else {
    return (
      <>
        {list.map((item: any) => {
          <SwiperSlide>{item.name}</SwiperSlide>
        })}
      </>
    )

  }
}

const _Swiper = (props: any) => {
  const { list } = props;
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      height={200}
      navigation={false}
      autoplay={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="swiper-content"
    >
      {
        createSlide(list)
      }
    </Swiper>
  )
}

export default _Swiper;