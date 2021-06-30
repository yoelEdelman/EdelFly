import { StyleSheet } from "react-native";
import { BLACK, PRIMARY, TEXT_COLOR, WHITE } from "../colors";
import { normal2, regular } from "../fonts";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.7,
  },
  wrapper: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 40,
    width: "80%",
    borderColor: "transparent",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: WHITE,
  },
  text_wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  header: {
    fontSize: 36,
    color: TEXT_COLOR,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: normal2,
    fontFamily: regular,
    textAlign: "center",
    color: TEXT_COLOR,
  },
  primaryButton: {
    backgroundColor: PRIMARY,
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
    color: BLACK,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default styles;
