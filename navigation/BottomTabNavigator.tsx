import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import GamesScreen from "../screens/GamesScreen";
import GameAttentionScreen from "../screens/games/GameAttentionScreen";
import GameLanguageScreen from "../screens/games/GameLanguageScreen";
import GameRecognitionScreen from "../screens/games/GameRecognitionScreen";
import GameMovementScreen from "../screens/games/GameMovementScreen";
import PatientScreen from "../screens/patients/PatientScreen";
import PatientsScreen from "../screens/PatientsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {
  BottomTabParamList,
  GamesParamList,
  PatientsParamList,
  SettingsParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Games"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tabIconSelected,
        inactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabStyle: { backgroundColor: Colors[colorScheme].tabBackground },
      }}
    >
      <BottomTab.Screen
        name="Games"
        component={GamesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-keypad" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Patients"
        component={PatientsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-contacts" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: 0 }} {...props} />;
}

const GamesStack = createStackNavigator<GamesParamList>();

function GamesNavigator() {
  const colorScheme = useColorScheme();

  return (
    <GamesStack.Navigator>
      <GamesStack.Screen
        name="GamesScreen"
        component={GamesScreen}
        options={{
          headerTitle: "Games",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
        }}
      />
      <GamesStack.Screen
        name="GameAttentionScreen"
        component={GameAttentionScreen}
        options={{
          headerTitle: "Attention",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
          headerRight: () => (
            <Button
              onPress={() => alert("Try the solid blue")}
              title="Hint"
              color="#fff"
            />
          ),
        }}
      />
      <GamesStack.Screen
        name="GameLanguageScreen"
        component={GameLanguageScreen}
        options={{
          headerTitle: "Language",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
        }}
      />
      <GamesStack.Screen
        name="GameRecognitionScreen"
        component={GameRecognitionScreen}
        options={{
          headerTitle: "Recognition",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
        }}
      />
      <GamesStack.Screen
        name="GameMovementScreen"
        component={GameMovementScreen}
        options={{
          headerTitle: "Movement",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
        }}
      />
    </GamesStack.Navigator>
  );
}

const PatientsStack = createStackNavigator<PatientsParamList>();

function PatientsNavigator() {
  const colorScheme = useColorScheme();

  return (
    <PatientsStack.Navigator>
      <PatientsStack.Screen
        name="PatientsScreen"
        component={PatientsScreen}
        options={{
          headerTitle: "Patients",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
        }}
      />
      <PatientsStack.Screen
        name="PatientScreen"
        component={PatientScreen}
        options={{
          headerTitle: "Maria Emília",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
        }}
      />
    </PatientsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  const colorScheme = useColorScheme();

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          headerStyle: {
            backgroundColor: Colors[colorScheme].safeArea,
          },
          headerTintColor: "#fff",
        }}
      />
    </SettingsStack.Navigator>
  );
}
