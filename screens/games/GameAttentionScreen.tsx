import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View, Pressable, TouchableWithoutFeedback } from "react-native";
import GameWrapper from "../../components/GameWrapper";
import GameAttention from "../../components/GameAttention";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.View`
  border: 1px solid red;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #000;
`;

export default function GameAttentionScreen() {
  const [timesPressed, setTimesPressed] = useState(0);
  const safeAreaTouch = () => console.log("touch safe area");

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  console.log(textLog);

  return (
    <Wrapper>
      <GameWrapper>
        <GameAttention />
      </GameWrapper>

      {/* <TouchableWithoutFeedback onPress={safeAreaTouch}>
        <Card
          onTouchStart={(e) => {
            console.log("touchMove", e.nativeEvent);
          }}
          onTouchEnd={(e) => {
            console.log("touchEnd", e.nativeEvent);
          }}
        >
          <CardTitle>Attention</CardTitle>
          <Pressable
            onPressIn={() => {
              setTimesPressed((current) => current + 1);
            }}
            onPressOut={() => {
              setTimesPressed((current) => current - 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
              },
            ]}
          >
            {({ pressed }) => <Text>{pressed ? "Pressed!" : "Press Me"}</Text>}
          </Pressable>
        </Card>
      </TouchableWithoutFeedback> */}
    </Wrapper>
  );
}
