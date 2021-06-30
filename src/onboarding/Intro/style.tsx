import { StyleSheet } from "react-native";
import { PRIMARY, WHITE } from "../../../util/colors";

const styles = StyleSheet.create({
  imageStyle: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  header: {
    fontSize: 26,
    color: WHITE,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    color: WHITE,
    fontSize: 14,
    textAlign: "center",
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
  paginationWrapper: {
    margin: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 8,
    width: 8,
    borderRadius: 10 / 2,
    marginLeft: 5,
  },
  appButtonContainer: {
    backgroundColor: WHITE,
    borderRadius: 30,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
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
  skipButtonContainer: {
    padding: 30,
    alignSelf: "flex-end",
  },
  appButtonText: {
    fontSize: 18,
    color: PRIMARY,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default styles;
