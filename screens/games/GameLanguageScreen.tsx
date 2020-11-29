import React from "react";
import styled from "styled-components/native";

import GameWrapper from "../../components/GameWrapper";
import GameLanguage from "../../components/GameLanguage";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function GameLanguageScreen() {
  return (
    <Wrapper>
      <GameWrapper>
        <GameLanguage />
      </GameWrapper>
    </Wrapper>
  );
}
