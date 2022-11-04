import React from 'react';
import styled, { css } from 'styled-components';
import FlowerImage from '../../assets/images/wedding-flower-2-img.png';

const StyledFamilyInfo = styled.div`
  overflow: hidden;
  padding: 48px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`;
const BlockTop = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0 24px;

  z-index: 9;

  ${props => props.mb32 && css`
    margin-bottom: 32px;
  `}
`;
const BlockTopItem = styled.div`
  flex: 1 0 34%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;
const TextName = styled.p`
  font-size: ${props => props.fsInherit ? 'inherit' : '18px'};
  font-weight: 600;
  font-family: 'Playfair Display', sans-serif;
  text-align: center;

  line-height: 120%;
  text-transform: ${props => props.textInitial ? 'initial' : 'capitalize'};
  color: ${props => props.theme.colors.green386};

  ${props => props.colorInherit && css`
    color: ${props => props.theme.colors.brownBEA};
    font-weight: 600;
  `}

  margin-bottom: ${props => props.mb16 ? '16px' : '8px'};
  /* span {
    color: ${props => props.theme.colors.red9C1};
    padding: ${props => props.pdLeftRight ? '0 8px' : 0};
    ${props => props.pdLeftRight && css`
      &:nth-child(2) {
        border: 1px solid ${props => props.theme.colors.black565};
        border-top: 0;
        border-bottom: 0;
      }
    `}
  } */
`;
const TextVocative = styled(TextName)`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.brownBEA};

  border-bottom: 1px dashed ${props => props.theme.colors.brownBEA};
  width: fit-content;

  ${props => props.displayBlock && css`
    display: block;
    width: 100%;
    border: 0;

    margin-bottom: 24px;
  `}

  span {
    font-size: 12px;
  }
`;
const TextAddress = styled(TextName)`
  text-align: center;
  font-size: inherit;
  font-weight: 500;
  font-size: 16px;
  font-style: italic;
  color: ${props => props.theme.colors.brownBEA};
`;
const DashedLine = styled.div`
  width: 150px;
  height: 2px;
  margin: 0 auto 40px;

  border-bottom: 2px dashed ${props => props.theme.colors.brownBEA};
`;
const BlockMiddle = styled.div`
  margin-bottom: 16px;
`;
const MainName = styled.h1`
  font-family: 'Playfair Display', sans-serif;
  font-size: 32px;
  font-weight: bold;
  font-style: italic;

  color: ${props => props.theme.colors.green386};
  line-height: 120%;
  letter-spacing: 0.05em;
  text-align: center;

  margin-bottom: 8px;
`;
const TextTime = styled.span`
  font-size: 16px;
  font-weight: inherit;
  color: ${props => props.theme.colors.brownBEA};
  padding: 0 2px;
`;
const BlockTimeLine = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
`;
const BlockImage = styled.div`
  width: 140px;
  padding: 16px;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

function FamilyInfo() {
  return (
    <StyledFamilyInfo>
      <BlockImage>
        <Image src={FlowerImage} alt='img' />
      </BlockImage>
      <BlockTop>
        <BlockTopItem>
          <TextVocative>Nhà Gái</TextVocative>
          <TextName>Nguyễn Xuân Hương & Nguyễn Thị Ngà</TextName>
          <TextAddress>Thôn Mỹ Xuân 2, X. Hoà Thịnh, H. tây Hoà, Phú yên</TextAddress>
        </BlockTopItem>

        <BlockTopItem>
          <TextVocative>Nhà Trai</TextVocative>
          <TextName>Trương Văn Lập & Võ Thị Thuộc</TextName>
          <TextAddress> Thôn 2, X. Đức Hạnh, H. Đức Linh, Bình Thuận</TextAddress>
        </BlockTopItem>
      </BlockTop>

      <DashedLine />

      <BlockTop mb32>
        <TextName colorInherit textInitial>Trân trọng báo tin Lễ Vu Quy</TextName>
        <TextName colorInherit textInitial> của con chúng tôi</TextName>
      </BlockTop>

      <BlockMiddle>
        <MainName>Nguyễn Thị Thúy</MainName>
      </BlockMiddle>
      <TextVocative displayBlock>Út Nữ <span>x</span> Út Nam</TextVocative>
      <BlockMiddle>
        <MainName>Trương Võ Hoài Nhân</MainName>
      </BlockMiddle>

      <BlockTimeLine>
        <TextName textInitial mb16 colorInherit>Hôn lễ được cử hành tại <span>Tư gia</span></TextName>
        <TextName textInitial fsInherit pdLeftRight>
          <TextTime>8h30 | </TextTime>
          <TextTime>26/12/2022</TextTime>
        </TextName>
        <TextName textInitial fsInherit colorInherit>
          (Nhằm ngày 4 tháng Chạp năm Nhâm Dần)
        </TextName>
      </BlockTimeLine>

    </StyledFamilyInfo>
  )
}

export default FamilyInfo