import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "../../../../assets/images/ic_back_cross.svg";
import {
  SearchHomeScreen,
  SelectTravellerRouteProps,
} from "../../../../navigation/search/helper";
import {
  GRAY_LIGHT,
  GRAY_MEDIUM,
  GRAY_STRONG,
  PRIMARY,
  TEXT_COLOR,
  WHITE,
} from "../../../../util/colors";
import { string as strings } from "../../../../util/constants";
import FormChip from "../../../../util/formChip";
import PrimaryButton from "../../../../util/primaryButton";
import Seperator from "../../../../util/seperator";
import styles from "./style";
import TravelerItem from "./travellerItem";

let cabin = "";

const SelectTraveller = () => {
  const numberList = [
    [strings.ADULTS, strings.ADULTS_DESC],
    [strings.SENIOR, strings.SENIOR_DESC],
    [strings.YOUTH, strings.ADULTS_DESC],
    [strings.CHILD, strings.CHILD_DESC],
    [strings.SEAT_INFANTS, strings.SEAT_INFANTS_DESC],
    [strings.LAP_INFANTS, strings.LAP_INFANTS_DESC],
  ];

  const navigation = useNavigation();
  const route = useRoute<SelectTravellerRouteProps>();

  const [economy, setEconomy] = useState(true);
  const [premium, setPremium] = useState(false);
  const [nonstop, setNonstop] = useState(false);
  const [first, setFirst] = useState(false);
  const [travellersMap, setTravellersMap] = useState(
    route.params?.travellersMap ?? new Map()
  );

  const economyStr = strings.ECONOMY;
  const premiumestStr = strings.PREMIUM_ECONOMY;
  const nonstopestStr = strings.BUSSINESS;
  const earliestStr = strings.FIRST;

  useEffect(() => {
    onClickChip(route.params?.cabin ?? economyStr);
    setTravellersMap(route.params?.travellersMap ?? new Map());
  }, [route.params]);

  function onClickChip(text: string) {
    cabin = text;
    switch (text) {
      case economyStr:
        setEconomy(true);
        setPremium(false);
        setNonstop(false);
        setFirst(false);
        break;
      case premiumestStr:
        setEconomy(false);
        setPremium(true);
        setNonstop(false);
        setFirst(false);
        break;
      case nonstopestStr:
        setEconomy(false);
        setPremium(false);
        setNonstop(true);
        setFirst(false);
        break;
      case earliestStr:
        setEconomy(false);
        setPremium(false);
        setNonstop(false);
        setFirst(true);
        break;
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigateToSearchHomeScreen();
          }}
        >
          <Icon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function navigateToSearchHomeScreen() {
    navigation.navigate(SearchHomeScreen, {
      travellersMap: travellersMap,
      cabin: cabin,
    });
  }

  function renderSeparator() {
    return (
      <Seperator
        containerStyle={{
          marginHorizontal: 30,
        }}
      />
    );
  }

  function renderFooter(invert: boolean = false) {
    return (
      <View style={{ backgroundColor: invert ? PRIMARY : WHITE }}>
        <PrimaryButton
          label={"Appliquer"}
          onClick={navigateToSearchHomeScreen}
          textStyle={{ color: invert ? PRIMARY : WHITE }}
          containerStyle={{
            margin: 30,
            paddingHorizontal: 80,
            paddingVertical: 15,
            backgroundColor: invert ? WHITE : PRIMARY,
          }}
        />
      </View>
    );
  }
  function getTitle(msg: string) {
    return <Text style={styles.title}>{msg}</Text>;
  }
  function getChipsView() {
    return (
      <View
        style={{
          marginVertical: 20,
          paddingVertical: 20,
          backgroundColor: GRAY_LIGHT,
          borderWidth: 1,
          borderTopColor: GRAY_STRONG,
          borderLeftColor: GRAY_LIGHT,
          borderRightColor: GRAY_LIGHT,
          borderBottomColor: GRAY_STRONG,
        }}
      >
        <View style={styles.chipGroup}>
          <FormChip
            label={economyStr}
            containerStyle={{
              flex: 1,
              borderWidth: 1,
              borderColor: economy ? PRIMARY : GRAY_STRONG,
            }}
            unselectionBackground={GRAY_MEDIUM}
            onClick={onClickChip}
            textStyle={{ color: economy ? WHITE : TEXT_COLOR }}
            selected={economy}
          />
          <FormChip
            label={premiumestStr}
            containerStyle={{
              flex: 1,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: premium ? PRIMARY : GRAY_STRONG,
            }}
            unselectionBackground={GRAY_MEDIUM}
            textStyle={{ color: premium ? WHITE : TEXT_COLOR }}
            onClick={onClickChip}
            selected={premium}
          />
        </View>
        <View style={styles.chipGroup}>
          <FormChip
            label={nonstopestStr}
            containerStyle={{
              borderWidth: 1,
              borderColor: nonstop ? PRIMARY : GRAY_STRONG,
              flex: 1,
            }}
            textStyle={{ color: nonstop ? WHITE : TEXT_COLOR }}
            unselectionBackground={GRAY_MEDIUM}
            onClick={onClickChip}
            selected={nonstop}
          />
          <FormChip
            label={earliestStr}
            containerStyle={{
              flex: 1,
              borderWidth: 1,
              borderColor: first ? PRIMARY : GRAY_STRONG,
              marginLeft: 10,
            }}
            textStyle={{ color: first ? WHITE : TEXT_COLOR }}
            unselectionBackground={GRAY_MEDIUM}
            onClick={onClickChip}
            selected={first}
          />
        </View>
      </View>
    );
  }

  function onChange(number: number, type: string, key: string) {
    console.log(number, type, key); // type == + or -
    const addition = type == "+";
    travellersMap.set(
      key,
      travellersMap.has(key)
        ? travellersMap.get(key) + (addition ? 1 : -1)
        : addition
        ? 1
        : 0
    );
    console.log(travellersMap);
  }

  function getTravellerOptions() {
    return (
      <FlatList
        data={numberList}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderSeparator}
        ListFooterComponent={renderSeparator}
        renderItem={({ item }) => (
          <TravelerItem
            value={travellersMap.has(item[0]) ? travellersMap.get(item[0]) : 0}
            title={item[0]}
            description={item[1]}
            onClick={(number: number, type: string, key: string) =>
              onChange!(number, type, key)
            }
          />
        )}
        keyExtractor={(index) => index.toString()}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {getTitle("Type de cabine")}
      {getChipsView()}
      {getTitle("Voyageurs")}
      {getTravellerOptions()}
      {/* {renderFooter(true)} */}
    </SafeAreaView>
  );
};

export default SelectTraveller;
