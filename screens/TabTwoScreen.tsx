import * as React from "react";
import styled from "styled-components/native";
// import { StyleSheet } from 'react-native';

import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from '../components/Themed';

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

export default function TabTwoScreen() {
  return (
    <StyledView>
      <StyledText>Tab Two</StyledText>
      <Separator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.js" />
    </StyledView>
  );
}
