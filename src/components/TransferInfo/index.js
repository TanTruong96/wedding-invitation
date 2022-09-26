import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MainTitle } from '../../common/styles';

const StyledTransferInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 16px;
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

const data = [
  {
    id: 1,
    name: 'Nguyễn Thị Thúy',
    representative: 'Cô dâu',
    phoneNumber: '0977325665',
    bankNumber: '0977325665',
    momoNumber: '0977325665',
  },
  {
    id: 2,
    name: 'Trương Võ Hoài Nhân',
    representative: 'Chú rễ',
    phoneNumber: '0902667040',
    bankNumber: '828384859999',
    momoNumber: '0902667040',
  },
];


function TransferInfo() {
  const [tabActive, setTabActive] = useState(1);
  const [tabInfo, setTabInfo] = useState(data[0]);

  const handleActiveTabClick = (id) => {
    const info = data.find(item => item.id === id);
    setTabActive(id);
    setTabInfo(info);
  };

  return (
    <StyledTransferInfo>
      <MainTitle>
        Gửi lời chúc đến đôi uyên ương
      </MainTitle>
      <TabsHeader>
        {data.map(item => (
          <TabInfo
            tabActive={tabActive === item.id}
            onClick={() => handleActiveTabClick(item.id)}
          >
            {item.representative}
          </TabInfo>
        ))}
      </TabsHeader>
      <TabsContent>
        <RowInfo><TextTitle widthFull>{tabInfo?.name}</TextTitle></RowInfo>
        <RowInfo><TextTitle>SĐT </TextTitle><TextDes>{tabInfo.phoneNumber}</TextDes></RowInfo>
        <RowInfo><TextTitle>MB Bank </TextTitle><TextDes>{tabInfo.bankNumber}</TextDes></RowInfo>
        <RowInfo><TextTitle>Momo </TextTitle><TextDes>{tabInfo.momoNumber}</TextDes></RowInfo>
      </TabsContent>
    </StyledTransferInfo>
  )
}

export default TransferInfo