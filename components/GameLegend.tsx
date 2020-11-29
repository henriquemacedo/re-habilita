import * as React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const Legend = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
`;

const LegendText = styled.Text`
  padding-top: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

interface IProps {
  legend: any;
}

export default function GameLegend({ legend }: IProps) {
  const colorScheme = useColorScheme();

  return (
    <Legend>
      <Ionicons
        size={30}
        style={{ marginRight: 10 }}
        name="ios-flash"
        color={Colors[colorScheme].legend}
      />
      <LegendText style={{ color: Colors[colorScheme].legend }}>
        {legend}
      </LegendText>
    </Legend>
  );
}
