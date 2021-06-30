import { Platform, StyleSheet } from "react-native";
import {
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  PRIMARY,
  WHITE,
} from "../../../util/colors";
import { largeText, regular, verySmallText } from "../../../util/fonts";

const styles = StyleSheet.create({
  topViewWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: PRIMARY,
  },
  imageStyle: {
    backgroundColor: WHITE,
    borderRadius: 25,
    width: 50,
    margin: 10,
    height: 50,
    resizeMode: Platform.OS == "ios" ? "contain" : "cover",
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
  },
  time: {
    marginVertical: 5,
    fontSize: verySmallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: GRAY_LIGHT,
  },
  dateTime: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  flightView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chipGroup: {
    margin: 10,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  mainTime: {
    margin: 2,
    fontSize: largeText,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "300",
    color: WHITE,
  },
  price: {
    fontSize: largeText,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
  },
  priceContainer: {
    flexDirection: "row",
    backgroundColor: GRAY_LIGHT,
    borderBottomWidth: 0.5,
    borderColor: GRAY_MEDIUM,
    padding: 20,
    alignItems: "center",
  },
  baggage: {
    fontSize: verySmallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: GRAY_DARK,
  },
  date: {
    fontSize: verySmallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: WHITE,
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
