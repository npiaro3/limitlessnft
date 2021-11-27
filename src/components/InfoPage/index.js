import React from "react";
import DisplayCards from "../Card";
import {
  InfoPageContainer,
  InfoPageContent,
  InfoPageHeader,
  InfoPageParagraph,
  SupportingDisplayContainer,
} from "./InfoPageElements";

const InfoPage = () => {
  return (
    <InfoPageContainer id="about">
      <InfoPageContent>
        <InfoPageHeader>How It Works</InfoPageHeader>
        <InfoPageParagraph>
          NFT stands for non-fungible token. Simply put, it is a digital token
          that exists on the blockchain to record proof of ownership for the
          person holding it. Each token is completely unique because it has its
          own unique metadata which can never be replicated or replaced for
          another. We provide a service that automatically refreshes this
          metadata for you.
        </InfoPageParagraph>
      </InfoPageContent>
      <SupportingDisplayContainer>
        <DisplayCards />
      </SupportingDisplayContainer>
    </InfoPageContainer>
  );
};

export default InfoPage;
