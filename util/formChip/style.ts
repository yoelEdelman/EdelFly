import { StyleSheet } from "react-native";
import { TEXT_COLOR } from "../../util/colors";
import { normal4, regular } from "../../util/fonts";

const styles = StyleSheet.create({
  label: {
    fontFamily: regular,
    fontSize: normal4,
    fontWeight: "400",
    textAlign: "center",
    color: TEXT_COLOR,
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",

    paddingVertical: 10,
    flexDirection: "row",
    borderRadius: 27,
    backgroundColor: "#FFF",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.65,
  },

  detail: {
    fontFamily: regular,
    fontSize: normal4,
    textAlign: "center",
    color: TEXT_COLOR,
    opacity: 0.7,
  },
});

export default styles;
