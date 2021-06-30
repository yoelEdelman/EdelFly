import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import {
  GRAY_MEDIUM,
  LIGHT_GRAY_BG,
  PRIMARY,
  WHITE,
} from "../../../../util/colors";
import { string } from "../../../../util/constants";
import Seperator from "../../../../util/seperator";
import { notificationSection1 } from "../helper";
import SettingsItem from "../settingsItem";
const notification = () => {
  const navigation = useNavigation();
  const [pushNoti, setPushNoti] = useState(false);
  const [emailNoti, setEmailNoti] = useState(false);
  const [spcialOffers, setSpcialOffers] = useState(false);
  const [getways, setGetways] = useState(false);

  function renderSeparator() {
    return <Seperator />;
  }

  function getSocialValue(key: string): boolean {
    switch (key) {
      case string.PUSH_NOTI:
        return pushNoti;
      case string.EMAIL_NOTI:
        return emailNoti;
      case string.SPECIAL_OFFERS:
        return spcialOffers;
      case string.GREAT_GETWAYS:
        return getways;
    }
    return false;
  }

  function setSocialValue(key: string, value: boolean) {
    switch (key) {
      case string.PUSH_NOTI:
        setPushNoti(value);
        break;
      case string.EMAIL_NOTI:
        setEmailNoti(value);
        break;
      case string.SPECIAL_OFFERS:
        setSpcialOffers(value);
        break;
      case string.GREAT_GETWAYS:
        setGetways(value);
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
        {/* <SettingsItem
            key={item.heading}
          title={"item.heading"}
          onClick={() => {}}
          clickable={false}
          containerStyle={{ backgroundColor: WHITE, height: 100 }}
        />
        {renderSeparator()} */}
        {notificationSection1.map((item) => (
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
              description={item.description}
              containerStyle={
                item.heading == string.PUSH_NOTI
                  ? { backgroundColor: WHITE, height: 100 }
                  : {}
              }
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

export default notification;
