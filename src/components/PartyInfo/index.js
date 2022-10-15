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

function PartyInfo() {
  return (
    <BlockWrapper>
      <DashedLine top />
      {/* <BlockImage>
        <Image src={FlowerImage} alt='img' />
      </BlockImage> */}
      <Text>Trân trọng kính mời</Text>
      <MainText>Quý khách</MainText>

      <Text>Đến dự buổi tiệc </Text>
      <Text>chung vui cùng gia đình chúng tôi tại <TextInside brown>Tư gia</TextInside></Text>
      <Text mt48>Vào lúc</Text>

      <TimeGroup>
        <TimeItem>
          <TextRed>11:00</TextRed>
          <TextRed>Thứ 2</TextRed>
        </TimeItem>

        <TimeItem>
          <TextRed fsLarge>26</TextRed>
        </TimeItem>

        <TimeItem>
          <TextRed>Tháng 12</TextRed>
          <TextRed>Năm 2022</TextRed>
        </TimeItem>
      </TimeGroup>
      <SubText>(Nhằm ngày <TextInside orange>04</TextInside> tháng <TextInside orange>Chạp</TextInside> năm <TextInside orange>Nhâm Dần</TextInside>)</SubText>

      <Text>Sự hiện diện của <TextInside green>Quý khách</TextInside></Text>
      <Text>là niềm vinh dự cho gia đình chúng tôi</Text>
    </BlockWrapper>
  )
}

export default PartyInfo