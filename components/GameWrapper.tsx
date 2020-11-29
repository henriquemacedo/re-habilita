import * as React from "react";
import styled from "styled-components/native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  padding: 13px;
`;

const GameAreaWrapper = styled.View`
  width: 100%;
  height: 100%;
  padding: 13px;
`;

const GameArea = styled.View`
  border-radius: 20px;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

interface IProps {
  children: any;
}

export default function GameWrapper({ children }: IProps) {
  const colorScheme = useColorScheme();

  return (
    <Wrapper style={{ backgroundColor: Colors[colorScheme].contentBackground }}>
      <GameAreaWrapper>
        <GameArea style={{ backgroundColor: Colors[colorScheme].card }}>
          {children}
        </GameArea>
      </GameAreaWrapper>
    </Wrapper>
  );
}
