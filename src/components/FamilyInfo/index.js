import React from 'react';
import styled, { css } from 'styled-components';

const StyledFamilyInfo = styled.div`
  overflow: hidden;
  padding: 48px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BlockTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0 24px;
  ${props => props.mb32 && css`
    margin-bottom: 32px;
  `}
`;
const BlockTopItem = styled.div`
  flex: 1 0 34%;

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const TextName = styled.p`
  text-align: center;
  font-size: ${props => props.fsInherit ? 'inherit' : '18px'};
  font-weight: 600;
  line-height: 120%;
  text-transform: ${props => props.textInitial ? 'initial' : 'capitalize'};
  color: ${props => props.theme.colors.black2C2};
  ${props => props.colorInherit && css`
    color: ${props => props.theme.colors.black565};
    font-weight: 500;
  `}

  margin-bottom: ${props => props.mb16 ? '16px' : '8px'};
  span {
    color: ${props => props.theme.colors.red9C1};
    padding: ${props => props.pdLeftRight ? '0 8px' : 0};
    ${props => props.pdLeftRight && css`
      &:nth-child(2) {
        border: 1px solid ${props => props.theme.colors.black565};
        border-top: 0;
        border-bottom: 0;
      }
    `}
  }
`;
const TextVocative = styled(TextName)`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: inherit;
`;
const TextAddress = styled(TextName)`
  text-align: center;
  font-size: inherit;
  font-weight: 500;
  color: inherit;
`;
const RedLine = styled.div`
  width: 150px;
  height: 2px;
  margin: 0 auto 40px;

  border-bottom: 2px solid ${props => props.theme.colors.redA24};
`;
const BlockMiddle = styled.div`
  margin-bottom: 40px;
`;
const MainName = styled.h1`
  font-size: 32px;
  color: ${props => props.theme.colors.redA24};
  font-weight: bold;
  line-height: 120%;
  letter-spacing: 0.05em;
  text-align: center;

  margin-bottom: 8px;
`;

function FamilyInfo() {
  return (
    <StyledFamilyInfo>
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

      <RedLine />

      <BlockTop mb32>
        <TextName textInitial>Trân trọng báo tin <span>Lễ Vu Quy</span></TextName>
        <TextName textInitial> của con chúng tôi</TextName>
      </BlockTop>

      <BlockMiddle>
        <MainName>Nguyễn Thị Thúy</MainName>
        <TextVocative>(Út Nữ)</TextVocative>
      </BlockMiddle>
      <RedLine />
      <BlockMiddle>
        <MainName>Trương Võ Hoài Nhân</MainName>
        <TextVocative>(Út Nam)</TextVocative>
      </BlockMiddle>

      <BlockTop mb32>
        <TextName textInitial mb16>Hôn lễ được cử hành tại <span>Tư gia</span></TextName>
        <TextName textInitial fsInherit pdLeftRight>
          <span>8h30</span>
          <span>26/12</span>
          <span>2022</span>
        </TextName>
        <TextName textInitial fsInherit colorInherit>(Nhằm ngày <span>4</span> tháng <span>Chạp</span> năm <span>Nhâm Dần</span>)</TextName>
      </BlockTop>

    </StyledFamilyInfo>
  )
}

export default FamilyInfo