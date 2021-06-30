import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { PRIMARY } from "../../util/colors";

const RailSelected = () => {
  return <View style={styles.root} />;
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 30,
    backgroundColor: PRIMARY,
  },
});
