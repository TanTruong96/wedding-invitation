import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BlockImage, Image, MainTitle } from '../../common/styles';
import BrideIcon from '../../assets/images/wedding-avt-female-img.png';
import GroomIcon from '../../assets/images/wedding-avt-male-img.png';
import MomoTransfer from '../../assets/images/img-money-transfer.png';

const StyledTransferInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const TabsHeader = styled.div`
  display: flex;
  align-items: center;
`;
const TabInfo = styled.div`
  flex: 1 0 34%;
  padding: 12px 24px;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 16px;
  cursor: pointer;
  opacity: 0.6;

  ${props => props.tabActive && css`
    opacity: 1;
    border-bottom: 1px solid ${props => props.theme.colors.green386};

    span {
      color: ${props => props.theme.colors.black2C2};
      font-weight: 600;
    }
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
const CustomMainTitle = styled(MainTitle)`
  font-size: 20px;
  margin-bottom: 24px;
`;
const CustomBlockImage = styled(BlockImage)`
  position: unset;
  border-radius: ${props => props.noBackground ? "4px" : "50%"};
  padding: 4px;
  background-color: ${props => props.noBackground ? "unset" : props.theme.colors.green386};

  img {
    border-radius: ${props => props.noBackground ? "4px" : "50%"};
    border: 1px solid ${props => props.theme.colors.whiteFFF};
  }
`;

const data = [
  {
    id: 1,
    name: 'Nguyễn Thị Thúy',
    representative: 'Cô dâu',
    phoneNumber: '0977325665',
    bankNumber: '0977325665',
    momoNumber: '0977325665',
    icon: BrideIcon,
    transfer: "https://me.momo.vn/9vI3uQIztgszsDFoIwfZ",
  },
  {
    id: 2,
    name: 'Trương Võ Hoài Nhân',
    representative: 'Chú rể',
    phoneNumber: '0902667040',
    bankNumber: '828384859999',
    momoNumber: '0902667040',
    icon: GroomIcon,
    transfer: "https://me.momo.vn/9vI3uQIztgszsDFoIwfZ",
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
      <CustomMainTitle>
        Gửi lời chúc đến đôi uyên ương
      </CustomMainTitle>
      <TabsHeader>
        {data.map(item => (
          <TabInfo
            key={item.id}
            tabActive={tabActive === item.id}
            onClick={() => handleActiveTabClick(item.id)}
          >
            <CustomBlockImage customWidth={40} customHeight={40}>
              <Image src={item.icon} alt="transfer-icon" />
            </CustomBlockImage>
            <span>{item.representative}</span>
          </TabInfo>
        ))}
      </TabsHeader>
      <TabsContent>
        <RowInfo>
          <TextTitle widthFull>
            {tabInfo?.name}
          </TextTitle>
        </RowInfo>
        {/* <RowInfo><TextTitle>SĐT </TextTitle><TextDes>{tabInfo.phoneNumber}</TextDes></RowInfo> */}
        <RowInfo>
          <TextTitle>MB Bank </TextTitle>
          <TextDes>{tabInfo.bankNumber}</TextDes>
        </RowInfo>
        <RowInfo>
          <CustomBlockImage noBackground>
            <a href={tabInfo.transfer} target="_blank" without rel="noreferrer">
              <Image src={MomoTransfer} alt="transfer-image" />
            </a>
          </CustomBlockImage>
        </RowInfo>
      </TabsContent>
    </StyledTransferInfo>
  )
}

export default TransferInfo