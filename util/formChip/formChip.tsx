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
  selectionBackground?: ColorValue;
  unselectionBackground?: ColorValue;
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
  selectionBackground,
  unselectionBackground,
}) => {
  function getBackground() {
    if (selected == true) {
      return {
        backgroundColor:
          selectionBackground != undefined ? selectionBackground : PRIMARY,
      };
    } else {
      return {
        backgroundColor:
          unselectionBackground != undefined ? unselectionBackground : WHITE,
      };
    }
  }

  function renderDetail() {
    if (detail) {
      return <Text style={styles.detail}>{detail}</Text>;
    } else {
      return null;
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        onClick(label);
      }}
      style={{ ...styles.container, ...containerStyle, ...getBackground() }}
    >
      <>{iconLeft}</>
      <Text
        style={{
          ...styles.label,
          ...textStyle,
        }}
      >
        {label}
      </Text>
      <>{iconRight}</>
      {renderDetail()}
    </TouchableOpacity>
  );
};

export default FormChip;
