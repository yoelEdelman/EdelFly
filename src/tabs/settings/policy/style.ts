import { StyleSheet } from "react-native";
import { TEXT_COLOR } from "../../../../util/colors";
import { normal4, regular } from "../../../../util/fonts";

const styles = StyleSheet.create({
  paragraph: {
    fontSize: normal4,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
});

export default styles;
