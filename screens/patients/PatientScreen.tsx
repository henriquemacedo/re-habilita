import React from "react";
import styled from "styled-components/native";
import { ScrollView, View, Text } from "react-native";
import {
  StackedBarChart,
  StackedAreaChart,
  ProgressCircle,
} from "react-native-svg-charts";
import * as shape from "d3-shape";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
// import GameWrapper from "../../components/GameWrapper";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  /* align-items: center;
  justify-content: center; */
  flex-wrap: wrap;
  padding: 13px;
`;

const Card = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin: 13px;
  border-radius: 20px;
  width: 47.7%;
  justify-content: flex-end;
  padding-bottom: -20px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.Text`
  padding-top: 26px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const LegendLabels = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 0 20px 25px 20px;
`;

const LegendItem = styled.View`
  margin-right: 15px;
  flex-direction: row;
  align-items: center;
`;

const Circle = styled.View`
  margin: 2px 5px 0 0;
  border-radius: 999px;
  width: 10px;
  height: 10px;
`;

export default function GameAttentionScreen() {
  const colorScheme = useColorScheme();

  const gamesPlayed = [
    {
      month: new Date(2020, 0, 1),
      attention: 3840,
      language: 1920,
      recognition: 960,
      movement: 400,
    },
    {
      month: new Date(2020, 1, 1),
      attention: 1600,
      language: 1440,
      recognition: 960,
      movement: 400,
    },
    {
      month: new Date(2020, 2, 1),
      attention: 640,
      language: 960,
      recognition: 3640,
      movement: 400,
    },
    {
      month: new Date(2020, 3, 1),
      attention: 3320,
      language: 480,
      recognition: 640,
      movement: 400,
    },
  ];

  const finishAverage = [
    {
      month: new Date(2020, 0, 1),
      attention: 3840,
      language: 1920,
      recognition: 960,
      movement: 400,
    },
    {
      month: new Date(2020, 1, 1),
      attention: 2600,
      language: 1440,
      recognition: 860,
      movement: 500,
    },
    {
      month: new Date(2020, 2, 1),
      attention: 1640,
      language: 1960,
      recognition: 640,
      movement: 400,
    },
    {
      month: new Date(2020, 3, 1),
      attention: 320,
      language: 880,
      recognition: 1740,
      movement: 300,
    },
    {
      month: new Date(2020, 0, 1),
      attention: 2840,
      language: 1920,
      recognition: 960,
      movement: 400,
    },
    {
      month: new Date(2020, 1, 1),
      attention: 2600,
      language: 1440,
      recognition: 860,
      movement: 500,
    },
    {
      month: new Date(2020, 2, 1),
      attention: 1640,
      language: 1960,
      recognition: 640,
      movement: 400,
    },
    {
      month: new Date(2020, 3, 1),
      attention: 320,
      language: 880,
      recognition: 1740,
      movement: 300,
    },
  ];

  const colors = ["#311B92", "#673AB7", "#9575CD", "#D1C4E9"];
  const gameTypes = ["attention", "language", "recognition", "movement"];

  const svgs = [
    { onPress: () => console.log("attention") },
    { onPress: () => console.log("language") },
    { onPress: () => console.log("recognition") },
    { onPress: () => console.log("movement") },
  ];

  const Legend = () => (
    <LegendLabels>
      <LegendItem>
        <Circle
          style={{
            backgroundColor: "#311B92",
          }}
        />
        <Text style={{ color: Colors[colorScheme].text }}>Attention</Text>
      </LegendItem>
      <LegendItem>
        <Circle
          style={{
            backgroundColor: "#673AB7",
          }}
        />
        <Text style={{ color: Colors[colorScheme].text }}>Language</Text>
      </LegendItem>
      <LegendItem>
        <Circle
          style={{
            backgroundColor: "#9575CD",
          }}
        />
        <Text style={{ color: Colors[colorScheme].text }}>Recognition</Text>
      </LegendItem>
      <LegendItem>
        <Circle
          style={{
            backgroundColor: "#D1C4E9",
          }}
        />
        <Text style={{ color: Colors[colorScheme].text }}>Movement</Text>
      </LegendItem>
    </LegendLabels>
  );

  const PieLegend = () => (
    <LegendLabels>
      <LegendItem>
        <Circle
          style={{
            backgroundColor: "#311B92",
          }}
        />
        <Text>Attention</Text>
      </LegendItem>
      <LegendItem>
        <Circle
          style={{
            backgroundColor: "#673AB7",
          }}
        />
        <Text>Language</Text>
      </LegendItem>
    </LegendLabels>
  );

  return (
    <ScrollView>
      <Wrapper
        style={{ backgroundColor: Colors[colorScheme].contentBackground }}
      >
        <Card style={{ backgroundColor: Colors[colorScheme].card }}>
          <CardTitle style={{ color: Colors[colorScheme].text }}>
            Games played
          </CardTitle>
          <View>
            <StackedBarChart
              style={{ height: 300, paddingVertical: 0, paddingHorizontal: 13 }}
              keys={gameTypes}
              colors={colors}
              data={gamesPlayed}
              contentInset={{ top: 30, bottom: 30 }}
            />
          </View>
          <Legend />
        </Card>

        <Card style={{ backgroundColor: Colors[colorScheme].card }}>
          <CardTitle style={{ color: Colors[colorScheme].text }}>
            Success Avergage
          </CardTitle>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <StackedAreaChart
              style={{ height: 250, paddingVertical: 0 }}
              data={finishAverage}
              keys={gameTypes}
              colors={colors}
              curve={shape.curveNatural}
              svgs={svgs}
            />
          </View>
          <Legend />
        </Card>

        <Card style={{ backgroundColor: Colors[colorScheme].card }}>
          <CardTitle style={{ color: Colors[colorScheme].text }}>
            Avg. Success — Attention
          </CardTitle>
          <View style={{ paddingBottom: 55 }}>
            <ProgressCircle
              style={{ height: 200, paddingVertical: 26 }}
              strokeWidth={20}
              progress={0.7}
              progressColor={"#311B92"}
            />
          </View>
        </Card>

        <Card style={{ backgroundColor: Colors[colorScheme].card }}>
          <CardTitle style={{ color: Colors[colorScheme].text }}>
            Avg. Success — Language
          </CardTitle>
          <View style={{ paddingBottom: 55 }}>
            <ProgressCircle
              style={{ height: 200, paddingVertical: 26 }}
              strokeWidth={20}
              progress={0.7}
              progressColor={"#673AB7"}
            />
          </View>
        </Card>

        <Card style={{ backgroundColor: Colors[colorScheme].card }}>
          <CardTitle style={{ color: Colors[colorScheme].text }}>
            Avg. Success — Recognition
          </CardTitle>
          <View style={{ paddingBottom: 55 }}>
            <ProgressCircle
              style={{ height: 200, paddingVertical: 26 }}
              strokeWidth={20}
              progress={0.7}
              progressColor={"#9575CD"}
            />
          </View>
        </Card>

        <Card style={{ backgroundColor: Colors[colorScheme].card }}>
          <CardTitle style={{ color: Colors[colorScheme].text }}>
            Avg. Success — Movement
          </CardTitle>
          <View style={{ paddingBottom: 55 }}>
            <ProgressCircle
              style={{ height: 200, paddingVertical: 26 }}
              strokeWidth={20}
              progress={0.7}
              progressColor={"#D1C4E9"}
            />
          </View>
        </Card>
      </Wrapper>
    </ScrollView>
  );
}
