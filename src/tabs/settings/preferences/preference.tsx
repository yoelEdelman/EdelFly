import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  LIGHT_GRAY_BG,
  PRIMARY,
} from "../../../../util/colors";
import Seperator from "../../../../util/seperator";
import {
  preferencesSection1,
  preferencesSection2,
  preferencesSection3,
} from "../helper";
import SettingsItem from "../settingsItem";
import styles from "./style";
const preferences = () => {
  const navigation = useNavigation();
  const [autoFill, setAutoFill] = useState(false);

  function onClick(navigationScreen: string) {
    navigation.navigate(navigationScreen);
  }

  function renderSeparator() {
    return <Seperator />;
  }

  function renderInputs() {
    return (
      <View style={styles.input_container}>
        <TextInput
          style={{ paddingHorizontal: 30, paddingVertical: 20 }}
          placeholder="Prénom"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          style={{ paddingHorizontal: 30, paddingVertical: 20 }}
          placeholder="Nom de famille"
          placeholderTextColor={GRAY_DARK}
        />
      </View>
    );
  }

  function renderSection1() {
    return (
      <View style={{ marginBottom: 10 }}>
        {preferencesSection1.map((item) => (
          <>
            {renderSeparator()}
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              title={item.heading}
              onClick={onClick}
            />
            {renderSeparator()}
          </>
        ))}
      </View>
    );
  }

  function getCurrency() {
    return <Text style={{ color: GRAY_DARK }}>{"€(EUR)"}</Text>;
  }

  function getAutoFillSwitch() {
    return (
      <Switch
        value={autoFill}
        onValueChange={(val) => setAutoFill(val)}
        disabled={false}
        activeText={"On"}
        inActiveText={"Off"}
        circleSize={20}
        barHeight={25}
        circleBorderWidth={0}
        backgroundActive={PRIMARY}
        backgroundInactive={GRAY_MEDIUM}
        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
        innerCircleStyle={{
          alignItems: "center",
          justifyContent: "center",
        }} // style for inner animated circle for what you (may) be rendering inside the circle
        outerCircleStyle={{}} // style for outer animated circle
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={2.5} // multipled by the `circleSize` prop to calculate total width of the Switch
        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
      />
    );
  }

  function renderSection2() {
    return (
      <View style={{ marginBottom: 10 }}>
        {preferencesSection2.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight ? item.iconRight : getCurrency()}
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

  function renderSection3() {
    return (
      <View style={{ marginBottom: 10 }}>
        {preferencesSection3.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight ? item.iconRight : getAutoFillSwitch()}
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
      {renderInputs()}
      {renderSection1()}
      {renderSeparator()}
      {renderSection2()}
      {renderSection3()}
    </SafeAreaView>
  );
};

export default preferences;
