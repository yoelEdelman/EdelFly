import { StyleSheet } from "react-native";
import { LIGHT_GRAY_BG, TEXT_COLOR } from "../../../util/colors";
import { regular, smallText } from "../../../util/fonts";

const styles = StyleSheet.create({
  paragraph: {
    fontSize: smallText,
    textAlign: "center",
    padding: 5,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "300",
    color: TEXT_COLOR,
  },
  chipGroup: {
    backgroundColor: LIGHT_GRAY_BG,
    padding: 20,
    flexDirection: "row",
  },
});

export default styles;
