import React from 'react';
import { useLocation } from 'react-router';
import { TanHonData, VuQuyData, VUQUY_PATHNAME } from '../../common/data';
import { StyledWeddingPage } from '../../common/styles';
import CountDown from '../../components/CountDown';
import FamilyInfo from '../../components/FamilyInfo';
import Footer from '../../components/Footer';
import ImagesCarousel from '../../components/ImagesCarousel';
import Introduce from '../../components/Introduce';
import PartyInfo from '../../components/PartyInfo';
import WeddingStories from '../../components/WeddingStories';

function WeddingPage() {
  const location = useLocation();
  const weddingData = location?.pathname.includes(VUQUY_PATHNAME) ? VuQuyData : TanHonData;
  const isVuQuy =  location?.pathname.includes(VUQUY_PATHNAME) ? true : false

  return (
    <StyledWeddingPage>
      <Introduce data={weddingData.introduce} />
      <FamilyInfo isVuQuy={isVuQuy} data={weddingData.familyInfo} />
      <ImagesCarousel />
      <WeddingStories isVuQuy={isVuQuy} data={weddingData.introduce} />
      <PartyInfo isVuQuy={isVuQuy} data={weddingData.partyInfo} />
      <CountDown
        timeStamp={weddingData.timeStamp}
        finalDate={weddingData.finalDate}
      />
      <Footer />
      {/* <TransferInfo /> */}
      {/* <Location /> */}
    </StyledWeddingPage>
  )
}

export default WeddingPage