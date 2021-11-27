import styled from "styled-components";

export const InfoPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const InfoPageContent = styled.div`
  position: absolute;
  left: 0;
  width: 40%;
  height: 100%;
  padding: 0px 44px 120px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background: lightblue;
`;

export const InfoPageHeader = styled.h1`
  color: #00adf7;
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoPageParagraph = styled.p`
  margin-top: 24px;
  color: #00adf7;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SupportingDisplayContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  width: 60%;
  height: 100%;
  padding: 140px 44px 120px 80px;
  background: lightblue;
`;
