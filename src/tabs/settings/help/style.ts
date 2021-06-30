import { StyleSheet } from "react-native";
import { WHITE } from "../../../../util/colors";
import { normal4, regular, smallText } from "../../../../util/fonts";

const styles = StyleSheet.create({
  background: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  version: {
    fontSize: smallText,
    textAlign: "center",
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "300",
    color: WHITE,
  },
  paragraph: {
    fontSize: normal4,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 80,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: WHITE,
  },
});

export default styles;
