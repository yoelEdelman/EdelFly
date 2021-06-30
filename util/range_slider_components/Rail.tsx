import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { GRAY_LIGHT, WHITE } from "../../util/colors";

const Rail = () => {
  return <View style={styles.root} />;
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 30,
    borderRadius: 15,
    backgroundColor: WHITE,
    borderColor: GRAY_LIGHT,
    borderWidth: 1,
  },
});
