import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Add from "../../src/tabs/watchlist";
import { PRIMARY } from "../../util/colors";
import { getHeaderStatusBarHeight } from "../../util/navigationUtils";
import AppStyles from "../../util/styles";
import { WatchlistScreen } from "./helper";

const Stack = createStackNavigator();

const AddNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={WatchlistScreen}
        component={Add}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AddNavigator;
