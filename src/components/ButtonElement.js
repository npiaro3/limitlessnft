import styled from "styled-components";

import { Link as LinkScroll } from "react-scroll";

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#00adf7" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#00adf7")};
  }
`;

// uncomment below lines and use where neccesary

// //import
// import { Button } from "../ButtonElement";

// // put this in the React Render statement for components
// <LandingButtonWrapper>
//   <Button
//     to="signup"
//     onMouseEnter={onHover}
//     onMouseLeave={onHover}
//     primary="true"
//     dark="true"
//   >
//     Get Started {hover ? <ArrowForward /> : <ArrowRight />}
//   </Button>
// </LandingButtonWrapper>;

// //styling imports
// import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

// // actually styling
// export const LandingButtonWrapper = styled.div`
//   margin-top: 32px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const ArrowForward = styled(MdArrowForward)`
//   margin-left: 8px;
//   font-size: 20px;
// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//   margin-left: 8px;
//   font-size: 20px;
// `;
