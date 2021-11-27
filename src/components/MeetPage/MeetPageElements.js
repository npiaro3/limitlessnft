import styled from "styled-components";

export const MeetPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const MeetPageContent = styled.div`
  position: absolute;
  margin-top: 140px;
`;

export const MeetPageHeader = styled.h1`
  color: #00adf7;
  font-size: 80px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
