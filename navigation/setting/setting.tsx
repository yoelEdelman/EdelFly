import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Setting from "../../src/tabs/settings";
import about from "../../src/tabs/settings/about/about";
import currency from "../../src/tabs/settings/currency/currency";
import feedback from "../../src/tabs/settings/feedback/feedback";
import help from "../../src/tabs/settings/help/help";
import legal from "../../src/tabs/settings/legal/legal";
import notification from "../../src/tabs/settings/notification/notification";
import payment from "../../src/tabs/settings/payment/payment";
import policy from "../../src/tabs/settings/policy/policy";
import preferences from "../../src/tabs/settings/preferences/preference";
import signIn from "../../src/tabs/settings/sign_in/signIn";
import signUp from "../../src/tabs/settings/sign_up/signUp";
import socialContacts from "../../src/tabs/settings/social_contacts/socialContacts";
import terms from "../../src/tabs/settings/terms/terms";
import trips from "../../src/tabs/settings/trips/trips";
import { PRIMARY, WHITE } from "../../util/colors";
import {
  getHeaderStatusBarHeight,
  getSettingsHeaderBackImage,
} from "../../util/navigationUtils";
import AppStyles from "../../util/styles";
import {
  AboutScreen,
  Currency,
  FeedbackScreen,
  HelpScreen,
  HistoryScreen,
  LegalScreen,
  NotificationScreen,
  PaymentScreen,
  PreferencesScreen,
  PrivacyPolicyScreen,
  SettingsHomeScreen,
  SignInScreen,
  SignUpScreen,
  SocialContactsScreen,
  TermsScreen,
} from "./helper";

const Stack = createStackNavigator();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SettingsHomeScreen}
        component={Setting}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={AboutScreen}
        component={about}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: {
            ...AppStyles.headerTitleStyle,
            color: PRIMARY,
          },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={FeedbackScreen}
        component={feedback}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={HelpScreen}
        component={help}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={HistoryScreen}
        component={trips}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={LegalScreen}
        component={legal}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={TermsScreen}
        component={terms}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={PrivacyPolicyScreen}
        component={policy}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={NotificationScreen}
        component={notification}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={PaymentScreen}
        component={payment}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={PreferencesScreen}
        component={preferences}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={SocialContactsScreen}
        component={socialContacts}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={Currency}
        component={currency}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: PRIMARY },
        }}
      />

      <Stack.Screen
        name={SignInScreen}
        component={signIn}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: WHITE },
        }}
      />

      <Stack.Screen
        name={SignUpScreen}
        component={signUp}
        options={{
          headerStatusBarHeight: getHeaderStatusBarHeight(),
          headerBackImage: () => getSettingsHeaderBackImage(),
          headerTitleStyle: { ...AppStyles.headerTitleStyle },
          headerBackTitleVisible: false,
          headerStyle: { ...AppStyles.header, backgroundColor: WHITE },
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationNavigator;
