import React from "react";
import { useMotionValue, useTransform } from "framer-motion";
import { CardWrapper, Card1, Card2, Card3, Image } from "./DisplayCardElements";
import BoredApe from "../../images/boredape.png";
import CoolCat from "../../images/coolcat.png";
import CryptoPunk from "../../images/cryptopunk.png";

const DisplayCards = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <Card1
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
        <Image src={CoolCat} />
      </Card1>
      <Card2
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
        <Image src={CryptoPunk} />
      </Card2>
      <Card3
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
        <Image src={BoredApe} />
      </Card3>
    </CardWrapper>
  );
};

export default DisplayCards;
