import React, {useState} from 'react';
import {Text, ViewStyle, TouchableOpacity, View, TextStyle} from 'react-native';
import styles from './style';
import FormChip from '../formChip';

interface Props {
  chips: string[];
  containerStyle?: ViewStyle;
  title?: string;
  chipTextStyle?: TextStyle;
  chipContainerStyle?: ViewStyle;
  details?: string[];
  setSelectedChip?: (label: string) => void;
}

const ChipGroup: React.FC<Props> = ({
  chips,
  containerStyle,
  title,
  chipTextStyle,
  chipContainerStyle,
  details,
  setSelectedChip,
}) => {
  const [selected, setSelected] = useState('');

  function onClickChip(label: string) {
    if (setSelectedChip) {
      setSelectedChip(label);
    }
    setSelected(label);
  }

  function getSelected(chip: string) {
    return chip == selected;
  }

  function getMargins(index: number) {
    if (index == 0) {
      return {marginRight: 6};
    } else if (index == chips.length - 1) {
      return {marginLeft: 6};
    } else {
      return {marginLeft: 6, marginRight: 6};
    }
  }

  function getDetails(index: number) {
    if (details) {
      return details[index];
    } else {
      return undefined;
    }
  }

  function renderChips() {
    return chips.map((chip, index) => {
      return (
        <FormChip
          containerStyle={{
            flex: 1,
            ...getMargins(index),
            height: 60,
            ...chipContainerStyle,
          }}
          label={chip}
          onClick={onClickChip}
          selected={getSelected(chip)}
          textStyle={chipTextStyle}
          detail={getDetails(index)}
          key={chip}
        />
      );
    });
  }

  function renderTitle() {
    if (title) {
      return <Text style={styles.label}>{title}</Text>;
    } else {
      return null;
    }
  }
  return (
    <View style={{...containerStyle}}>
      {renderTitle()}
      <View style={{flexDirection: 'row'}}>{renderChips()}</View>
    </View>
  );
};

export default ChipGroup;
