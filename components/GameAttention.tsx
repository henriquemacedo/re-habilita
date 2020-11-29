import React, { useState } from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

import GameLegend from "./GameLegend";

const Wrapper = styled.View`
  height: 100%;
`;

const Cenas = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TouchArea = styled.View`
  width: 50%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export default function GameAttention() {
  const figures = [
    {
      name: "square",
      figure: require("../assets/images/figures/square.png"),
    },
    {
      name: "triangle",
      figure: require("../assets/images/figures/triangle.png"),
    },
    {
      name: "pentagon",
      figure: require("../assets/images/figures/pentagone.png"),
    },
    {
      name: "circle",
      figure: require("../assets/images/figures/circle.png"),
    },
  ];

  const chooseSolid = ["square", "triangle", "circle"];

  const [orderFigures, setOrderFigures] = useState(figures);
  const [solid, setSolid] = useState(["square"]);
  const [correct, setCorrect] = useState(false);

  const random = (array: any) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  random(figures);

  return (
    <Wrapper>
      <Cenas>
        {orderFigures.slice(0, 4).map((item, index) => (
          <TouchArea
            key={index}
            onTouchStart={() => {
              setCorrect(item.name === solid[0] ? true : false);
            }}
            onTouchEnd={() => {
              setOrderFigures(random(figures));
              setSolid(random(chooseSolid).slice(0, 1));
              setCorrect(false);
            }}
            style={{
              backgroundColor:
                item.name === solid[0] && correct ? "#81C784" : "transparent",
            }}
          >
            <Image source={item.figure} />
          </TouchArea>
        ))}
      </Cenas>
      <GameLegend legend={`Place the polyhedra on top of the ${solid}`} />
    </Wrapper>
  );
}
