import React from 'react';
import styled from 'styled-components';
import WeddingBanner from '../../assets/images/wedding-banner-2-img.jpg';
import WeddingBackground from '../../assets/images/background-img-2.webp';

const StyledIntroduce = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  overflow: hidden;
`;
const BlockImage = styled.div`
  overflow: hidden;
  position: relative;
  height: 429px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(0deg, rgba(44, 44, 34, 0.2), rgba(44, 44, 34, 0.2));
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const BlockContent = styled.div`
  height: calc(100vh - 478px);
  overflow: hidden;

  padding: 24px;

  display: flex;
  flex-direction: column;

  position: relative;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  line-height: 120%;
  letter-spacing: 0.05em;
  margin-bottom: 12px;

  color: ${props => props.theme.colors.black2C2};

  font-family: "Brittany";
  padding: 12px 24px 0 0;
`;

const SubTitle = styled(Title)`
  font-size: 36px;
`;
const Name = styled(Title)`
  font-size: 26px;
  font-weight: 600;
  padding: 0;

  font-family: unset;
  text-align: right;
  text-transform: uppercase;
`;
const SubName = styled(Name)`
  font-size: 14px;
  color: unset;
`;
// const DateGroup = styled(Name)`
//   font-weight: 400;
//   text-transform: uppercase;
//   margin-bottom: 0;
//   margin-top: 16px;

//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;
// const DateText = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   display: block;

//   padding: 0 6px;
//   font-family: 'Lora'
// `;
/* const DateNumber = styled(DateText)`
  font-size: 24px;
  padding: 0 8px;
  font-weight: 600;
`; */
const BlockImageTopRight = styled.div`
  position: absolute;
  top: -30px;
  right: -60px;
  width: 180px;
  height: 180px;

  overflow: hidden;
  transform: rotate(200deg);
`;
const BlockImageBottomLeft = styled(BlockImageTopRight)`
  top: unset;
  right: unset;
  bottom: -30px;
  left: -60px;

  transform: rotate(-320deg);
`;

function Introduce() {
  return (
    <StyledIntroduce>
      <BlockImage>
        <Image src={WeddingBanner} alt='img' />
      </BlockImage>

      <BlockContent>
        <Title>Save</Title>
        <SubTitle>the</SubTitle>
        <Title>Date</Title>

        <Name>Thúy Nguyễn</Name>
        <SubName>and</SubName>
        <Name>Nhân Trương</Name>

        <BlockImageTopRight>
          <Image src={WeddingBackground} alt='img' />
        </BlockImageTopRight>
        <BlockImageBottomLeft>
          <Image src={WeddingBackground} alt='img' />
        </BlockImageBottomLeft>
      </BlockContent>
    </StyledIntroduce>
  )
}

export default Introduce