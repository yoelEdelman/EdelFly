import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Search from "../../src/tabs/search";
import SearchResult from "../../src/tabs/search/result";
import SelectDate from "../../src/tabs/search/select_date";
import SelectLocation from "../../src/tabs/search/select_location";
import SelectTraveller from "../../src/tabs/search/select_traveller";
import { PRIMARY } from "../../util/colors";
import { extralargeText } from "../../util/fonts";
import { getHeaderStatusBarHeight } from "../../util/navigationUtils";
import AppStyles from "../../util/styles";
import {
  SearchHomeScreen,
  SearchResultScreen,
  SelectDateScreen,
  SelectLocationScreen,
  SelectTravellerScreen,
} from "./helper";

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SearchHomeScreen}
        component={Search}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerTitleStyle: {
            ...AppStyles.headerTitleStyle,
            fontSize: extralargeText,
            fontWeight: "200",
          },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />
      <Stack.Screen
        name={SelectLocationScreen}
        component={SelectLocation}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header },
        }}
      />
      <Stack.Screen
        name={SelectDateScreen}
        component={SelectDate}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header },
        }}
      />
      <Stack.Screen
        name={SelectTravellerScreen}
        component={SelectTraveller}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header },
        }}
      />
      <Stack.Screen
        name={SearchResultScreen}
        component={SearchResult}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          title: "",
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
