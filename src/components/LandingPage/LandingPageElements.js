import styled, { keyframes } from "styled-components";
import { MdExpandMore } from "react-icons/md";

export const LandingPageContainer = styled.div`
  background: blue;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 30px;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  /* :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%,
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)
    );
  } */
`;

export const LandingPageBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoScene = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #2323a4;
`;

export const LandingPageContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 34%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingHeader = styled.h1`
  color: #fff;
  font-size: 80px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const LandingParagraph = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const ScrollDownArrow = styled(MdExpandMore)`
  display: ${({ showScrollDown }) => (showScrollDown ? "inline" : "none")};
  font-size: 144px;
  color: white;
  position: fixed;
  bottom: 0;
  animation: ${pulsate} 2s ease infinite;
`;
