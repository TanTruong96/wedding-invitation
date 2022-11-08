import React, { useState } from 'react';
import styled from 'styled-components';
import LocationIcon from '../../assets/icons/ic-location.svg';
import MoneyTransfer from '../../assets/icons/ic-money.png';
import { BlockImage, Image } from '../../common/styles';
import CustomModal from '../Modal';
import TransferInfo from '../TransferInfo';

const StyledLocation = styled.div`
  position: fixed;
  bottom: 72px;
  max-width: 425px;
  width: 100%;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: right;
  row-gap: 16px;

  padding-right: 16px;
  z-index: 99;
`;
const CustomBlockImage = styled(BlockImage)`
  position: unset;
  cursor: pointer;
  padding: 4px;

  border-radius: 50%;
  background-color: ${props => props.theme.colors.yellowFFD};
`;

function Location({ location }) {
  const [isMapOpen, setMapOpen] = useState(false);
  const [isTransferOpen, setTransferOpen] = useState(false);

  return (
    <StyledLocation>
      {/* Money Transfer */}
      <CustomBlockImage
        customWidth={40}
        customHeight={40}
        onClick={() => setTransferOpen(true)}
      >
        <Image src={MoneyTransfer} alt='money-icon' />
      </CustomBlockImage>

      {/* Location */}
      <CustomBlockImage
        customWidth={40}
        customHeight={40}
        onClick={() => setMapOpen(true)}
      >
        <Image src={LocationIcon} alt='location-icon' />
      </CustomBlockImage>

      <CustomModal
        title="Vị trí"
        isOpen={isMapOpen}
        onClose={() => setMapOpen(false)}
      >
        <iframe
          title="location"
          src={location}
          width="425"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </CustomModal>

      <CustomModal
        title=""
        isOpen={isTransferOpen}
        onClose={() => setTransferOpen(false)}
      >
        <TransferInfo />
      </CustomModal>
    </StyledLocation>
  )
}

export default Location