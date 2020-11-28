import * as React from "react";
import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export default function GameMovement() {
  return (
    <StyledView>
      <StyledText>Game Movement</StyledText>
    </StyledView>
  );
}
