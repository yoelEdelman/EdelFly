import { StyleSheet } from "react-native";
import {
  GRAY_LIGHT,
  PRIMARY,
  SEARCH_BACKGROUND,
  SEARCH_BORDER,
  WHITE,
} from "../../../util/colors";
import { largeText, regular, verySmallText } from "../../../util/fonts";

const styles = StyleSheet.create({
  topViewRoot: {
    width: "100%",
    height: 140,
    paddingTop: 10,
    backgroundColor: PRIMARY,
  },
  topViewWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    borderRadius: 65,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: SEARCH_BORDER,
    marginBottom: 20,
    backgroundColor: SEARCH_BACKGROUND,
  },
  time: {
    margin: 5,
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
