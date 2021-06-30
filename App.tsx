import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import MainNavigator from "./navigation/main";
import configureStore from "./store";
import { PRIMARY, WHITE } from "./util/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: WHITE,
    primary: PRIMARY,
  },
};

export const store = configureStore();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
