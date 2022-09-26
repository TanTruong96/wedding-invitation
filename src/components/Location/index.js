import React from 'react';
import styled from 'styled-components';

const StyledLocation = styled.div`
  padding: 48px 16px;
`;
const MainTitle = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.black2C2};
  font-weight: 600;
  text-align: center;

  margin-bottom: 32px;
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
        <iframe title='localtion' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4435923676087!2d106.62563971524126!3d10.853826360727165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1664116366111!5m2!1svi!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </LocationIframe>
    </StyledLocation>
  )
}

export default Location