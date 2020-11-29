import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

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

  const [orderFigures, setOrderFigures] = useState(figures);

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
            onTouchEnd={() => {
              setOrderFigures(random(figures));
              // console.log("touchEnd", e.nativeEvent);
              // console.log(orderFigures);
              // random(figures);
            }}
          >
            <Image source={item.figure} />
            {/* <Text>{item.name}</Text> */}
          </TouchArea>
        ))}
      </Cenas>
      <GameLegend legend="Place the polyhedra on top of the square" />
    </Wrapper>
  );
}
