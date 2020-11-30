import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Animated, Image, StyleSheet } from "react-native";

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

const ViewSolid = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MainArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TouchArea = styled.View`
  border: 5px solid #4527a0;
  border-radius: 20px;
  width: 300px;
  height: 300px;
`;

export default function GameRecognition() {
  const colorScheme = useColorScheme();

  const solids = [
    {
      name: "cube",
      figure: require("../assets/images/solids/cube.png"),
    },
    {
      name: "cylinder",
      figure: require("../assets/images/solids/cylinder.png"),
    },
    {
      name: "cylinder_2",
      figure: require("../assets/images/solids/cylinder-2.png"),
    },
  ];

  const [orderSolids, setOrderSolids] = useState(solids);
  const [viewSolid, setViewSolid] = useState(true);
  const [viewAnswer, setViewAnswer] = useState(false);
  const [correct, setCorrect] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1142,
      duration: 1000,
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

  const random = (array: any) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  random(solids);

  return (
    <Wrapper>
      <GameArea>
        <MainArea>
          {viewSolid && (
            <>
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
              <ViewSolid>
                {orderSolids.slice(0, 1).map((item, index) => (
                  <Image
                    key={index}
                    style={
                      item.name === "cube"
                        ? { width: 450, height: 450 }
                        : { width: 700, height: 700 }
                    }
                    source={item.figure}
                  />
                ))}
              </ViewSolid>
            </>
          )}

          {viewAnswer && (
            <TouchArea
              onTouchStart={(e) => {
                console.log("touch", e.nativeEvent);
                setCorrect(true);
              }}
              onTouchEnd={(e) => {
                console.log("touch out", e.nativeEvent);
                setCorrect(false);
                fadeOut();
                setViewSolid(true);
                setViewAnswer(false);
                setOrderSolids(random(solids));
              }}
              style={{
                backgroundColor: correct ? "#81C784" : "#eeeeee",
              }}
            />
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
