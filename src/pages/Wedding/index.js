import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import CountDown from '../../components/CountDown';
import FamilyInfo from '../../components/FamilyInfo';
import Footer from '../../components/Footer';
import ImagesCarousel from '../../components/ImagesCarousel';
import Introduce from '../../components/Introduce';
import PartyInfo from '../../components/PartyInfo';
import WeddingStories from '../../components/WeddingStories';

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
  const timeStamp =  moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const finalDate = moment('2022-12-26 11:00:00', 'YYYY-MM-DD HH:mm:ss');
  return (
    <StyledWeddingPage>
      <Introduce />
      <FamilyInfo />
      <ImagesCarousel />
      <WeddingStories />
      <PartyInfo />
      <CountDown timeStamp={timeStamp} finalDate={finalDate} />
      <Footer />
      {/* <TransferInfo /> */}
      {/* <Location /> */}
    </StyledWeddingPage>
  )
}

export default WeddingPage