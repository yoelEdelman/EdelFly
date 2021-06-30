import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import LOCATION_PERMISSION from "../../assets/images/ic_location_permission.svg";
import NOTIFICATION_PERMISSION from "../../assets/images/ic_notification.svg";
// import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from "./style";

interface Props {
  isVisible: boolean;
  title: string;
  icon: string;
  desc: string;
  positiveText?: string;
  negavtiveText?: string;
  callback: (action: boolean) => void;
}

const PermissionDialog: React.FC<Props> = ({
  isVisible,
  icon,
  title,
  desc,
  positiveText = "Allow",
  negavtiveText = "Deny",
  callback,
}) => {
  function getIcon() {
    switch (icon) {
      case "Location":
        return <LOCATION_PERMISSION height={200} />;
      case "Notifications":
        return <NOTIFICATION_PERMISSION height={200} />;
      default:
        return null;
    }
  }
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.root}>
        <View style={styles.background}></View>
        <View style={styles.wrapper}>
          {getIcon()}
          <View style={styles.text_wrapper}>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.paragraph}> {desc}</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
              onPress={() => callback(true)}
              style={styles.primaryButton}
            >
              <Text style={{ ...styles.appButtonText, paddingHorizontal: 50 }}>
                {positiveText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => callback(false)}>
              <Text style={{ ...styles.appButtonText, padding: 20 }}>
                {negavtiveText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PermissionDialog;
