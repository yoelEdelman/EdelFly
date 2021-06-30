import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Booked from "../../src/tabs/booked";
import { PRIMARY } from "../../util/colors";
import { getHeaderStatusBarHeight } from "../../util/navigationUtils";
import AppStyles from "../../util/styles";
import { BookedHomeScreen } from "./helper";

const Stack = createStackNavigator();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={BookedHomeScreen}
        component={Booked}
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

export default NotificationNavigator;
