import React, { ReactNode } from "react";
import {
  Text,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  ColorValue,
} from "react-native";
import styles from "./style";
import { PRIMARY, WHITE } from "../../util/colors";

interface Props {
  containerStyle?: ViewStyle;
  label: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  selected?: boolean;
  detail?: string | undefined;
  onClick: (text: string
    ) => void;
  textStyle?: TextStyle;
}

const FormChip: React.FC<Props> = ({
  label,
  iconLeft,
  iconRight,
  containerStyle,
  selected,
  onClick,
  textStyle,
  detail,
}) => {

  return (
    <TouchableOpacity
      onPress={() => {
        onClick(label);
      }}
      style={{ ...styles.primaryButton, ...containerStyle}}
    >
      <>{iconLeft}</>
      <Text
        style={{
          ...styles.appButtonText,
          ...textStyle,
        }}
      >
        {label}
      </Text>
      <>{iconRight}</>
    </TouchableOpacity>
  );
};

export default FormChip;
