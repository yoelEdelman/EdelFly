import React, { ReactNode } from "react";
import About from "../../../assets/images/ic_about.svg";
import Airlines1 from "../../../assets/images/ic_airline1.svg";
import Airlines2 from "../../../assets/images/ic_airline2.svg";
import Airlines3 from "../../../assets/images/ic_airline3.svg";
import Airlines4 from "../../../assets/images/ic_airline4.svg";
import Airlines5 from "../../../assets/images/ic_airline5.svg";
import Airlines6 from "../../../assets/images/ic_airline6.svg";
import Airlines7 from "../../../assets/images/ic_airline7.svg";
import Airlines8 from "../../../assets/images/ic_airline8.svg";
import Airlines from "../../../assets/images/ic_airlines.svg";
import Cabins from "../../../assets/images/ic_cabins.svg";
import Durations from "../../../assets/images/ic_durations.svg";
import Facebook from "../../../assets/images/ic_facebook.svg";
import Feedback from "../../../assets/images/ic_feedback.svg";
import Google from "../../../assets/images/ic_google.svg";
import Help from "../../../assets/images/ic_help.svg";
import History from "../../../assets/images/ic_history.svg";
import Legal from "../../../assets/images/ic_legal.svg";
import Next from "../../../assets/images/ic_next.svg";
import Notification from "../../../assets/images/ic_notification_bell.svg";
import Payment from "../../../assets/images/ic_payment.svg";
import Preferences from "../../../assets/images/ic_preferences.svg";
import SignIn from "../../../assets/images/ic_signin.svg";
import Twitter from "../../../assets/images/ic_twitter.svg";
import {
  AirlinesScreen,
  CabinScreen,
  DurationScreen,
} from "../../../navigation/filter/helper";
import {
  AboutScreen,
  AutoFill,
  Currency,
  FeedbackScreen,
  HelpScreen,
  HistoryScreen,
  HomeAirport,
  LegalScreen,
  NotificationScreen,
  PaymentScreen,
  PreferencesScreen,
  PrivacyPolicyScreen,
  SignInScreen,
  SocialContactsScreen,
  TermsScreen,
} from "../../../navigation/setting/helper";
import { string } from "../../../util/constants";

class SettingsItemModel {
  iconLeft?: ReactNode;
  heading: string;
  description?: string;
  iconRight?: ReactNode;
  clickable?: boolean;

  //constructor
  constructor(
    heading: string,
    iconLeft?: ReactNode,
    iconRight?: ReactNode,
    clickable: boolean = true,
    description?: string
  ) {
    this.iconLeft = iconLeft;
    this.heading = heading;
    this.iconRight = iconRight;
    this.clickable = clickable;
    this.description = description;
  }
}

const settingsSection1: SettingsItemModel[] = [
  new SettingsItemModel(PreferencesScreen, <Preferences />, <Next />),
  new SettingsItemModel(NotificationScreen, <Notification />, <Next />),
  // new SettingsItemModel(HistoryScreen, <History />, <Next />),
  new SettingsItemModel(HelpScreen, <Help />, <Next />),
  // new SettingsItemModel(FeedbackScreen, <Feedback />, <Next />),
];

const settingsSection2: SettingsItemModel[] = [
  new SettingsItemModel(PaymentScreen, <Payment />, <Next />),
  new SettingsItemModel(AboutScreen, <About />, <Next />),
  new SettingsItemModel(LegalScreen, <Legal />, <Next />),
];

const settingsSection3: SettingsItemModel[] = [
  new SettingsItemModel(SignInScreen, <SignIn />, <Next />),
];

const signInSection1: SettingsItemModel[] = [
  new SettingsItemModel(PreferencesScreen, <Preferences />, <Next />),
];

const signInSection2: SettingsItemModel[] = [
  new SettingsItemModel(FeedbackScreen, <Feedback />, <Next />),
  new SettingsItemModel(AboutScreen, <About />, <Next />),
  new SettingsItemModel(LegalScreen, <Legal />, <Next />),
];

const preferencesSection1: SettingsItemModel[] = [
  new SettingsItemModel(SocialContactsScreen, null, <Next />),
];

const preferencesSection2: SettingsItemModel[] = [
  new SettingsItemModel(HomeAirport, null, <Next />, false),
  new SettingsItemModel(Currency, null, null),
];

const preferencesSection3: SettingsItemModel[] = [
  new SettingsItemModel(AutoFill, null, null, false),
];

const cabbinSection1: SettingsItemModel[] = [
  new SettingsItemModel(string.ECONOMY, null, null, false),
  new SettingsItemModel(string.MIXED, null, null, false),
];

const paymentSection1: SettingsItemModel[] = [
  new SettingsItemModel("Définir comme carte préférée", null, null, false),
];

const socialContactsSection3: SettingsItemModel[] = [
  new SettingsItemModel(string.GOOGLE, <Google />, null, false),
  new SettingsItemModel(string.FACEBOOK, <Facebook />, null, false),
  new SettingsItemModel(string.TWITTER, <Twitter />, null, false),
];

const legalSection1: SettingsItemModel[] = [
  new SettingsItemModel(TermsScreen, null, null),
  new SettingsItemModel(PrivacyPolicyScreen, null, null),
];

const airlinesSection1: SettingsItemModel[] = [
  new SettingsItemModel(string.SHOW_ALLIANCES, null, null, false),
];

const airlinesSection2: SettingsItemModel[] = [
  new SettingsItemModel(string.AIRLINE1, <Airlines1 />, null, false),
  new SettingsItemModel(string.AIRLINE2, <Airlines2 />, null, false),
  new SettingsItemModel(string.AIRLINE3, <Airlines3 />, null, false),
  new SettingsItemModel(string.AIRLINE4, <Airlines4 />, null, false),
  new SettingsItemModel(string.AIRLINE5, <Airlines5 />, null, false),
  new SettingsItemModel(string.AIRLINE6, <Airlines6 />, null, false),
  new SettingsItemModel(string.AIRLINE7, <Airlines7 />, null, false),
  new SettingsItemModel(string.AIRLINE8, <Airlines8 />, null, false),
];

const filterSection1: SettingsItemModel[] = [
  new SettingsItemModel(AirlinesScreen, <Airlines />, <Next />),
  new SettingsItemModel(DurationScreen, <Durations />, <Next />),
  new SettingsItemModel(CabinScreen, <Cabins />, <Next />),
];

const notificationSection1: SettingsItemModel[] = [
  new SettingsItemModel(
    string.PUSH_NOTI,
    null,
    null,
    false,
    "pour recevoir des alertes de prix et des mises à jour de voyage"
  ),
  new SettingsItemModel(string.EMAIL_NOTI, null, null, false),
  new SettingsItemModel(string.SPECIAL_OFFERS, null, null, false),
  new SettingsItemModel(string.GREAT_GETWAYS, null, null, false),
];

export {
  SettingsItemModel,
  settingsSection1,
  settingsSection2,
  settingsSection3,
  signInSection1,
  signInSection2,
  preferencesSection1,
  preferencesSection2,
  preferencesSection3,
  socialContactsSection3,
  notificationSection1,
  legalSection1,
  paymentSection1,
  filterSection1,
  cabbinSection1,
  airlinesSection1,
  airlinesSection2,
};
