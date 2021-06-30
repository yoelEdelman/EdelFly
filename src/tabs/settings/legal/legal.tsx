import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { LIGHT_GRAY_BG } from "../../../../util/colors";
import Seperator from "../../../../util/seperator";
import { legalSection1 } from "../helper";
import SettingsItem from "../settingsItem";
const legal = () => {
  const navigation = useNavigation();

  function renderSeparator() {
    return <Seperator />;
  }

  function onClick(navigationScreen: string) {
    navigation.navigate(navigationScreen);
  }

  function renderSection3() {
    return (
      <View style={{ marginBottom: 10 }}>
        {legalSection1.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              title={item.heading}
              onClick={onClick}
              clickable={item.clickable}
            />
            {renderSeparator()}
          </>
        ))}
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      {renderSection3()}
    </SafeAreaView>
  );
};

export default legal;
