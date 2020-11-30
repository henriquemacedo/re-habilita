import React from "react";
import styled from "styled-components/native";

import GameWrapper from "../../components/GameWrapper";
import GameAttention from "../../components/GameAttention";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function GameAttentionScreen() {
  return (
    <Wrapper>
      <GameWrapper>{/* <GameAttention /> */}</GameWrapper>
    </Wrapper>
  );
}
