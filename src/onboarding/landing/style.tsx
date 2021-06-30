import { Platform, StyleSheet } from "react-native";
import { PRIMARY, TEXT_COLOR, WHITE } from "../../../util/colors";
import { regular } from "../../../util/fonts";

const styles = StyleSheet.create({
  ScrollView: {
    flexGrow: 1,
    marginHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  logo_title: {
    margin: 20,
    resizeMode: Platform.OS == "ios" ? "contain" : "cover",
    width: "80%",
  },
  logo: {
    resizeMode: Platform.OS == "ios" ? "contain" : "cover",
    width: 120,
    height: 120,
    margin: 20,
    alignSelf: "center",
  },
  paragraph: {
    color: TEXT_COLOR,
    fontSize: 16,
    fontFamily: regular,
    textAlign: "center",
  },
  link: {
    fontSize: 11,
    fontFamily: regular,
    color: "#0494B4",
    textDecorationLine: "underline",
  },
  primaryButton: {
    backgroundColor: WHITE,
    borderRadius: 30,
    alignSelf: "center",
    paddingVertical: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  appButtonText: {
    fontSize: 18,
    color: PRIMARY,
    alignSelf: "center",
    fontFamily: regular,
    textAlign: "center",
  },
});

export default styles;
