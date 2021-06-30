import { StyleSheet } from "react-native";
import {
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_STRONG,
  PRIMARY,
  TEXT_COLOR,
} from "../../../../util/colors";
import { captionLarge, captionMedium, regular } from "../../../../util/fonts";

const styles = StyleSheet.create({
  title: {
    fontSize: captionLarge,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    marginHorizontal: 25,
    color: GRAY_DARK,
  },
  date: {
    fontSize: captionMedium,
    fontFamily: regular,
    fontStyle: "normal",
    fontWeight: "400",
    color: TEXT_COLOR,
  },
  daysContatiner: {
    backgroundColor: GRAY_LIGHT,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderWidth: 1,
    borderTopColor: GRAY_STRONG,
    borderLeftColor: GRAY_LIGHT,
    borderRightColor: GRAY_LIGHT,
    borderBottomColor: GRAY_STRONG,
  },
  dayText: { flex: 1, textAlign: "center", color: PRIMARY },
  calendarMonthView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default styles;
