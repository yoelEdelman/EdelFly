import { StyleSheet } from "react-native";
import { CHARCOAL } from "../../util/colors";
import { captionNormal, regular } from "../../util/fonts";

const styles = StyleSheet.create({
  label: {
    fontSize: captionNormal,
    fontFamily: regular,
    color: CHARCOAL,
    paddingStart: 8,
    fontWeight: "500",
    marginBottom: 6,
    opacity: 0.8,
  },
});

export default styles;
