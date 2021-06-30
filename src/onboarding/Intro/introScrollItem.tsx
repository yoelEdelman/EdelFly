import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import PlaneArtImg from "../../../assets/images/ic_plane_art.svg";
import { PRIMARY } from "../../../util/colors";
import { string } from "../../../util/constants";
import { IntroScreenModel } from "./helper";
import styles from "./style";

interface Props {
  screen: IntroScreenModel;
  onClick?: () => void;
}
const IntroItem: React.FC<Props> = ({ screen, onClick }) => {
  return (
    <View
      style={{
        width: Dimensions.get("window").width - 50,
        backgroundColor: PRIMARY,
        alignItems: "center",
        borderRadius: 25,
        marginHorizontal: 25,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingTop: 100,
        paddingBottom: 50,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      }}
      key={screen.heading}
    >
      {screen.asset}
      <View style={styles.wrapper}>
        <Text style={styles.header}>{screen.heading}</Text>
        <Text style={styles.paragraph}>{screen.description}</Text>
      </View>
      <TouchableOpacity
        onPress={onClick}
        disabled={!screen.isLastItem}
        style={{
          ...styles.appButtonContainer,
          opacity: screen.isLastItem ? 1 : 0,
        }}
      >
        <Text style={styles.appButtonText}>{string.GET_STARTED}</Text>
      </TouchableOpacity>
      <PlaneArtImg style={{ marginTop: 20 }} />
    </View>
  );
};

export default IntroItem;
