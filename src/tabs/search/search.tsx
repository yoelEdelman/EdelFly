import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React, { Dispatch, useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import OneWayImg from "../../../assets/images/ic_oneway.svg";
import OneWayTrpImg from "../../../assets/images/ic_oneway_arrow.svg";
import OneWayImg_unselected from "../../../assets/images/ic_oneway_unselected.svg";
import PlaneArrive from "../../../assets/images/ic_plane_arrive_gray.svg";
import PlaneDep from "../../../assets/images/ic_plane_dep_gray.svg";
import TwoWayTripImg from "../../../assets/images/ic_round.svg";
import RoundTripImg from "../../../assets/images/ic_roundway.svg";
import RoundTripImg_unselected from "../../../assets/images/ic_roundway_unselected.svg";
import SearchArrowImg from "../../../assets/images/ic_search_arrow.svg";
import UserImg from "../../../assets/images/ic_user_gray.svg";
import {
  SearchHomeRouteProps,
  SearchResultScreen,
  SelectDateScreen,
  SelectLocationScreen,
  SelectTravellerScreen,
} from "../../../navigation/search/helper";
import { ApiProps, Place } from "../../../src/model";
import { getMarketsRequestAction } from "../../../store/markets/actionCreators";
import {
  MARKETS,
  MarketsRequestAction,
} from "../../../store/markets/actionTypes";
import { StoreState } from "../../../store/root/reducer";
import {
  BLACK,
  DARK_RED,
  LIGHT_GRAY_BG,
  PRIMARY_DARK,
  SECONDARY,
  WHITE,
} from "../../../util/colors";
import { string as strings } from "../../../util/constants";
import FormChip from "../../../util/formChip";
import PrimaryButton from "../../../util/primaryButton";
import styles from "./style";

interface Props extends ApiProps {
  getMarketsRequestAction: () => void;
}

const Search: React.FC<Props> = ({
  isLoading,
  error,
  getMarketsRequestAction,
}) => {
  const navigation = useNavigation();
  const route = useRoute<SearchHomeRouteProps>();
  const [roundTrip, setRoundTrip] = useState(true);
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(getTommorow());
  const [travelCabin, setCabin] = useState(strings.ECONOMY);
  const [travellersMap, setTravellersMap] = useState(getDefaultMap());
  const [locationnFrom, setLocationnFrom] = useState<Place>();
  const [locationnTo, setLocationnTo] = useState<Place>();

  useEffect(() => {
    setDateFrom(route.params?.dateFrom ?? new Date());
    setDateTo(route.params?.dateTo ?? getTommorow());
    setCabin(route.params?.cabin ?? strings.ECONOMY);
    setTravellersMap(route.params?.travellersMap ?? getDefaultMap());
    setLocationnFrom(route.params?.locationFrom ?? undefined);
    setLocationnTo(route.params?.locationTo ?? undefined);
  }, [route.params]);

  const bestStr = "Aller-retour";
  const cheapestStr = "Aller simple";

  function getTravellersCount() {
    let count = 0;
    for (let value of travellersMap.values()) {
      count += value;
    }
    return count;
  }

  function onClickChip(text: string) {
    switch (text) {
      case bestStr:
        setRoundTrip(true);
        break;
      case cheapestStr:
        setRoundTrip(false);
        break;
    }
  }

  function navigateToLocationSelectScreen(departure: boolean) {
    navigation.navigate(SelectLocationScreen, { departure: departure });
  }

  function navigateToDateSelectScreen() {
    navigation.navigate(SelectDateScreen, {
      dateFrom: dateFrom,
      dateTo: dateTo,
    });
  }

  function navigateToTravellerSelectScreen() {
    navigation.navigate(SelectTravellerScreen, {
      travellersMap: travellersMap,
      cabin: travelCabin,
    });
  }

  function navigateToSearchResultScreen() {
    // getMarketsRequestAction();
    if (locationnFrom && locationnTo) {
      navigation.navigate(SearchResultScreen, {
        roundTrip: roundTrip,
        dateFrom: dateFrom,
        dateTo: dateTo,
        cabin: travelCabin,
        travellersMap: travellersMap,
        locationFrom: locationnFrom,
        locationTo: locationnTo,
      });
    } else {
      Alert.alert(
        "Erreur",
        (locationnFrom ? "Destination" : "Origine") + " il manque des infos.",
        [
          {
            text: "Select",
            onPress: () => {
              navigateToLocationSelectScreen(locationnFrom == undefined);
            },
          },
        ],
        { cancelable: false }
      );
    }
  }

  function getTommorow() {
    const date = new Date();
    date.setHours(date.getHours() + 24);
    return date;
  }

  function getDefaultMap() {
    const map = new Map();
    map.set(strings.ADULTS, 1);
    map.set(strings.SENIOR, 0);
    map.set(strings.YOUTH, 0);
    map.set(strings.SEAT_INFANTS, 0);
    map.set(strings.CHILD, 0);
    map.set(strings.LAP_INFANTS, 0);
    return map;
  }

  function getFlight(
    airport: string,
    location: string,
    departure: boolean = true,
  ) {
    return (
      <TouchableOpacity
        style={styles.dateTime}
        onPress={() => navigateToLocationSelectScreen(departure)}
      >
        {departure ? <PlaneDep /> : <PlaneArrive />}
        <Text style={styles.flight} numberOfLines={1}>
          {airport.length == 0 ? "Départ" : airport}
        </Text>
        <Text style={styles.date} numberOfLines={1}>
          {location.length == 0 ? "Ville, Pays" : location}
        </Text>
      </TouchableOpacity>
    );
  }

  function getFlightArrival(
      airport: string,
      location: string,
      departure: boolean = true,
  ) {
    return (
        <TouchableOpacity
            style={styles.dateTime}
            onPress={() => navigateToLocationSelectScreen(departure)}
        >
          {departure ? <PlaneDep /> : <PlaneArrive />}
          <Text style={styles.flight} numberOfLines={1}>
            {airport.length == 0 ? "Arrivée" : airport}
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            {location.length == 0 ? "Ville, Pays" : location}
          </Text>
        </TouchableOpacity>
    );
  }

  function getDateTime(time: string, date: string) {
    return (
      <TouchableOpacity
        style={styles.dateTime}
        onPress={navigateToDateSelectScreen}
      >
        <Text style={styles.mainTime} numberOfLines={1}>
          {time}
        </Text>
        <Text style={styles.mainTimeBottom} numberOfLines={1}>
          {date}
        </Text>
      </TouchableOpacity>
    );
  }

  function getTravelerButton(count: number, type: string) {
    return (
      <TouchableOpacity
        style={styles.dateTime}
        onPress={navigateToTravellerSelectScreen}
      >
        <UserImg />
        <Text style={styles.mainTime} numberOfLines={1}>
          {count + " Voyageur" + (count > 1 ? "s" : "")}
        </Text>
        <Text style={styles.mainTimeBottom} numberOfLines={1}>
          {type}
        </Text>
      </TouchableOpacity>
    );
  }

  function getFlightView(
    airport1: string,
    location1: string,
    airport2: string,
    location2: string
  ) {
    return (
      <View style={styles.flightView}>
        {getFlight(airport1, location1)}
        {getFlightArrival(airport2, location2, false)}
      </View>
    );
  }

  function getDateMonthView(
    date1: string,
    day1: string,
    date2: string,
    day2: string
  ) {
    return (
      <View style={styles.flightView}>
        {getDateTime(date1, day1)}
        {roundTrip && getDateTime(date2, day2)}
      </View>
    );
  }

  function getTraveler(count: number, type: string) {
    return (
      <View style={styles.flightView}>{getTravelerButton(count, type)}</View>
    );
  }

  function getChips() {
    return (
      <View style={styles.chipGroup}>
        <FormChip
          label={bestStr}
          containerStyle={{
            paddingVertical: 0,
            paddingRight: 10,
            borderColor: PRIMARY_DARK,
            borderWidth: 1,
          }}
          textStyle={{
            paddingHorizontal: 10,
            color: roundTrip ? BLACK : DARK_RED,
          }}
          iconLeft={roundTrip ? <RoundTripImg /> : <RoundTripImg_unselected />}
          selectionBackground={WHITE}
          unselectionBackground={SECONDARY}
          onClick={onClickChip}
          selected={roundTrip}
        />
        <FormChip
          label={cheapestStr}
          containerStyle={{
            paddingVertical: 0,
            paddingRight: 10,
            borderColor: PRIMARY_DARK,
            borderWidth: 1,
          }}
          textStyle={{
            paddingHorizontal: 10,
            color: !roundTrip ? BLACK : DARK_RED,
          }}
          iconLeft={!roundTrip ? <OneWayImg_unselected /> : <OneWayImg />}
          selectionBackground={WHITE}
          unselectionBackground={SECONDARY}
          onClick={onClickChip}
          selected={!roundTrip}
        />
      </View>
    );
  }

  function getTopView() {
    return (
      <View style={styles.topViewRoot}>
        <View style={styles.halftopViewRoot} />

        <View style={styles.topViewWrapper}>
          {getFlightView(
            getFirstSplitItem(locationnFrom?.PlaceId),
            locationnFrom?.CountryName?.concat(" , ").concat(
              getFirstSplitItem(locationnFrom?.CountryId)
            ) ?? "",
            getFirstSplitItem(locationnTo?.PlaceId),
            locationnTo?.CountryName?.concat(" , ").concat(
              getFirstSplitItem(locationnTo?.CountryId)
            ) ?? ""
          )}
        </View>
        {getLocationDivider()}
      </View>
    );
  }

  function getFirstSplitItem(str?: string) {
    return str?.split("-")[0] ?? "";
  }

  function getDateView() {
    return (
      <View style={styles.DateViewRoot}>
        <View
          style={{ ...styles.topViewWrapper, backgroundColor: LIGHT_GRAY_BG }}
        >
          {getDateMonthView(
            moment(dateFrom).format("MMM D"),
            moment(dateFrom).format("ddd"),
            moment(dateTo).format("MMM D"),
            moment(dateTo).format("ddd")
          )}
        </View>
        {getDateDivider()}
      </View>
    );
  }

  function getDateDivider() {
    return (
      roundTrip && (
        <View style={styles.Divider}>
          <Text
            style={{
              position: "absolute",
            }}
          >
            {"-"}
          </Text>
        </View>
      )
    );
  }

  function getLocationDivider() {
    return (
      <View style={styles.Divider}>
        <View style={styles.locationDivider} />
        {roundTrip ? <TwoWayTripImg /> : <OneWayTrpImg />}
      </View>
    );
  }

  function getTravelerView() {
    return (
      <View style={styles.DateViewRoot}>
        <View
          style={{ ...styles.topViewWrapper, backgroundColor: LIGHT_GRAY_BG }}
        >
          {getTraveler(getTravellersCount(), travelCabin)}
        </View>
      </View>
    );
  }

  function getSearchButton() {
    return (
      <PrimaryButton
        label={"Rechercher"}
        containerStyle={styles.PrimaryButtonContainer}
        textStyle={styles.PrimaryButtonContainerText}
        iconRight={<SearchArrowImg />}
        onClick={navigateToSearchResultScreen}
      />
    );
  }

  function getBackgroundArtwork() {
    return (
      <Image
        source={require("../../../assets/images/ic_plane_artwork.png")}
        style={styles.artwork}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      {getBackgroundArtwork()}
      {getChips()}
      {getTopView()}
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        {getDateView()}
        {getTravelerView()}
      </View>
      {getSearchButton()}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isLoading: state.isLoading[MARKETS],
    error: state.error[MARKETS],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<MarketsRequestAction>) => {
  return {
    getMarketsRequestAction: () => {
      dispatch(getMarketsRequestAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
