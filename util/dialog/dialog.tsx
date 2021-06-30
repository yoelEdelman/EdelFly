import React, { ReactNode } from "react";
import { Modal, Text, View } from "react-native";
// import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from "./style";

interface Props {
  isVisible: boolean;
  title: string;
  icon: ReactNode;
  desc: string;
}

const Dialog: React.FC<Props> = ({ isVisible, icon, title, desc }) => {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.root}>
        <View style={styles.background}></View>
        <View style={styles.wrapper}>
          {icon}
          <View style={styles.text_wrapper}>
            {title ? <Text style={styles.header}>{title}</Text> : null}
            {desc ? <Text style={styles.paragraph}> {desc}</Text> : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;
