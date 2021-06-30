import { StyleSheet } from "react-native";
import { TEXT_COLOR } from "../../../../util/colors";
import { captionNormal, regular } from "../../../../util/fonts";

const styles = StyleSheet.create({
  header: {
    fontSize: captionNormal,
    marginTop: 15,
    marginLeft: 5,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },

  input_container: {
    marginHorizontal: 20,
  },

  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default styles;
