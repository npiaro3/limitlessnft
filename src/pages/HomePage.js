import React, { useState } from "react";
import Footer from "../components/Footer";
import InfoPage from "../components/InfoPage";
import LandingPage from "../components/LandingPage";
import MeetPage from "../components/MeetPage";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <LandingPage toggle={toggle} />
      <InfoPage />
      <MeetPage />
      <Footer />
    </>
  );
};

export default HomePage;
