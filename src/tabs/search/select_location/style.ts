import { Platform, StyleSheet } from "react-native";
import { GRAY_DARK, GRAY_LIGHT, TEXT_COLOR } from "../../../../util/colors";
import {
  captionLarge,
  normal2,
  regular,
  smallText,
} from "../../../../util/fonts";

const styles = StyleSheet.create({
  title: {
    fontSize: captionLarge,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    marginHorizontal: 45,
    color: GRAY_DARK,
  },
  location: {
    flex: 1,
    fontSize: normal2,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
  state: {
    fontSize: smallText,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "300",
    color: TEXT_COLOR,
  },
  shortForm: {
    margin: 2,
    fontSize: normal2,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
  item_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 8,
    alignSelf: "center",
  },
  search_bar: {
    backgroundColor: GRAY_LIGHT,
    borderRadius: 30,
    alignSelf: "center",
    paddingVertical: Platform.OS == "ios" ? 20 : 0,
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 25,
  },
  search_input: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default styles;
