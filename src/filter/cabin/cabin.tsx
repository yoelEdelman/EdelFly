import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import {
  GRAY_LIGHT,
  GRAY_MEDIUM,
  PRIMARY,
  TEXT_COLOR,
  WHITE,
} from "../../../util/colors";
import { string } from "../../../util/constants";
import FormChip from "../../../util/formChip";
import PrimaryButton from "../../../util/primaryButton";
import Seperator from "../../../util/seperator";
import { cabbinSection1 } from "../../tabs/settings/helper";
import SettingsItem from "../../tabs/settings/settingsItem";
import styles from "./style";

const cabin = () => {
  const navigation = useNavigation();
  const [economy, setEconomy] = useState(false);
  const [mixed, setMixed] = useState(false);

  function onClick() {
    navigation.goBack();
  }

  function renderSeparator() {
    return <Seperator />;
  }

  function getAutoFillSwitch(key: string) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.paragraph}>
          {key == string.MIXED ? "2300€" : "1000€"}
        </Text>
        <Switch
          value={key == string.MIXED ? mixed : economy}
          onValueChange={(val) =>
            key == string.MIXED ? setMixed(val) : setEconomy(val)
          }
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
      </View>
    );
  }

  function renderSection() {
    return (
      <View style={{ marginBottom: 10 }}>
        {cabbinSection1.map((item) => (
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
              onClick={onClick}
              clickable={item.clickable}
            />
            {renderSeparator()}
          </>
        ))}
      </View>
    );
  }

  const [anyStop, setAnyStop] = useState(true);
  const [oneStop, setOneStop] = useState(false);

  const [departurePrice, setDeparturePrice] = useState(1930);
  const [arrivalPrice, setArrivalPrice] = useState(1930);

  const anyStr = "Toute";
  const oneStopStr = "Aucune";

  function onClickChip(text: string) {
    switch (text) {
      case anyStr:
        setAnyStop(true);
        setOneStop(false);
        break;
      case oneStopStr:
        setAnyStop(false);
        setOneStop(true);
        break;
    }
  }

  function getChips() {
    return (
      <View style={styles.chipGroup}>
        <FormChip
          label={anyStr}
          containerStyle={{
            paddingHorizontal: 40,
          }}
          unselectionBackground={GRAY_LIGHT}
          onClick={onClickChip}
          textStyle={{ color: anyStop ? WHITE : TEXT_COLOR }}
          selected={anyStop}
        />
        <FormChip
          label={oneStopStr}
          containerStyle={{
            paddingHorizontal: 40,
            marginLeft: 10,
          }}
          unselectionBackground={GRAY_LIGHT}
          textStyle={{ color: oneStop ? WHITE : TEXT_COLOR }}
          onClick={onClickChip}
          selected={oneStop}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY }}>
      <View style={{ flex: 1, backgroundColor: WHITE }}>
        {getChips()}
        {renderSeparator()}
        <View style={{ height: 50 }}></View>
        {renderSeparator()}
        {renderSection()}
      </View>
      <View style={{ backgroundColor: PRIMARY }}>
        <PrimaryButton
          label={"Voir les vols"}
          onClick={onClick}
          textStyle={{ color: PRIMARY }}
          containerStyle={{
            margin: 40,
            paddingHorizontal: 80,
            paddingVertical: 15,
            backgroundColor: WHITE,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default cabin;
