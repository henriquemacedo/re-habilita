import React, { useState } from "react";
import styled from "styled-components/native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import GameLegend from "./GameLegend";

const Wrapper = styled.View`
  height: 100%;
`;

const GameArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TouchArea = styled.View`
  border: 5px solid #4527a0;
  border-radius: 20px;
  width: 200px;
  height: 200px;
`;

const Word = styled.Text`
  margin: 0 15px;
  font-size: 100px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default function GameLanguage() {
  const colorScheme = useColorScheme();

  const words = [
    {
      start: "s",
      end: "gar",
    },
    {
      start: "positiv",
      end: "",
    },
    {
      start: "bas",
      end: "et",
    },
    {
      start: "s",
      end: "bway",
    },
    {
      start: "",
      end: "andscape",
    },
    {
      start: "s",
      end: "ower",
    },
    {
      start: "bre",
      end: "d",
    },
    {
      start: "pe",
      end: "per",
    },
    {
      start: "",
      end: "ove",
    },
    {
      start: "rainbo",
      end: "",
    },
  ];

  const [orderFigures, setOrderFigures] = useState(words);
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

  random(words);

  return (
    <Wrapper>
      <GameArea>
        {orderFigures.slice(0, 1).map((item) => (
          <>
            <Word style={{ color: Colors[colorScheme].text }}>
              {item.start}
            </Word>
            <TouchArea
              onTouchStart={(e) => {
                console.log("touch", e.nativeEvent);
                setCorrect(true);
              }}
              onTouchEnd={(e) => {
                console.log("touch out", e.nativeEvent);
                setOrderFigures(random(words));
                setCorrect(false);
              }}
              style={{
                backgroundColor: correct ? "#81C784" : "#eeeeee",
              }}
            />
            <Word style={{ color: Colors[colorScheme].text }}>{item.end}</Word>
          </>
        ))}
      </GameArea>
      <GameLegend legend="Place the missing letter on top of the square" />
    </Wrapper>
  );
}
