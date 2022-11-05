import React, { useRef, useState } from 'react';
import { X } from 'react-feather';
import Modal from 'react-modal';
import styled, { keyframes } from 'styled-components';
import LocationIcon from '../../assets/icons/ic-location.svg';
import { BlockImage, Image } from '../../common/styles';

const StyledLocation = styled.div`
  position: fixed;
  bottom: 72px;
  max-width: 425px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: right;

  padding-right: 16px;
  z-index: 99;
`;
const rotateYHover = keyframes`
  from {
    transform: rotateY(0deg);
  };
  to {
    transform: rotateY(360deg);
  };
`;
const rotateYLeave = keyframes`
  from {
    transform: rotateY(0deg);
  };
  to {
    transform: rotateY(-360deg);
  };
`;
const CustomBlockImage = styled(BlockImage)`
  position: unset;
  cursor: pointer;
  padding: 4px;

  border-radius: 50%;
  background-color: ${props => props.theme.colors.yellowFFD};
  &:hover {
    animation-name: ${rotateYLeave};
    animation-duration: 1s;
    animation-iteration-count: 1;
    /* linear | ease | ease-in | ease-out | ease-in-out */
    animation-timing-function: ease-in-out;
  }
  &.rotateBack {
    animation-name: ${rotateYHover};
    animation-duration: 1s;
    animation-iteration-count: 1;
    /* linear | ease | ease-in | ease-out | ease-in-out */
    animation-timing-function: ease-in-out;
  }
`;
const StyledModal = styled(Modal)`
  max-width: 425px;
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  z-index: 999;

  border: 0;
  padding: 24px 16px;

`;
const StyledModalContent = styled.div`
  width: 100%;
  min-height: 480px;

  background-color: ${props => props.theme.colors.beigeF5E};
  position: relative;
  border-radius: 4px;

  padding: 0 16px;
`;
const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  padding: 12px 0;

  overflow: hidden;
`;
const ModalTitle = styled.h1`
  flex-grow: 1;
  text-align: center;
  color: ${props => props.theme.colors.black2C2};
  font-size: 24px;
`;
const ModalClose = styled.button`
  position: absolute;
  top: 12px;
  right: 0;

  width: 32px;
  height: 32px;

  background-color: transparent;
  border: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props => props.theme.colors.black2C2};
    width: 16px;
    height: 16px;
  }
`;
const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  overflow: hidden;

  padding: 16px 0;

  iframe {
    border-radius: 4px;
    width: 100%;
  }
`;

function Location() {
  const ref = useRef();
  const [isMapOpen, setMapOpen] = useState(false);

  const handleActiveAnimation = () => {
    ref.current.classList.add("rotateBack");

    setTimeout(() => {
      ref.current.classList.remove("rotateBack");
    }, 1000);
  }

  const handleMapLocationOpen = () => {
    setMapOpen(true);
  }

  return (
    <StyledLocation>
      <CustomBlockImage
        ref={ref}
        customWidth={40}
        customHeight={40}
        onMouseLeave={handleActiveAnimation}
        onClick={handleMapLocationOpen}
      >
        <Image src={LocationIcon} alt='location-icon' />
      </CustomBlockImage>

      <StyledModal
        isOpen={isMapOpen}
        onRequestClose={() => setMapOpen(false)}
        contentLabel="Vị trí"
        ariaHideApp={false}
      >
        <StyledModalContent>
          <StyledModalHeader>
            <ModalTitle>Vị trí</ModalTitle>
            <ModalClose onClick={() => setMapOpen(false)}>
              <X />
            </ModalClose>
          </StyledModalHeader>

          <ModalBody>
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.676482773882!2d109.24225059999999!3d12.928502699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fe6e41cad2e81%3A0x7a62b9cf8c2d1020!2zQ2FuaCBUaW5oLCBIb8OgIFRo4buLbmgsIFTDonkgSMOyYSwgUGjDuiBZw6pu!5e0!3m2!1svi!2s!4v1664204562791!5m2!1svi!2s" width="425" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </ModalBody>
        </StyledModalContent>
      </StyledModal>
    </StyledLocation>
  )
}

export default Location