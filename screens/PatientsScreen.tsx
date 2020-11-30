import * as React from "react";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native";

import GameWrapper from "../components/GameWrapper";
// import GameAttention from "../../components/GameAttention";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function PatientsScreen({
  navigation,
}: StackScreenProps<{
  PatientScreen: any;
}>) {
  return (
    <Wrapper>
      <GameWrapper>
        {/* <GameAttention /> */}
        <Button
          onPress={() => navigation.navigate("PatientScreen")}
          title="Maria Emília Details"
        />
      </GameWrapper>
    </Wrapper>
  );
}
