import React from "react";
import styled from "styled-components/native";

import GameWrapper from "../../components/GameWrapper";
import GameMovement from "../../components/GameMovement";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function GameMovementScreen() {
  return (
    <Wrapper>
      <GameWrapper>
        <GameMovement />
      </GameWrapper>
    </Wrapper>
  );
}
