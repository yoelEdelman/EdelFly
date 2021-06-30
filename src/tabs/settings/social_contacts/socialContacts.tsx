import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import { GRAY_MEDIUM, LIGHT_GRAY_BG, PRIMARY } from "../../../../util/colors";
import { string } from "../../../../util/constants";
import Seperator from "../../../../util/seperator";
import { socialContactsSection3 } from "../helper";
import SettingsItem from "../settingsItem";
const socialContacts = () => {
  const navigation = useNavigation();
  const [google, setGoogle] = useState(false);
  const [faceook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);

  function renderSeparator() {
    return <Seperator />;
  }

  function getSocialValue(key: string): boolean {
    switch (key) {
      case string.GOOGLE:
        return google;
      case string.FACEBOOK:
        return faceook;
      case string.TWITTER:
        return twitter;
    }
    return false;
  }

  function setSocialValue(key: string, value: boolean) {
    switch (key) {
      case string.GOOGLE:
        setGoogle(value);
        break;
      case string.FACEBOOK:
        setFacebook(value);
        break;
      case string.TWITTER:
        setTwitter(value);
        break;
    }
  }

  function getAutoFillSwitch(title: string) {
    return (
      <Switch
        value={getSocialValue(title)}
        onValueChange={(val) => setSocialValue(title, val)}
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

  function renderSection3() {
    return (
      <View style={{ marginBottom: 10 }}>
        {socialContactsSection3.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={
                item.iconRight
                  ? item.iconRight
                  : getAutoFillSwitch(item.heading)
              }
              title={item.heading}
              onClick={() => {}}
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

export default socialContacts;
