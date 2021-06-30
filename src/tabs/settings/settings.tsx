import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Linking, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import { LIGHT_GRAY_BG } from "../../../util/colors";
import Seperator from "../../../util/seperator";
import { settingsSection1, settingsSection2, settingsSection3 } from "./helper";
import SettingsItem from "./settingsItem";
import styles from "./style";
const Settings = () => {
  const navigation = useNavigation();

  function renderSeparator() {
    return <Seperator />;
  }

  function onClick(navigationScreen: string) {
    navigation.navigate(navigationScreen);
  }

  function renderSection1() {
    return (
      <View key={Math.random() * 100} style={{ marginBottom: 10 }}>
        {settingsSection1.map((item) => (
          <View key={Math.random() * 100}>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              title={item.heading}
              onClick={onClick}
            />
            {renderSeparator()}
          </View>
        ))}
      </View>
    );
  }

  function renderSection2() {
    return (
      <View key={Math.random() * 100} style={{ marginBottom: 10 }}>
        {settingsSection2.map((item) => (
          <View key={Math.random() * 100}>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              title={item.heading}
              onClick={onClick}
            />
            {renderSeparator()}
          </View>
        ))}
      </View>
    );
  }

  function renderSection3() {
    return (
      <View key={Math.random() * 100}>
        {settingsSection3.map((item) => (
          <View key={Math.random() * 100}>
            <SettingsItem
              key={item.heading}
              onClick={onClick}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              title={item.heading}
            />
            {renderSeparator()}
          </View>
        ))}
      </View>
    );
  }
  function renderSkyScannerLogo() {
    return (
      <TouchableOpacity
        key={Math.random() * 100}
        onPress={() => {
          Linking.openURL("https://www.skyscanner.net").catch((err) =>
            console.error("Couldn't load page", err)
          );
        }}
      >
        <Image
          source={require("../../../assets/images/ic_sky_scanner.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      <ScrollView>
        {renderSection1()}
        {renderSeparator()}
        {renderSection2()}
        {renderSeparator()}
        {renderSection3()}
        {/*{renderSkyScannerLogo()}*/}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
