import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import CheckBox from "react-native-check-box";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import Selected from "../../../assets/images/ic_selected.svg";
import UnSelected from "../../../assets/images/ic_unselected.svg";
import {
  GRAY_DARK,
  GRAY_LIGHT,
  PRIMARY,
  TEXT_COLOR,
  WHITE,
} from "../../../util/colors";
import { string } from "../../../util/constants";
import FormChip from "../../../util/formChip";
import PrimaryButton from "../../../util/primaryButton";
import Seperator from "../../../util/seperator";
import { airlinesSection1, airlinesSection2 } from "../../tabs/settings/helper";
import SettingsItem from "../../tabs/settings/settingsItem";
import styles from "./style";
const airlines = () => {
  const navigation = useNavigation();
  const [alliance, setAlliances] = useState(false);

  const [airline1, setairline1] = useState(false);
  const [airline2, setairline2] = useState(false);
  const [airline3, setairline3] = useState(false);
  const [airline4, setairline4] = useState(false);
  const [airline5, setairline5] = useState(false);
  const [airline6, setairline6] = useState(false);
  const [airline7, setairline7] = useState(false);
  const [airline8, setairline8] = useState(false);

  function onClick() {
    navigation.goBack();
  }

  function renderSeparator() {
    return <Seperator />;
  }

  function getAlliancesSwitch() {
    return (
      <Switch
        value={alliance}
        onValueChange={(val) => setAlliances(val)}
        disabled={false}
        activeText={"On"}
        inActiveText={"Off"}
        circleSize={20}
        barHeight={25}
        circleBorderWidth={0}
        backgroundActive={PRIMARY}
        backgroundInactive={GRAY_LIGHT}
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

  function setAirlineValue(key: string) {
    switch (key) {
      case string.AIRLINE1:
        setairline1(!airline1);
        break;
      case string.AIRLINE2:
        setairline2(!airline2);
        break;
      case string.AIRLINE3:
        setairline3(!airline3);
        break;
      case string.AIRLINE4:
        setairline4(!airline4);
        break;
      case string.AIRLINE5:
        setairline5(!airline5);
        break;
      case string.AIRLINE6:
        setairline6(!airline6);
        break;
      case string.AIRLINE7:
        setairline7(!airline7);
        break;
      case string.AIRLINE8:
        setairline8(!airline8);
        break;
    }
  }

  function getAirlineValue(key: string) {
    switch (key) {
      case string.AIRLINE1:
        return airline1;
      case string.AIRLINE2:
        return airline2;
      case string.AIRLINE3:
        return airline3;
      case string.AIRLINE4:
        return airline4;
      case string.AIRLINE5:
        return airline5;
      case string.AIRLINE6:
        return airline6;
      case string.AIRLINE7:
        return airline7;
      case string.AIRLINE8:
        return airline8;
    }
  }

  function getCheckBox(key: string) {
    return (
      <CheckBox
        checkedImage={<Selected />}
        unCheckedImage={<UnSelected />}
        onClick={() => {
          setAirlineValue(key);
        }}
        isChecked={getAirlineValue(key)}
      />
    );
  }

  function renderSection2() {
    return (
      <View style={{ marginBottom: 10 }}>
        {airlinesSection2.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={
                item.iconRight ? item.iconRight : getCheckBox(item.heading)
              }
              title={item.heading}
              onClick={() => {
                setAirlineValue(item.heading);
              }}
            />
            {renderSeparator()}
          </>
        ))}
      </View>
    );
  }

  function renderSection1() {
    return (
      <View>
        {airlinesSection1.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight ? item.iconRight : getAlliancesSwitch()}
              title={item.heading}
              onClick={onClick}
              textStyle={{ color: GRAY_DARK }}
              containerStyle={{ backgroundColor: WHITE, paddingVertical: 20 }}
              clickable={item.clickable}
            />
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
        {renderSection1()}
        {renderSeparator()}
        {renderSection2()}
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

export default airlines;
