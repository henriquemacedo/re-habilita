import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import styled from "styled-components/native";

import { Button } from "react-native";

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

const Separator = styled.View`
  background-color: #eee;
  margin: 30px 0;
  height: 1px;
  width: 80%;
`;

export default function GamesScreen({
  navigation,
}: StackScreenProps<{
  GameAttentionScreen: any;
  GameLanguageScreen: any;
  GameRecognitionScreen: any;
  GameMovementScreen: any;
}>) {
  return (
    <StyledView>
      <StyledText>Games</StyledText>
      <Separator darkColor="rgba(255,255,255,0.1)" />
      <Button
        title="Attention"
        onPress={() => navigation.navigate("GameAttentionScreen")}
      />
      <Button
        title="Language"
        onPress={() => navigation.navigate("GameLanguageScreen")}
      />
      <Button
        title="Recognition"
        onPress={() => navigation.navigate("GameRecognitionScreen")}
      />
      <Button
        title="Movement"
        onPress={() => navigation.navigate("GameMovementScreen")}
      />
    </StyledView>
  );
}
