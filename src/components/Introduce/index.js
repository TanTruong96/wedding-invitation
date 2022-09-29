import React from 'react';
import styled from 'styled-components';
import WeddingBanner from '../../assets/images/introduce-img-4.png';
// import WeddingBackground from '../../assets/images/background-img-2.webp';

const StyledIntroduce = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  overflow: hidden;
`;
const BlockImage = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;

  &:before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(0deg, rgba(44, 44, 34, 0.4), rgba(44, 44, 34, 0.25));
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const BlockContent = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  padding: 60px 48px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;

  margin-bottom: 16px;
  color: ${props => props.theme.colors.yellowFFD};
  font-family: "Viaoda Libre";
`;
const Name = styled(Title)`
  font-size: 56px;
  font-weight: 600;
  line-height: 73px;

  margin: 0;
`;
const Date = styled(Title)`
  margin-bottom: 0;
  font-size: 18px;
`;

function Introduce() {
  return (
    <StyledIntroduce>
      <BlockImage>
        <Image src={WeddingBanner} alt='img' />
      </BlockImage>
      <BlockContent>
        <Title>Chúng tôi cưới</Title>
        <Name>Thúy Nguyễn</Name>
        <Name>&</Name>
        <Name>Nhân Trương</Name>
        <Date>26 . 12 . 2022</Date>
      </BlockContent>
    </StyledIntroduce>
  )
}

export default Introduce