import React, { useEffect, useState } from 'react';
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
import Location from '../../components/Location';

function WeddingPage() {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(window.scrollY);
  const weddingData = location?.pathname.includes(VUQUY_PATHNAME) ? VuQuyData : TanHonData;
  const isVuQuy =  location?.pathname.includes(VUQUY_PATHNAME) ? true : false;

  useEffect(() => {
    const handleScroll = event => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

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
      {scrollY >= 800 && (
        <Location
          location={weddingData.location}
        />
      )}
    </StyledWeddingPage>
  )
}

export default WeddingPage