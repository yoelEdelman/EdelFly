import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import RangeSlider from "rn-range-slider";
import { GRAY_LIGHT, TEXT_COLOR, WHITE } from "../../../util/colors";
import FormChip from "../../../util/formChip";
import Label from "../../../util/range_slider_components/Label";
import Notch from "../../../util/range_slider_components/Notch";
import Rail from "../../../util/range_slider_components/Rail";
import RailSelected from "../../../util/range_slider_components/RailSelected";
import Thumb from "../../../util/range_slider_components/Thumb";
import Seperator from "../../../util/seperator";
import { filterSection1 } from "../../tabs/settings/helper";
import SettingsItem from "../../tabs/settings/settingsItem";
import styles from "./style";

const filter = () => {
  const navigation = useNavigation();
  const [departure, setDeparture] = useState("San Francisco");
  const [arrival, setArrival] = useState("London");

  const [departStartTime, setDepartStartTime] = useState(0);
  const [departEndTime, setDepartEndTime] = useState(0);

  const [arrivalStartTime, setArrivalStartTime] = useState(0);
  const [arrivalEndTime, setArrivalEndTime] = useState(0);

  function onClick(navigationScreen: string) {
    navigation.navigate(navigationScreen);
  }

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value) => <Label text={getTime(value)} />,
    []
  );
  const renderNotch = useCallback(() => <Notch />, []);
  const handleDepartureTimeChange = useCallback((low, high) => {
    setDeparturePrice(low * high + 1000);
    setDepartStartTime(low);
    setDepartEndTime(high);
  }, []);

  const handleArrivalTimeChange = useCallback((low, high) => {
    setArrivalPrice(low * high + 1000);
    setArrivalStartTime(low);
    setArrivalEndTime(high);
  }, []);

  const [anyStop, setAnyStop] = useState(true);
  const [oneStop, setOneStop] = useState(false);
  const [nonStop, setNonStop] = useState(false);

  const [departurePrice, setDeparturePrice] = useState(1930);
  const [arrivalPrice, setArrivalPrice] = useState(1930);

  const anyStr = "Indifférent";
  const oneStopStr = "1 escale";
  const nonStopStr = "Sans escale";

  function onClickChip(text: string) {
    switch (text) {
      case anyStr:
        setAnyStop(true);
        setOneStop(false);
        setNonStop(false);
        break;
      case oneStopStr:
        setAnyStop(false);
        setOneStop(true);
        setNonStop(false);
        break;
      case nonStopStr:
        setAnyStop(false);
        setOneStop(false);
        setNonStop(true);
        break;
    }
  }

  function renderSeparator() {
    return <Seperator />;
  }

  function getChips() {
    return (
      <View style={styles.chipGroup}>
        <FormChip
          label={anyStr}
          containerStyle={{
            flex: 1,
          }}
          unselectionBackground={GRAY_LIGHT}
          onClick={onClickChip}
          textStyle={{ color: anyStop ? WHITE : TEXT_COLOR }}
          selected={anyStop}
        />
        <FormChip
          label={oneStopStr}
          containerStyle={{
            flex: 1,
            marginLeft: 10,
          }}
          unselectionBackground={GRAY_LIGHT}
          textStyle={{ color: oneStop ? WHITE : TEXT_COLOR }}
          onClick={onClickChip}
          selected={oneStop}
        />
        <FormChip
          label={nonStopStr}
          containerStyle={{
            flex: 1,
            marginLeft: 10,
          }}
          textStyle={{ color: nonStop ? WHITE : TEXT_COLOR }}
          unselectionBackground={GRAY_LIGHT}
          onClick={onClickChip}
          selected={nonStop}
        />
      </View>
    );
  }
  function renderSection1() {
    return (
      <View style={{ marginBottom: 10 }}>
        {filterSection1.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              title={item.heading}
              containerStyle={{ backgroundColor: WHITE }}
              onClick={onClick}
            />
            {renderSeparator()}
          </>
        ))}
      </View>
    );
  }

  function getTime(time: number) {
    return (time % 12 == 0 ? 12 : time % 12) + (time < 12 ? " am" : " pm");
  }

  function getTakeOffTopView(
    destination: string,
    startTime: number,
    endTime: number
  ) {
    return (
      <View style={styles.takeOffTopContainer}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.blackParagraph}>{"Décollage"}</Text>
          <Text style={styles.paragraph}>{" de "}</Text>
          <Text style={styles.paragraph}>{destination}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.blackParagraph}>{getTime(startTime)}</Text>
          <Text style={styles.paragraph}>{"-"}</Text>
          <Text style={styles.blackParagraph}>{getTime(endTime)}</Text>
        </View>
      </View>
    );
  }

  function getRangeView(price: number, handleValueChange: any) {
    return (
      <View style={styles.rangContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price + " €"}</Text>
        </View>
        <RangeSlider
          style={{ flex: 1, marginHorizontal: 10 }}
          min={0}
          max={23}
          step={1}
          floatingLabel
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
      </View>
    );
  }

  function getTakeOfView(
    destination: string,
    price: number,
    startTime: number,
    endTime: number,
    handleValueChange: any
  ) {
    return (
      <View style={styles.takeOffContainer}>
        {getTakeOffTopView(destination, startTime, endTime)}
        {getRangeView(price, handleValueChange)}
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <Text style={styles.header}>{"Escale"}</Text>
      {getChips()}
      <Text style={styles.header}>{"Durée"}</Text>
      {getTakeOfView(
        departure,
        departurePrice,
        departStartTime,
        departEndTime,
        handleDepartureTimeChange
      )}
      {getTakeOfView(
        arrival,
        arrivalPrice,
        arrivalStartTime,
        arrivalEndTime,
        handleArrivalTimeChange
      )}
      {renderSeparator()}
      {renderSection1()}
    </SafeAreaView>
  );
};

export default filter;
