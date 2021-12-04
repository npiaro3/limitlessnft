import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  OptionsIcon,
  NavMenu,
  NavItem,
  NavLinks,
  SigninButton,
  ButtonLink,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changedNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changedNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/ditto" onClick={toggleHome}>
            ditto.io
          </NavLogo>
          <OptionsIcon onClick={toggle}>
            <FaBars />
          </OptionsIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="meet"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                MEET THE TEAM
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                SERVICES
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                SIGN UP
              </NavLinks>
            </NavItem>
            <SigninButton>
              <ButtonLink to="/ditto">SIGN IN</ButtonLink>
            </SigninButton>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
