import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { TouchableOpacity, ImageBackground } from "react-native";
import styled from "styled-components/native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 13px;
`;

const CardWrapper = styled.View`
  width: 50%;
  height: 50%;
  padding: 13px;
`;

const Card = styled.View`
  border-radius: 20px;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardTitle = styled.Text`
  position: absolute;
  right: 26px;
  bottom: 26px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

export default function GamesScreen({
  navigation,
}: StackScreenProps<{
  GameAttentionScreen: any;
  GameLanguageScreen: any;
  GameRecognitionScreen: any;
  GameMovementScreen: any;
}>) {
  const colorScheme = useColorScheme();

  return (
    <Wrapper style={{ backgroundColor: Colors[colorScheme].contentBackground }}>
      <CardWrapper>
        <TouchableOpacity
          onPress={() => navigation.navigate("GameAttentionScreen")}
        >
          <Card style={{ backgroundColor: Colors[colorScheme].card }}>
            <ImageBackground
              style={{ flex: 1 }}
              source={require("../assets/images/attention.png")}
            >
              <CardTitle>Attention</CardTitle>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
      </CardWrapper>
      <CardWrapper>
        <TouchableOpacity
          onPress={() => navigation.navigate("GameLanguageScreen")}
        >
          <Card style={{ backgroundColor: Colors[colorScheme].card }}>
            <ImageBackground
              style={{ flex: 1 }}
              source={require("../assets/images/language.png")}
            >
              <CardTitle>Language</CardTitle>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
      </CardWrapper>
      <CardWrapper>
        <TouchableOpacity
          onPress={() => navigation.navigate("GameRecognitionScreen")}
        >
          <Card style={{ backgroundColor: Colors[colorScheme].card }}>
            <ImageBackground
              style={{ flex: 1 }}
              source={require("../assets/images/recognition.png")}
            >
              <CardTitle>Recognition</CardTitle>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
      </CardWrapper>
      <CardWrapper>
        <TouchableOpacity
          onPress={() => navigation.navigate("GameMovementScreen")}
        >
          <Card style={{ backgroundColor: Colors[colorScheme].card }}>
            <ImageBackground
              style={{ flex: 1 }}
              source={require("../assets/images/movement.png")}
            >
              <CardTitle>Movement</CardTitle>
            </ImageBackground>
          </Card>
        </TouchableOpacity>
      </CardWrapper>
    </Wrapper>
  );
}
