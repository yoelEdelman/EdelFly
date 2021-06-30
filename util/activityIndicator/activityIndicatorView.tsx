import * as React from "react";
import { ActivityIndicator, ColorValue, View } from "react-native";
import { PRIMARY, TRANSPARENT } from "../colors";
import AppStyles from "../styles";

interface Props {
  backgroundColor?: ColorValue;
  indicatorColor?: ColorValue;
}

const ActivityIndicatorView: React.FC<Props> = ({
  backgroundColor = TRANSPARENT,
  indicatorColor = PRIMARY,
}) => {
  return (
    <View
      style={{
        ...AppStyles.absoluteCenter,
        ...AppStyles.centerChildren,
        backgroundColor: backgroundColor,
      }}
    >
      <ActivityIndicator color={indicatorColor} size="large" />
    </View>
  );
};

export default ActivityIndicatorView;
