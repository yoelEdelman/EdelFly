import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Intro from "../../src/onboarding/Intro/introScreen";
import Landing from "../../src/onboarding/landing/landingScreen";
import TicketDetails from "../../src/tabs/ticket_details";
import AppStyles from "../../util/styles";
import FilterNavigation from "../filter";
import HomeNavigator from "../home";
import {
  FilterNavigatorScreen,
  HomeNavigatorScreen,
  IntroScreen,
  landingScreen,
  TicketDetailsScreen,
} from "./helper";

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={IntroScreen}
      screenOptions={{
        headerStyle: AppStyles.header,
        headerTitleStyle: AppStyles.headerTitleStyle,
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name={landingScreen}
        component={Landing}
        options={{
          title: landingScreen.toUpperCase(),
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={IntroScreen}
        component={Intro}
        options={{
          title: IntroScreen.toUpperCase(),
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={HomeNavigatorScreen}
        component={HomeNavigator}
        options={{
          title: HomeNavigatorScreen.toUpperCase(),
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={FilterNavigatorScreen}
        component={FilterNavigation}
        options={{
          title: FilterNavigatorScreen.toUpperCase(),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={TicketDetailsScreen}
        component={TicketDetails}
        options={{
          title: TicketDetailsScreen.toUpperCase(),
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
