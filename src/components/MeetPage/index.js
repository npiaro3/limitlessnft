import React from "react";
import TeamCards from "../TeamCards";
import {
  MeetPageContainer,
  MeetPageContent,
  MeetPageHeader,
} from "./MeetPageElements";

const MeetPage = () => {
  return (
    <MeetPageContainer id="meet">
      <MeetPageContent>
        <MeetPageHeader>Meet The Team</MeetPageHeader>
      </MeetPageContent>
      <TeamCards />
    </MeetPageContainer>
  );
};

export default MeetPage;
