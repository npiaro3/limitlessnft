import React from "react";
import { useMotionValue, useTransform } from "framer-motion";
import {
  CardWrapper,
  TeamMember1,
  TeamMember2,
  TeamMember3,
  Image,
} from "./TeamCardsElements";
import Matt from "../../images/matt.png";
import Brian from "../../images/brian.jpeg";
import Nyima from "../../images/nyima.JPG";

const TeamCards = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <TeamMember1
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <Image src={Matt} />
      </TeamMember1>
      <TeamMember2
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <Image src={Brian} />
      </TeamMember2>
      <TeamMember3
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <Image src={Nyima} />
      </TeamMember3>
    </CardWrapper>
  );
};

export default TeamCards;
