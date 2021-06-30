import { StyleSheet } from "react-native";
import { PRIMARY, TEXT_COLOR } from "../../../../util/colors";
import {
  heading3,
  regular,
  smallText,
  verySmallText,
} from "../../../../util/fonts";

const styles = StyleSheet.create({
  background: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    position: "absolute",
  },
  header: {
    fontSize: heading3,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: regular,
    marginLeft: 10,
    fontStyle: "normal",
    fontWeight: "300",
    color: TEXT_COLOR,
  },
  paragraph: {
    fontSize: smallText,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "300",
    color: TEXT_COLOR,
  },
  forgot_password: {
    fontSize: verySmallText,
    marginVertical: 10,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "500",
    color: PRIMARY,
  },
  input_container: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
});

export default styles;
