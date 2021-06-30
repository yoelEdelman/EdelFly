import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PRIMARY, WHITE } from "../../util/colors";

interface Props {
  text: string;
}

const Label: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 8,
    backgroundColor: PRIMARY,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: WHITE,
  },
});

export default memo(Label);
