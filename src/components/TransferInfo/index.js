import React from 'react';
import styled, { css } from 'styled-components';

const StyledTransferInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 16px;
`;
const MainTitle = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.black2C2};
  font-weight: 600;
  text-align: center;

  margin-bottom: 32px;
`;
const TabsHeader = styled.div`
  display: flex;
  align-items: center;
`;
const TabInfo = styled.div`
  flex: 1 0 34%;
  height: 40px;

  padding: 0 24px;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  cursor: pointer;

  ${props => props.tabActive && css`
    color: ${props => props.theme.colors.black2C2};
    font-weight: 500;
    border-bottom: 1px solid ${props => props.theme.colors.black2C2};
  `}
`;
const TabsContent = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RowInfo = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  &:not(:last-child) {
    border-bottom: 1px dashed ${props => props.theme.colors.black565};
  }
`;
const TextTitle = styled.h4`
  font-size: 16px;
  color: ${props => props.theme.colors.black2C2};
  text-align: center;
  ${props => props.widthFull && css`
    flex: 1;
  `}
`;
const TextDes = styled.span`
  font-size: 16px;
`;

function TransferInfo() {
  return (
    <StyledTransferInfo>
      <MainTitle>
        Gửi lời chúc đến đôi uyên ương
      </MainTitle>
      <TabsHeader>
        <TabInfo tabActive>Cô dâu</TabInfo>
        <TabInfo>Chú rể</TabInfo>
      </TabsHeader>
      <TabsContent>
        <RowInfo><TextTitle widthFull>Nguyễn Thị Thúy</TextTitle></RowInfo>
        <RowInfo><TextTitle>SĐT </TextTitle><TextDes>0977325665</TextDes></RowInfo>
        <RowInfo><TextTitle>MB Bank </TextTitle><TextDes>0977325665</TextDes></RowInfo>
        <RowInfo><TextTitle>Momo </TextTitle><TextDes>0977325665</TextDes></RowInfo>
      </TabsContent>
    </StyledTransferInfo>
  )
}

export default TransferInfo