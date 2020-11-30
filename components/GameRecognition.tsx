import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Button, Animated, View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import GameLegend from "./GameLegend";

const Wrapper = styled.View`
  height: 100%;
`;

const GameArea = styled.View`
  flex: 1;
`;

const Timer = styled.View`
  width: 100%;
  height: 20px;
`;

const MainArea = styled.View`
  flex: 1;
`;

const TouchArea = styled.View`
  border: 5px solid #4527a0;
  border-radius: 20px;
  width: 200px;
  height: 200px;
`;

export default function GameRecognition() {
  const colorScheme = useColorScheme();
  const [viewSolid, setViewSolid] = useState(true);
  const [viewAnswer, setViewAnswer] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1142,
      duration: 15000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setViewSolid(false);
        setViewAnswer(true);
      }
    });
  }, [viewSolid]);

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Wrapper>
      <GameArea>
        <Timer style={{ backgroundColor: Colors[colorScheme].legend }}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                width: fadeAnim,
              },
            ]}
          ></Animated.View>
        </Timer>
        <MainArea>
          {viewSolid && <Text>solid image</Text>}
          {viewAnswer && (
            <TouchArea>
              <Button
                onPress={() => {
                  fadeOut();
                  setViewSolid(true);
                  setViewAnswer(false);
                }}
                title="sdsad"
              />
            </TouchArea>
          )}
        </MainArea>
      </GameArea>
      {viewSolid && (
        <GameLegend legend="Memorize the figure above in 15 seconds" />
      )}
      {viewAnswer && (
        <GameLegend legend="Place the object that is seen before on top of the screen" />
      )}
    </Wrapper>
  );
}
StyleSheet;

const styles = StyleSheet.create({
  fadingContainer: {
    backgroundColor: "#81C784",
    height: "100%",
  },
});
