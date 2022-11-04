import React from 'react';
import styled, { css } from 'styled-components';
import { BlockWrapper, DashedLine } from '../../common/styles';

const Text = styled.p`
  font-size: 18px;
  text-align: center;

  margin-bottom: 8px;
  margin-top: ${props => props.mt48 ? '48px' : 0};
  color: ${props => props.theme.colors.brownBEA};
`;
const MainText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.colors.green386};

  margin-bottom: 32px;
`;
const TimeGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px 0;
`;
const TimeItem = styled.div`
  flex: 1 0 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  &:nth-child(2) {
    border: 2px solid ${props => props.theme.colors.orangeC05};
    border-top: 0;
    border-bottom: 0;
  }

  /* padding: 0 24px; */
`;
const TextRed = styled(Text)`
  color: ${props => props.theme.colors.orangeC05};
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0;

  ${props => props.fsLarge && css`
    font-size: 90px;
    font-weight: 600;
  `}
`;
const SubText = styled(Text)`
  font-size: 16px;
  margin-bottom: 48px;
`;
const TextInside = styled.span`
  font-weight: 600;
  ${props => props.orange && css`
    color: ${props => props.theme.colors.orangeC05};
  `}

  ${props => props.brown && css`
    color: ${props => props.theme.colors.brownBEA};
    font-style: italic;
  `}

  ${props => props.green && css`
    color: ${props => props.theme.colors.green386};
  `}
`;

function PartyInfo({ isVuQuy, data }) {
  return (
    <BlockWrapper>
      <DashedLine top />
      {/* <BlockImage>
        <Image src={FlowerImage} alt='img' />
      </BlockImage> */}
      <Text>{data.mainTitle}</Text>
      <MainText>{data.guess}</MainText>

      <Text>{data.meetingNote }</Text>
      <Text>{data.withFamily} <TextInside brown>{data.weddingPlace}</TextInside></Text>
      <Text mt48>{data.weddingTimeTitle}</Text>

      <TimeGroup>
        <TimeItem>
          <TextRed>
            {isVuQuy ? data.vuQuyTime : data.tanHonTime}
          </TextRed>
          <TextRed>
            {isVuQuy ? data.vuQuyWeekDays : data.tanHonWeekDays}
          </TextRed>
        </TimeItem>

        <TimeItem>
          <TextRed fsLarge>
            {isVuQuy ? data.vuQuyDate : data.tanHonDate}
          </TextRed>
        </TimeItem>

        <TimeItem>
          <TextRed>
            {isVuQuy ? data.vuQuyMonth : data.tanHonMonth}
          </TextRed>
          <TextRed>
            {isVuQuy ? data.vuQuyYear : data.tanHonYear}
          </TextRed>
        </TimeItem>
      </TimeGroup>
      <SubText>(Nhằm ngày{' '}
        <TextInside orange>
          {isVuQuy ? data.vuQuyNegativeDate : data.tanHonNegativeDate}
        </TextInside>
        {' '}tháng{' '}
        <TextInside orange>
          {isVuQuy ? data.vuQuyNegativeMonth : data.tanHonNegativeMonth}
        </TextInside>
        {' '}năm{' '}
        <TextInside orange>
          {isVuQuy ? data.vuQuyNegativeYear : data.tanHonNegativeYear}
        </TextInside>)
      </SubText>

      <Text>{data.presetTitle} <TextInside green>{data.guess}</TextInside></Text>
      <Text>{data.fun}</Text>
    </BlockWrapper>
  )
}

export default PartyInfo