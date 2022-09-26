import React from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSlideTwo from '../../assets/images/wedding-banner-2-img.jpg';
import ImageSlideThree from '../../assets/images/wedding-banner-3-img.jpg';
import ImageSlideOne from '../../assets/images/wedding-banner-img.jpg';
import { MainTitle } from '../../common/styles';

const StyledImagesCarousel = styled.div`
  padding: 48px 16px;

  display: flex;
  flex-direction: column;
`;
const CarouselSwiper = styled.div`
  height: 360px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 32px;
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
const ImagesGallary = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;
const ImageItem = styled.li`
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: transparent;
  }
  &:hover {
    &:before {
      z-index: 9;
      background: linear-gradient(0deg, rgba(44, 44, 34, 0.2), rgba(44, 44, 34, 0.2));
    }
    > img {
      transform: scale(1.24);
    }
  }
`;
const ImageViewMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ViewMoreBtn = styled.button`
  width: fit-content;
  height: 40px;

  padding: 0 24px;

  border-radius: 4px;
  text-align: center;
  font-weight: 500;

  color: ${props => props.theme.colors.black2C2};
  border: 1px solid ${props => props.theme.colors.black2C2};

  cursor: pointer;
  background-color: transparent;
  font-family: inherit;
`;

function ImagesCarousel() {
  return (
    <StyledImagesCarousel>
      <MainTitle>Album ảnh cưới</MainTitle>
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
            <ImageSlide src={ImageSlideOne} alt='img-slide' />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSlide src={ImageSlideTwo} alt='img-slide' />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSlide src={ImageSlideThree} alt='img-slide' />
          </SwiperSlide>
        </Swiper>
      </CarouselSwiper>

      <ImagesGallary>
        <ImageList>
          <ImageItem>
            <ImageSlide src={ImageSlideOne} alt='img-slide' />
          </ImageItem>
          <ImageItem>
            <ImageSlide src={ImageSlideOne} alt='img-slide' />
          </ImageItem>
          <ImageItem>
            <ImageSlide src={ImageSlideOne} alt='img-slide' />
          </ImageItem>
          <ImageItem>
            <ImageSlide src={ImageSlideOne} alt='img-slide' />
          </ImageItem>
        </ImageList>

        <ImageViewMore>
          <ViewMoreBtn>Xem Thêm</ViewMoreBtn>
        </ImageViewMore>
      </ImagesGallary>
    </StyledImagesCarousel>
  )
}

export default ImagesCarousel