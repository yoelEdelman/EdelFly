import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import RangeSlider from "rn-range-slider";
import { PRIMARY, WHITE } from "../../../util/colors";
import PrimaryButton from "../../../util/primaryButton";
import Label from "../../../util/range_slider_components/Label";
import Notch from "../../../util/range_slider_components/Notch";
import Rail from "../../../util/range_slider_components/Rail";
import RailSelected from "../../../util/range_slider_components/RailSelected";
import Thumb from "../../../util/range_slider_components/Thumb";
import Seperator from "../../../util/seperator";
import styles from "./style";

const duration = () => {
  const navigation = useNavigation();
  const [departure, setDeparture] = useState("BRC");
  const [arrival, setArrival] = useState("SFO");

  const [departStartStopOver, setDepartStartStopOver] = useState(0);
  const [departEndStopOver, setDepartEndStopOver] = useState(0);
  const [departStartFlightLeg, setDepartStartFlightLeg] = useState(0);
  const [departEndFlightLeg, setDepartEndFlightLeg] = useState(0);

  const [arrivalStartStopOver, setArrivalStartStopOver] = useState(0);
  const [arrivalEndStopOver, setArrivalEndStopOver] = useState(0);
  const [arrivalStartFlightLeg, setArrivalStartFlightLeg] = useState(0);
  const [arrivalEndFlightLeg, setArrivalEndFlightLeg] = useState(0);

  function onClick() {
    navigation.goBack();
  }

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value) => <Label text={getTime(value)} />,
    []
  );
  const renderNotch = useCallback(() => <Notch />, []);

  const handleDepartureStopOverChange = useCallback((low, high) => {
    setDepartStartStopOver(low);
    setDepartEndStopOver(high);
  }, []);

  const handleArrivalStopOverChange = useCallback((low, high) => {
    setArrivalStartStopOver(low);
    setArrivalEndStopOver(high);
  }, []);

  const handleDepartureFlightLegChange = useCallback((low, high) => {
    setDepartStartFlightLeg(low);
    setDepartEndFlightLeg(high);
  }, []);

  const handleArrivalFlightLegChange = useCallback((low, high) => {
    setArrivalStartFlightLeg(low);
    setArrivalEndFlightLeg(high);
  }, []);

  function renderSeparator() {
    return <Seperator />;
  }

  function getTime(time: number) {
    return Math.floor(time / 60) + "h " + (time % 60) + "m";
  }

  function getTakeOffTopView(destination: string) {
    return (
      <View style={styles.takeOffTopContainer}>
        <Text style={styles.header}>{"Décollage"}</Text>
        <Text style={styles.header}>{" de "}</Text>
        <Text style={{ ...styles.header, color: PRIMARY }}>{destination}</Text>
      </View>
    );
  }

  function getRangeView(handleValueChange: any) {
    return (
      <View style={styles.rangContainer}>
        <RangeSlider
          style={{ flex: 1, marginHorizontal: 10 }}
          min={0}
          max={1440}
          step={10}
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
    startStartOver: number,
    endStartOver: number,
    handleValueChange: any,
    startFlightLeg: number,
    endFlightLeg: number,
    handleValueChange1: any
  ) {
    return (
      <View style={styles.takeOffContainer}>
        <Text style={styles.blackParagraph}>{"Escale"}</Text>
        {getRangeView(handleValueChange)}
        <View
          style={{
            ...styles.takeOffTopContainer,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.paragraph}>{getTime(startStartOver)}</Text>
          <Text style={styles.paragraph}>{getTime(endStartOver)}</Text>
        </View>
        {renderSeparator()}
        <Text style={styles.blackParagraph}>{"Flight leg"}</Text>
        {getRangeView(handleValueChange1)}
        <View
          style={{
            ...styles.takeOffTopContainer,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.paragraph}>{getTime(startFlightLeg)}</Text>
          <Text style={styles.paragraph}>{getTime(endFlightLeg)}</Text>
        </View>
        {renderSeparator()}
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY }}>
      <ScrollView
        overScrollMode="never"
        bounces={false}
        style={{
          backgroundColor: WHITE,
          padding: 20,
        }}
      >
        {getTakeOffTopView(departure)}
        {getTakeOfView(
          departStartStopOver,
          departEndStopOver,
          handleDepartureStopOverChange,
          departStartFlightLeg,
          departEndFlightLeg,
          handleDepartureFlightLegChange
        )}
        {getTakeOffTopView(arrival)}
        {getTakeOfView(
          arrivalStartStopOver,
          arrivalEndStopOver,
          handleArrivalStopOverChange,
          arrivalStartFlightLeg,
          arrivalEndFlightLeg,
          handleArrivalFlightLegChange
        )}
        {renderSeparator()}
      </ScrollView>

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

export default duration;
