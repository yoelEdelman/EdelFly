import { StyleSheet } from "react-native";
import { PRIMARY, WHITE } from "../colors";
import { captionNormal, regular, smallText } from "../fonts";

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
    borderColor: "transparent",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY,
  },
  text_wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  header: {
    fontSize: captionNormal,
    color: WHITE,
    fontWeight: "300",
  },
  paragraph: {
    fontSize: smallText,
    fontFamily: regular,
    marginVertical: 5,
    textAlign: "center",
    fontWeight: "300",
    color: WHITE,
  },
});

export default styles;
