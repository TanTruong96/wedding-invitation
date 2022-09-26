import React from 'react';
import styled, { css } from 'styled-components';

const StyledPartyInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 16px;
`;
const Text = styled.p`
  font-size: 18px;
  text-align: center;

  margin-bottom: 8px;
  margin-top: ${props => props.mt48 ? '48px' : 0};
  color: ${props => props.theme.colors.black2C2};

  span {
    color: ${props => props.theme.colors.red9C1};
    font-weight: 500;
  }
`;
const MainText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.colors.red9C1};

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
    border: 2px solid ${props => props.theme.colors.red9C1};
    border-top: 0;
    border-bottom: 0;
  }

  /* padding: 0 24px; */
`;
const TextRed = styled(Text)`
  color: ${props => props.theme.colors.red9C1};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;

  ${props => props.fsLarge && css`
    font-size: 48px;
    font-weight: 600;
  `}
`;
const SubText = styled(Text)`
  font-size: 16px;
  color: inherit;
  margin-bottom: 48px;
  span {
    color: ${props => props.theme.colors.red9C1};
  }
`;

function PartyInfo() {
  return (
    <StyledPartyInfo>
      <Text>Trân trọng kính mời</Text>
      <MainText>Quý khách</MainText>

      <Text>Đến dự buổi tiệc </Text>
      <Text>chung vui cùng gia đình chúng tôi tại <span>Tư gia</span></Text>
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
      <SubText>(Nhằm ngày <span>04</span> tháng <span>Chạp</span> năm <span>Nhâm Dần</span>)</SubText>

      <Text>Sự hiện diện của <span>Quý khách</span></Text>
      <Text>là niềm vinh dự cho gia đình chúng tôi</Text>
    </StyledPartyInfo>
  )
}

export default PartyInfo