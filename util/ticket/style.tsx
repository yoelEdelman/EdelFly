import { Platform, StyleSheet } from "react-native";
import { GRAY_DARK, GRAY_MEDIUM, TEXT_COLOR, WHITE } from "../../util/colors";
import {
  normal1,
  normal3,
  regular,
  smallText,
  tooSmallText,
  verySmallText,
} from "../fonts";

const styles = StyleSheet.create({
  price: {
    fontSize: normal1,
    fontFamily: regular,
    fontStyle: "normal",
    // fontWeight: "300",
    //  fontSize: largeText,
    color: TEXT_COLOR,
  },
  airline: {
    fontSize: verySmallText,
    fontFamily: regular,
    fontStyle: "normal",
    textAlign: "center",
    color: GRAY_DARK,
  },
  time: {
    margin: 5,
    fontSize: verySmallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: GRAY_DARK,
  },
  mainTime: {
    margin: 2,
    fontSize: normal3,
    fontFamily: regular,
    fontStyle: "normal",
    color: TEXT_COLOR,
  },
  date: {
    fontSize: tooSmallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: GRAY_DARK,
  },
  location: {
    margin: 5,
    fontSize: smallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: TEXT_COLOR,
  },
  totalTime: {
    margin: 5,
    fontSize: smallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: GRAY_DARK,
  },
  imageStyle: {
    backgroundColor: WHITE,
    borderRadius: 20,
    marginTop: 10,
    width: 40,
    resizeMode: Platform.OS == "ios" ? "contain" : "cover",
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    height: 40,
  },
  background: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    marginVertical: 8,
    alignSelf: "center",
  },
});

export default styles;
