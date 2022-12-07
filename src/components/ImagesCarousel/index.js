import React from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import HeartImage from '../../assets/images/heart-img.png';
import ImageSlideOne from '../../assets/images/img-wedding-album-10.jpg';
// import ImageSlideEight from '../../assets/images/img-wedding-album-11.jpg';
// import ImageSlideNine from '../../assets/images/img-wedding-album-12.jpg';
import ImageSlideThree from '../../assets/images/img-wedding-album-3.jpg';
import ImageSlideFour from '../../assets/images/img-wedding-album-4.jpg';
import ImageSlideTwo from '../../assets/images/img-wedding-album-7.jpg';
import ImageSlideSix from '../../assets/images/img-wedding-album-8.jpg';
import ImageSlideFive from '../../assets/images/img-wedding-album-9.jpg';
import ImageSlideEight from '../../assets/images/img-wedding-album-13.jpg';
import ImageSlideSeven from '../../assets/images/wedding-banner-2-img.jpg';
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
  border-radius: 10px;
`;

const dataSlide = [
  {
    id: 1,
    image: ImageSlideOne,
  },
  {
    id: 2,
    image: ImageSlideTwo,
  },
  {
    id: 3,
    image: ImageSlideThree,
  },
  {
    id: 4,
    image: ImageSlideFour,
  },
  {
    id: 5,
    image: ImageSlideFive,
  },
  {
    id: 6,
    image: ImageSlideSix,
  },
  {
    id: 7,
    image: ImageSlideSeven,
  },
  {
    id: 8,
    image: ImageSlideEight,
  },
  // {
  //   id: 9,
  //   image: ImageSlideNine,
  // },
];

function ImagesCarousel() {
  return (
    <BlockWrapper>
      <BlockTop>
        <CustomMainTitle>Khoảnh khắc ngọt ngào</CustomMainTitle>
        <BlockImage>
          <Image src={HeartImage} alt='slide-image' />
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
          {dataSlide.map(item => (
            <SwiperSlide key={item.id}>
              <ImageSlide srcSet={`${item.image} 2x`} alt='slide-image' />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselSwiper>
    </BlockWrapper>
  )
}

export default ImagesCarousel