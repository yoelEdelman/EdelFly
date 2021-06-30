import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import airlines from "../../src/filter/airlines/airlines";
import cabin from "../../src/filter/cabin/cabin";
import duration from "../../src/filter/duration/duration";
import filter from "../../src/filter/filter_main/filter";
import { PRIMARY } from "../../util/colors";
import {
  getHeaderStatusBarHeight,
  getSettingsHeaderBackImage,
} from "../../util/navigationUtils";
import AppStyles from "../../util/styles";
import {
  AirlinesScreen,
  CabinScreen,
  DurationScreen,
  FilterScreen,
} from "./helper";

const Stack = createStackNavigator();

const FilterNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FilterScreen}
        component={filter}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: {
            ...AppStyles.headerTitleStyle,
          },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />
      <Stack.Screen
        name={AirlinesScreen}
        component={airlines}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: {
            ...AppStyles.headerTitleStyle,
          },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />
      <Stack.Screen
        name={DurationScreen}
        component={duration}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: {
            ...AppStyles.headerTitleStyle,
          },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />
      <Stack.Screen
        name={CabinScreen}
        component={cabin}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: {
            ...AppStyles.headerTitleStyle,
          },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />
    </Stack.Navigator>
  );
};

export default FilterNavigation;
