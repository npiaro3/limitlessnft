import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
`;

export const Card1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #dec5a8;
  position: absolute;
  cursor: grab;
  z-index: 1;
  margin-top: 40px;
  overflow: hidden;
`;

export const Card2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 0 2px 7px 2px rgba(31, 31, 31, 0.2);
  background-color: #638596;
  position: absolute;
  cursor: grab;
  z-index: 2;
  margin: 240px 0px 0px 300px;
  overflow: hidden;
`;

export const Card3 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 0 2px 7px 3px rgba(31, 31, 31, 0.2);
  background-color: #ef972c;
  position: absolute;
  cursor: grab;
  z-index: 3;
  margin-left: 560px;
  overflow: hidden;
`;

export const Image = styled.img`
  margin-top: 50px;
  margin-bottom: 80px;
`;
