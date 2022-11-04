import React from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import HeartImage from '../../assets/images/heart-img.png';
import ImageSlideTwo from '../../assets/images/img-wedding-album-2.jpg';
import ImageSlideThree from '../../assets/images/img-wedding-album-3.jpg';
import ImageSlideOne from '../../assets/images/img-wedding-album-1.jpg';
import ImageSlideFour from '../../assets/images/img-wedding-album-4.jpg';
import ImageSlideFive from '../../assets/images/img-wedding-album-5.jpg';
import ImageSlideSix from '../../assets/images/img-wedding-album-6.jpg';
import { BlockWrapper, MainTitle } from '../../common/styles';

const BlockTop = styled.div`
  width: 100%;
  position: absolute;
  top: 32px;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9;
`;
const BlockImage = styled.div`
  width: 40px;
  position: absolute;
  top: 0;
  right: 6px;

  z-index: 9;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const CustomMainTitle = styled(MainTitle)`
  width: fit-content;

  font-size: 18px;
  background-color: ${props => props.theme.colors.pinkFDA};
  color: ${props => props.theme.colors.whiteFFF};

  border-radius: 20px;
  padding: 6px 16px;

`;
const CarouselSwiper = styled.div`
  height: 360px;
  border-radius: 10px;
  overflow: hidden;
  /* margin-bottom: 32px; */
  border: 2px solid ${props => props.theme.colors.pinkFDA};
  .mySwiper {
    width: 100%;
    height: 100%;

    .swiper-button-prev, .swiper-button-next {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      overflow: hidden;
      top: 55%;
      padding: 2px;

      background: linear-gradient(0deg, rgba(44, 44, 34, 0.4), rgba(44, 44, 34, 0.4));
      &:after {
        font-size: 14px;
        color: ${props => props.theme.colors.whiteFFF};
      }
    }
    .swiper-button-prev {
      left: 16px;
    }
    .swiper-button-next {
      right: 16px;
    }
  }
`;
const ImageSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ease 400ms;
`;

function ImagesCarousel() {
  return (
    <BlockWrapper>
      <BlockTop>
        <CustomMainTitle>Khoảnh khắc ngọt ngào</CustomMainTitle>
        <BlockImage>
          <Image src={HeartImage} alt='img' />
        </BlockImage>
      </BlockTop>
      <CarouselSwiper>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            {/* <ImageSlide srcSet={`${ImageSlideOne} 2x`} alt='img-slide' /> */}
            <ImageSlide src={ImageSlideOne} alt='img-slide' />
          </SwiperSlide>
          <SwiperSlide>
            {/* <ImageSlide srcSet={`${ImageSlideTwo} 2x`} alt='img-slide' /> */}
            <ImageSlide src={ImageSlideTwo} alt='img-slide' />
          </SwiperSlide>
          <SwiperSlide>
            {/* <ImageSlide srcSet={`${ImageSlideThree} 2x`} alt='img-slide' /> */}
            <ImageSlide src={ImageSlideThree} alt='img-slide' />
          </SwiperSlide>
          <SwiperSlide>
            {/* <ImageSlide srcSet={`${ImageSlideFour} 2x`} alt='img-slide' /> */}
            <ImageSlide src={ImageSlideFour} alt='img-slide' />
          </SwiperSlide>
          <SwiperSlide>
            {/* <ImageSlide srcSet={`${ImageSlideFive} 2x`} alt='img-slide' /> */}
            <ImageSlide src={ImageSlideFive} alt='img-slide' />
          </SwiperSlide>
          <SwiperSlide>
            {/* <ImageSlide srcSet={`${ImageSlideSix} 2x`} alt='img-slide' /> */}
            <ImageSlide src={ImageSlideSix} alt='img-slide' />
          </SwiperSlide>
        </Swiper>
      </CarouselSwiper>
    </BlockWrapper>
  )
}

export default ImagesCarousel