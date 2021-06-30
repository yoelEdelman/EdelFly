import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { PRIMARY } from "../../util/colors";

const Notch = () => {
  return <View style={styles.root} />;
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: PRIMARY,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});
