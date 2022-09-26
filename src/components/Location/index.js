import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../../common/styles';

const StyledLocation = styled.div`
  padding: 48px 16px;
`;
const LocationIframe = styled.div`
  border-radius: 10px;
  overflow: hidden;

  height: 400px;
`;


function Location() {
  return (
    <StyledLocation>
      <MainTitle>Vị Trí</MainTitle>
      <LocationIframe>
        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.676482773882!2d109.24225059999999!3d12.928502699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fe6e41cad2e81%3A0x7a62b9cf8c2d1020!2zQ2FuaCBUaW5oLCBIb8OgIFRo4buLbmgsIFTDonkgSMOyYSwgUGjDuiBZw6pu!5e0!3m2!1svi!2s!4v1664204562791!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </LocationIframe>
    </StyledLocation>
  )
}

export default Location