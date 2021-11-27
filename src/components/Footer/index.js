import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkScroll,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  CopyRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/limitlessnft">About</FooterLink>
              <FooterLinkScroll to="about">How it works</FooterLinkScroll>
              <FooterLinkScroll to="meet">Meet The Team</FooterLinkScroll>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/limitlessnft">About Us</FooterLink>
              <FooterLink to="/limitlessnft">How it works</FooterLink>
              <FooterLink to="/limitlessnft">Investors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/limitlessnft">Instagram</FooterLink>
              <FooterLink to="/limitlessnft">Twitter</FooterLink>
              <FooterLink to="/limitlessnft">Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/limitlessnft" onClick={toggleHome}>
              limitlessNFT.io
            </SocialLogo>
            <CopyRights>
              limitlessNFT © {new Date().getFullYear()} All Rights reserved.
            </CopyRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.instagram.com/boredapeyachtclub/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/BoredApeYC"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://business.facebook.com/boredapeYC/?fref=nf"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
