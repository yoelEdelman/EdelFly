import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { WHITE } from "../../util/colors";
import BookedNavigator from "../booked";
import NotificationNavigator from "../notification";
import SearchNavigator from "../search";
import SettingsHomeScreen from "../setting";
import WatchlistNavigator from "../watchlist";
import {
  BookedStack,
  getFocusedIcon,
  getFocusedLabel,
  getIcon,
  getLabel,
  NotificationStack,
  SearchStack,
  SettingsStack,
  WatchlistStack,
} from "./helper";

const AppTabsScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (focused) {
          return getFocusedIcon(route.name);
        } else {
          return getIcon(route.name);
        }
      },
      tabBarLabel: ({ focused, color }) => {
        if (focused) {
          return getFocusedLabel(route.name);
        } else {
          return getLabel(route.name);
        }
      },
    })}
    initialRouteName={SearchStack}
    tabBarOptions={{
      style: {
        backgroundColor: WHITE,
        borderTopWidth: 0,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 30,
      },
    }}
  >
    <Tab.Screen
      name={NotificationStack}
      component={NotificationNavigator}
    ></Tab.Screen>
    <Tab.Screen
      name={WatchlistStack}
      component={WatchlistNavigator}
    ></Tab.Screen>
    <Tab.Screen name={SearchStack} component={SearchNavigator}></Tab.Screen>
    <Tab.Screen name={BookedStack} component={BookedNavigator}></Tab.Screen>
    <Tab.Screen
      name={SettingsStack}
      component={SettingsHomeScreen}
    ></Tab.Screen>
  </Tab.Navigator>
);

const Tab = createBottomTabNavigator();

const CreatePlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }} />
);
const RootStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      <RootStack.Screen name="AppDrawerScreen" component={AppTabsScreen} />
      <RootStack.Screen
        name="AddNavigator"
        component={SearchNavigator}
        options={{ animationEnabled: true }}
      />
    </RootStack.Navigator>
  );
};

export default HomeNavigator;
