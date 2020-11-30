import * as React from "react";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import { TouchableOpacity, View, Text, Image } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 13px;
`;

const Card = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin: 13px;
  padding: 26px;
  border-radius: 20px;
  min-width: 47.7%;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Tags = styled.View`
  margin-top: 26px;
  flex-direction: row;
`;

const Tag = styled.View`
  margin-right: 5px;
  border-radius: 999px;
  padding: 5px 10px;
`;

export default function PatientsScreen({
  navigation,
}: StackScreenProps<{
  PatientScreen: any;
}>) {
  const colorScheme = useColorScheme();

  return (
    <Wrapper style={{ backgroundColor: Colors[colorScheme].contentBackground }}>
      <TouchableOpacity onPress={() => navigation.navigate("PatientScreen")}>
        <Card style={{ backgroundColor: Colors[colorScheme].card }}>
          <CardHeader>
            <Image
              style={{
                width: 75,
                height: 75,
                borderWidth: 2,
                borderColor: "#4527A0",
                borderRadius: 999,
                overflow: "hidden",
              }}
              source={require("../assets/images/maria-emilia.jpg")}
            />
            <View style={{ marginLeft: 15 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: Colors[colorScheme].text,
                }}
              >
                Maria Emília
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors[colorScheme].legend,
                  marginBottom: 1,
                }}
              >
                72 years old
              </Text>
              <Text style={{ fontSize: 16, color: Colors[colorScheme].legend }}>
                Coimbra, Portugal
              </Text>
            </View>
          </CardHeader>
          <Tags>
            <Tag
              style={{ backgroundColor: Colors[colorScheme].contentBackground }}
            >
              <Text style={{ color: Colors[colorScheme].text }}>
                Neurological
              </Text>
            </Tag>
            <Tag
              style={{ backgroundColor: Colors[colorScheme].contentBackground }}
            >
              <Text style={{ color: Colors[colorScheme].text }}>Cognition</Text>
            </Tag>
          </Tags>
        </Card>
      </TouchableOpacity>
    </Wrapper>
  );
}
