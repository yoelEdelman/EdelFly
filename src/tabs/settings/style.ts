import { StyleSheet } from "react-native";
import { GRAY_DARK, LIGHT_GRAY_BG, TEXT_COLOR } from "../../../util/colors";
import { normal3, regular, smallText } from "../../../util/fonts";

const styles = StyleSheet.create({
  title: {
    fontSize: normal3,
    fontFamily: regular,
    marginLeft: 10,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
  description: {
    fontSize: smallText,
    fontFamily: regular,
    marginLeft: 10,
    fontStyle: "normal",
    fontWeight: "300",
    color: GRAY_DARK,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: LIGHT_GRAY_BG,
    alignItems: "center",
  },
  image: {
    width: "50%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default styles;
