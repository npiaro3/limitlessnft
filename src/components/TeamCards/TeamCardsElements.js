import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  margin-top: 300px;
  margin-left: 300px;
`;

export const TeamMember1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #00adf7;
  position: absolute;
  cursor: grab;
  overflow: hidden;
`;

export const TeamMember2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 0 2px 7px 2px rgba(31, 31, 31, 0.2);
  background-color: #00adf7;
  position: absolute;
  cursor: grab;
  margin: 0px 0px 0px 380px;
  overflow: hidden;
`;

export const TeamMember3 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 0 2px 7px 3px rgba(31, 31, 31, 0.2);
  background-color: #00adf7;
  position: absolute;
  cursor: grab;
  margin: 0px 0px 0px 760px;
  overflow: hidden;
`;

export const Image = styled.img`
  margin-top: 50px;
  margin-bottom: 80px;
  border-radius: 50%;
`;
