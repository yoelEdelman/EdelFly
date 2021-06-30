import { Platform, StyleSheet } from "react-native";
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  TEXT_COLOR,
  WHITE,
} from "../../../util/colors";
import { normal2, normal4, regular, smallText } from "../../../util/fonts";

const styles = StyleSheet.create({
  title: {
    flex: 1,
    margin: 5,
    fontSize: normal2,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
  address: {
    margin: 5,
    fontSize: normal4,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "300",
    color: TEXT_COLOR,
  },
  time: {
    margin: 5,
    fontSize: smallText,
    fontFamily: regular,
    fontStyle: "normal",
    color: GRAY_DARK,
  },
  imageStyle: {
    backgroundColor: WHITE,
    borderRadius: 25,
    width: 50,
    height: 50,
    borderWidth: 1,
    resizeMode: Platform.OS == "ios" ? "contain" : "cover",
    borderColor: GRAY_MEDIUM,
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
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    alignSelf: "center",
  },
});

export default styles;
