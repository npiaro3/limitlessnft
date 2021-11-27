import React, { useState, useEffect } from "react";
import Video from "../../videos/space.mp4";
import NavBar from "../NavBar";
import {
  LandingPageContainer,
  LandingPageBackground,
  VideoScene,
  LandingPageContent,
  LandingHeader,
  LandingParagraph,
  ScrollDownArrow,
} from "./LandingPageElements";

const LandingPage = ({ toggle }) => {
  const [hover, setHover] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const onHover = () => {
    setHover(!hover);
  };

  const changeScroll = () => {
    if (window.scrollY > 0) {
      setShowScrollDown(false);
    } else {
      setShowScrollDown(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  }, []);

  return (
    <LandingPageContainer>
      <NavBar toggle={toggle} />
      <LandingPageBackground>
        <VideoScene autoPlay loop muted src={Video} type="video/mp4" />
      </LandingPageBackground>
      <LandingPageContent>
        <LandingHeader>LimitlessNFT</LandingHeader>
        <LandingParagraph>Dare to explore the Unknown</LandingParagraph>
        <ScrollDownArrow
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          showScrollDown={showScrollDown}
        />
      </LandingPageContent>
    </LandingPageContainer>
  );
};

export default LandingPage;
