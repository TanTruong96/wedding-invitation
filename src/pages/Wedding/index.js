import React from 'react';
import styled from 'styled-components';
import FamilyInfo from '../../components/FamilyInfo';
import ImagesCarousel from '../../components/ImagesCarousel';
import Introduce from '../../components/Introduce';
import Location from '../../components/Location';
import TransferInfo from '../../components/TransferInfo';

const StyledWeddingPage = styled.div`
  overflow: hidden;

  max-width: 425px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.beigeF5E};
`;

function WeddingPage() {
  return (
    <StyledWeddingPage>
      <Introduce />
      <FamilyInfo />
      <ImagesCarousel />
      <TransferInfo />
      <Location />
    </StyledWeddingPage>
  )
}

export default WeddingPage