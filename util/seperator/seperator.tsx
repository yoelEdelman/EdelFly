import * as React from "react";
import { View, ViewStyle } from "react-native";
import { GRAY_MEDIUM } from "../colors";

interface Props {
  containerStyle?: ViewStyle;
}

const Seperator: React.FC<Props> = ({ containerStyle }) => {
  return (
    <View
      key={Math.random() * 100}
      style={{ backgroundColor: GRAY_MEDIUM, height: 0.5, ...containerStyle }}
    />
  );
};

export default Seperator;
