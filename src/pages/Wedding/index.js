import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router";
import WeddingAudio from "../../assets/audio/CoEmDoiBongVui-Chilliesmp3.mp3";
import { TanHonData, VuQuyData, VUQUY_PATHNAME } from "../../common/data";
import { StyledWeddingPage } from "../../common/styles";
import CountDown from "../../components/CountDown";
import FamilyInfo from "../../components/FamilyInfo";
import Footer from "../../components/Footer";
import ImagesCarousel from "../../components/ImagesCarousel";
import Introduce from "../../components/Introduce";
import Location from "../../components/Location";
import PartyInfo from "../../components/PartyInfo";
import WeddingStories from "../../components/WeddingStories";

function WeddingPage() {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(window.scrollY);
  const weddingData = location?.pathname.includes(VUQUY_PATHNAME)
    ? VuQuyData
    : TanHonData;
  const isVuQuy = location?.pathname.includes(VUQUY_PATHNAME) ? true : false;

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const body = document.body;
    body.dispatchEvent(new Event("click"));

    body.addEventListener("click", () => {
      document.getElementById("weddingAudio").play();
    });
  }, []);

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

      <audio id="weddingAudio" autoPlay loop>
        <source src={WeddingAudio} type="audio/mpeg" />
      </audio>
      {scrollY >= 800 && (
        <Location isVuQuy={isVuQuy} location={weddingData.location} />
      )}
      <Footer />
    </StyledWeddingPage>
  );
}

export default WeddingPage;
