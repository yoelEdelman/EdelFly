import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { PRIMARY, PRIMARY_DARK } from "../../util/colors";

const THUMB_RADIUS = 15;

const Thumb = () => {
  return <View style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: PRIMARY,
    backgroundColor: PRIMARY_DARK,
  },
});

export default memo(Thumb);
