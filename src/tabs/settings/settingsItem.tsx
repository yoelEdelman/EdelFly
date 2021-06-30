import React, { ReactNode } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./style";

interface Props {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  title: string;
  description?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  clickable?: boolean;
  onClick: (key: string) => void;
}
export const Item: React.FC<Props> = ({
  iconLeft,
  title,
  iconRight,
  onClick,
  containerStyle,
  description,
  textStyle,
  clickable,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...containerStyle }}
      onPress={() => {
        onClick(title);
      }}
      disabled={!(clickable != undefined ? clickable : true)}
    >
      <>{iconLeft}</>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            ...styles.title,
            ...textStyle,
          }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {title}
        </Text>
        {description ? (
          <Text
            style={{
              ...styles.description,
              ...textStyle,
            }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {description}
          </Text>
        ) : null}
      </View>

      <>{iconRight}</>
    </TouchableOpacity>
  );
};
export default Item;
