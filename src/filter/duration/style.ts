import { StyleSheet } from "react-native";
import {
  BLACK,
  GRAY_DARK,
  GRAY_LIGHT,
  PRIMARY,
  TEXT_COLOR,
} from "../../../util/colors";
import { captionMedium, regular, smallText } from "../../../util/fonts";

const styles = StyleSheet.create({
  header: {
    fontSize: captionMedium,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
  paragraph: {
    fontSize: smallText,
    marginVertical: 10,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "300",
    color: GRAY_DARK,
  },
  blackParagraph: {
    fontSize: smallText,
    marginVertical: 10,
    fontFamily: regular,
    fontStyle: "normal",
    color: BLACK,
    fontWeight: "400",
    marginLeft: 5,
  },
  takeOffContainer: {
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 10,
    justifyContent: "center",
  },
  takeOffTopContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rangContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: PRIMARY,
  },
  timeContainer: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: GRAY_LIGHT,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
});

export default styles;
