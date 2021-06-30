import { StyleSheet } from "react-native";
import { WHITE } from "./colors";
import { captionLarge, regular } from "./fonts";
//import {primaryColor, white} from './colors';
//import {heading1, heading2, normal4, fontRegular} from './fonts';

const AppStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  heading1: {
    //  fontSize: heading1,
    // color: white,
    fontStyle: "normal",
    fontWeight: "700",
    //fontFamily: fontRegular,
  },
  heading2: {
    //fontSize: heading2,
    //color: white,
    fontStyle: "normal",
    //fontFamily: fontRegular,
    fontWeight: "700",
  },
  header: {
    //backgroundColor: primaryColor,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontFamily: regular,
    color: WHITE,
    fontSize: captionLarge,
    fontWeight: "300",
    fontStyle: "normal",
    alignSelf: "center",
    textAlign: "center",
  },
  indicator: {
    // backgroundColor: PRIMARY,
    position: "absolute",
    zIndex: 3,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  centerChildren: {
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteCenter: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default AppStyles;
