import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LOGO from "../../../../assets/images/ic_about_logo.svg";
import { version } from "../../../../package.json";
import { LIGHT_GRAY_BG } from "../../../../util/colors";
import styles from "./style";

const about = () => {
  const navigation = useNavigation();

  function renderBackground() {
    return (
      <ImageBackground
        source={require("../../../../assets/images/bg_about.png")}
        style={styles.background}
        resizeMode={"stretch"}
      />
    );
  }

  function renderInfo() {
    return (
      <View style={{ alignItems: "center", margin: 40 }}>
        <LOGO />
        <Text style={styles.paragraph}>
          {"Ici pour vous aider à planifier le voyage \nle plus " +
          "confortable"}
        </Text>
        <Text style={styles.version}>{"Version: " + version}</Text>
        <Text style={styles.version}>{"© 2021 Yoel EDELMAN"}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      {renderBackground()}
      {renderInfo()}
    </SafeAreaView>
  );
};

export default about;
