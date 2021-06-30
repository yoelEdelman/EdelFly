import { StyleSheet } from "react-native";
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
    marginHorizontal: 25,
    color: GRAY_DARK,
  },
  chipGroup: {
    marginHorizontal: 20,
    marginVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  item_title: {
    fontSize: normal2,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
  description: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: smallText,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: GRAY_DARK,
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 20,
    alignSelf: "center",
  },
  search_bar: {
    backgroundColor: GRAY_LIGHT,
    borderRadius: 30,
    alignSelf: "center",
    paddingVertical: 20,
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
