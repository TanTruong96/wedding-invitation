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
  font-family: 'Playfair Display';
  text-align: center;

  line-height: 120%;
  text-transform: ${props => props.textInitial ? 'initial' : 'capitalize'};
  color: ${props => props.theme.colors.green386};

  ${props => props.colorInherit && css`
    color: ${props => props.theme.colors.beigeB49};
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
  color: ${props => props.theme.colors.beigeB49};

  border-bottom: 1px dashed ${props => props.theme.colors.beigeB49};
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
  color: ${props => props.theme.colors.beigeB49};
`;
const DashedLine = styled.div`
  width: 150px;
  height: 2px;
  margin: 0 auto 40px;

  border-bottom: 2px dashed ${props => props.theme.colors.beigeB49};
`;
const BlockMiddle = styled.div`
  margin-bottom: 16px;
`;
const MainName = styled.h1`
  font-family: 'Playfair Display';
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
  color: ${props => props.theme.colors.beigeB49};
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

function FamilyInfo({ data, isVuQuy }) {
  return (
    <StyledFamilyInfo>
      <BlockImage>
        <Image src={FlowerImage} alt='img' />
      </BlockImage>
      <BlockTop>
        <BlockTopItem>
          <TextVocative>
            {isVuQuy ? data.vuQuyTitle : data.tanHonTitle}
          </TextVocative>
          <TextName>
            {isVuQuy ? data.vuQuyParents : data.tanHonParents}
          </TextName>
          <TextAddress>
            {isVuQuy ? data.vuQuyAddress : data.tanHonAddress}
          </TextAddress>
        </BlockTopItem>

        <BlockTopItem>
          <TextVocative>
            {!isVuQuy ? data.vuQuyTitle : data.tanHonTitle}
          </TextVocative>
          <TextName>
            {!isVuQuy ? data.vuQuyParents : data.tanHonParents}
          </TextName>
          <TextAddress>
            {!isVuQuy ? data.vuQuyAddress : data.tanHonAddress}
          </TextAddress>
        </BlockTopItem>
      </BlockTop>

      <DashedLine />
      <BlockTop mb32>
        <TextName colorInherit textInitial>
          {data.noticeTitle}{' '}{isVuQuy ? data.vuQuyWedding : data.tanHonWedding}
        </TextName>
        <TextName colorInherit textInitial> c???a con ch??ng t??i:</TextName>
      </BlockTop>

      <BlockMiddle>
        <MainName>
          {isVuQuy ? data.vuQuyBride : data.tanHonGroom}
        </MainName>
      </BlockMiddle>
      <TextVocative displayBlock>
        {isVuQuy ? data.vuQuyVocative : data.tanHonVocative} <span>x</span>{' '}
        {!isVuQuy ? data.vuQuyVocative : data.tanHonVocative}
      </TextVocative>
      <BlockMiddle>
        <MainName>{!isVuQuy ? data.vuQuyBride : data.tanHonGroom}</MainName>
      </BlockMiddle>

      <BlockTimeLine>
        <TextName textInitial mb16 colorInherit>
          {data.noticeWedding}:<span> {data.weddingPlace}</span>
        </TextName>
        <TextName textInitial fsInherit pdLeftRight>
          <TextTime>
            {isVuQuy ? data.vuQuyTime : data.tanHonTime} |
          </TextTime>
          <TextTime>
            {isVuQuy ? data.vuQuyDate : data.tanHonDate}
          </TextTime>
        </TextName>
        <TextName textInitial fsInherit colorInherit>
          ( {isVuQuy ? data.vuQuyNegativeDate : data.tanHonNegativeDate} )
        </TextName>
      </BlockTimeLine>
    </StyledFamilyInfo>
  )
}

export default FamilyInfo