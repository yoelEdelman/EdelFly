import React from "react";
import { Text, View } from "react-native";
import Counter from "react-native-counters";
import { BLACK, PRIMARY, WHITE } from "../../../../util/colors";
import styles from "./style";

interface Props {
  title: string;
  description: string;
  value: number;
  onClick?: (number: number, type: string, key: string) => void;
}
const SelectTraveller: React.FC<Props> = ({
  title,
  description,
  value,
  onClick,
}) => {
  return (
    <View style={styles.item_container}>
      <Text
        style={{
          ...styles.item_title,
        }}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text
        style={{
          ...styles.description,
        }}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {description}
      </Text>
      <Counter
        start={value}
        onChange={(number: any, type: any) => onClick!(number, type, title)}
        buttonStyle={{
          backgroundColor: PRIMARY,
          borderWidth: 0,
          borderRadius: 25,
          minWidth: 22,
          minHeight: 22,
        }}
        buttonTextStyle={{
          color: WHITE,
        }}
        countTextStyle={{
          color: BLACK,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      />
    </View>
  );
};

export default SelectTraveller;
