import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";

interface Props {
  imageUrl?: string;
  title: string;
  address: string;
  time: string;
  onClick?: () => {};
}
const NotificationItem: React.FC<Props> = ({
  imageUrl,
  time,
  title,
  address,
  onClick,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <ImageBackground
        source={require("../../../assets/images/ic_notification_item_bg.png")}
        style={styles.background}
        resizeMode={"stretch"}
      />
      <Image source={{ uri: imageUrl }} style={{ ...styles.imageStyle }} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...styles.title,
            }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            style={{
              ...styles.time,
            }}
            numberOfLines={1}
          >
            {time}
          </Text>
        </View>
        <Text style={styles.address} ellipsizeMode="tail">
          {address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
