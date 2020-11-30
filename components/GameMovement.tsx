import React, { useState } from "react";
// import { SegmentedControlIOSBase, Text } from "react-native";
import { DeviceMotion } from "expo-sensors";
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
  margin-top: 50px;
`;

const VerticalGuide = styled.View`
  position: absolute;
  top: 50px;
  width: 0;
  height: 300px;
`;

const HorizontalGuide = styled.View`
  position: absolute;
  width: 600px;
  height: 0;
`;

const GuideValue = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 20px;
`;

const Device = styled.View`
  border-radius: 20px;
  width: 300px;
  height: 200px;
  position: absolute;
`;

const RotationValue = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: #fff;
`;

export default function GameLanguage() {
  const colorScheme = useColorScheme();
  const rotationExercise = [-90, 45, 90, 35, -45, -35];
  const [rotationValue, setRotationValue] = useState(0);
  const [randomExercise, setRandomExercise] = useState(
    rotationExercise[Math.floor(Math.random() * rotationExercise.length)]
  );

  DeviceMotion.setUpdateInterval(250);

  DeviceMotion.addListener(({ rotation }: any) => {
    const value = rotation.beta;
    setRotationValue(value * 60);
  });

  return (
    <Wrapper>
      <GameArea>
        <GuideValue
          style={{
            top: 20,
            paddingLeft: 8,
            color: Colors[colorScheme].headerBar,
          }}
        >
          0º
        </GuideValue>
        <VerticalGuide
          style={{
            borderWidth: 3,
            borderLeftWidth: 0,
            borderColor: Colors[colorScheme].headerBar,
          }}
        />
        <GuideValue
          style={{
            left: 220,
            color: Colors[colorScheme].headerBar,
          }}
        >
          90º
        </GuideValue>
        <HorizontalGuide
          style={{
            borderWidth: 3,
            borderTopWidth: 0,
            borderColor: Colors[colorScheme].headerBar,
          }}
        />
        <GuideValue
          style={{
            right: 225,
            color: Colors[colorScheme].headerBar,
          }}
        >
          90º
        </GuideValue>
        <Device
          style={{
            backgroundColor:
              randomExercise > 0
                ? randomExercise <= rotationValue
                  ? "green"
                  : "#3b3c3f"
                : randomExercise >= rotationValue
                ? "green"
                : "#3b3c3f",
          }}
          onTouchEnd={() => {
            setRandomExercise(
              rotationExercise[
                Math.floor(Math.random() * rotationExercise.length)
              ]
            );
          }}
        />
        <RotationValue
          style={{
            transform: [
              {
                rotate:
                  rotationValue > 0
                    ? `-${rotationValue.toFixed(0)}deg`
                    : `${Math.abs(rotationValue).toFixed(0)}deg`,
              },
            ],
          }}
        >
          {Math.abs(rotationValue).toFixed(0)}
        </RotationValue>
      </GameArea>
      <GameLegend
        legend={`Take the device and rotates ${Math.abs(
          randomExercise
        )}º to the ${randomExercise < 0 ? "left" : "right"}`}
      />
    </Wrapper>
  );
}
