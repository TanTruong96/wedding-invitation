import React from 'react';
import { X } from 'react-feather';
import Modal from 'react-modal';
import styled from 'styled-components';

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
  height: ${props => props.noHeder ? '32px' : 'auto'};
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

function CustomModal({ children, title, isOpen, onClose }) {
  return (
    <StyledModal
    isOpen={isOpen}
    onRequestClose={() => onClose()}
    contentLabel={title}
    ariaHideApp={false}
  >
    <StyledModalContent>
      <StyledModalHeader noHeder={title ? false : true}>
        <ModalTitle>{title}</ModalTitle>
        <ModalClose onClick={() => onClose()}>
          <X />
        </ModalClose>
      </StyledModalHeader>

      <ModalBody>
        {children}
      </ModalBody>
    </StyledModalContent>
  </StyledModal>
  )
}

export default CustomModal