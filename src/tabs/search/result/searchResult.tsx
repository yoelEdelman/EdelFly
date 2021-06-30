import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React, { Dispatch, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import Icon from "../../../../assets/images/ic_back_arrow.svg";
import Filter from "../../../../assets/images/ic_filters.svg";
import Divider from "../../../../assets/images/ic_main_divider.svg";
import OneSideDivider from "../../../../assets/images/ic_main_side_divider.svg";
import PlaneArrive from "../../../../assets/images/ic_plane_arrive.svg";
import PlaneDep from "../../../../assets/images/ic_plane_dep.svg";
import {
  FilterNavigatorScreen,
  TicketDetailsScreen,
} from "../../../../navigation/main/helper";
import { SearchResultRouteProps } from "../../../../navigation/search/helper";
import { getLivePricesRequestAction } from "../../../../store/livePrices/actionCreators";
import {
  LivePricesRequestAction,
  LIVE_PRICES,
} from "../../../../store/livePrices/actionTypes";
import { StoreState } from "../../../../store/root/reducer";
import ActivityIndicatorView from "../../../../util/activityIndicator";
import { GRAY_LIGHT, TEXT_COLOR, WHITE } from "../../../../util/colors";
import { network, string as strings } from "../../../../util/constants";
import FormChip from "../../../../util/formChip";
import TicketItem, { Flight } from "../../../../util/ticket/ticketItem";
import {
  ApiProps,
  Data,
  Itinerary,
  Leg,
  LegDetails,
  Query,
  SegmentDetails,
} from "../../../model";
import styles from "./style";

interface Props extends ApiProps {
  getLivePricesRequestAction: (query: Query) => void;
  response: Data | null;
}

const SearchResult: React.FC<Props> = ({
  isLoading,
  error,
  getLivePricesRequestAction,
  response,
}) => {
  const navigation = useNavigation();
  const route = useRoute<SearchResultRouteProps>();

  const dateFrom = route.params?.dateFrom ?? new Date();
  const dateTo = route.params?.dateTo ?? new Date();
  const cabin = route.params?.cabin ?? strings.ECONOMY;
  const travellersMap: Map<string, number> = route.params?.travellersMap;
  const locationFrom = route.params?.locationFrom;
  const locationTo = route.params?.locationTo;
  const roundTrip = route.params?.roundTrip;

  useEffect(() => {
    const query: Query = {
      Country: locationFrom?.CountryId?.split("-")[0] ?? "",
      Currency: "EUR", //"PKR",
      Locale: "fr-FR",
      Adults:
        travellersMap?.get(strings.ADULTS) ??
        0 +
          (travellersMap?.get(strings.SENIOR) ?? 0) +
          (travellersMap?.get(strings.YOUTH) ?? 0),
      Children:
        (travellersMap?.get(strings.SEAT_INFANTS) ?? 0) +
        (travellersMap?.get(strings.CHILD) ?? 0),
      Infants: travellersMap?.get(strings.LAP_INFANTS) ?? 0,
      OriginPlace: locationFrom?.PlaceId ?? "",
      DestinationPlace: locationTo?.PlaceId ?? "",
      OutboundDate: moment(dateFrom).format("YYYY-MM-DD"),
      InboundDate: roundTrip ? moment(dateTo).format("YYYY-MM-DD") : "",
      CabinClass: cabin,
      GroupPricing: true,
      ApiKey: network.SKY_SCANNER_API_KEY,
    };
    getLivePricesRequestAction(query);
  }, [route.params]);

  const [best, setBest] = useState(true);
  const [cheap, setCheap] = useState(false);
  const [quick, setQuick] = useState(false);
  const [early, setEarly] = useState(false);

  const bestStr = "Meilleur";
  const cheapestStr = "Moins cher";
  const quickestStr = "Plus rapide";
  const earliestStr = "Plus tôt";

  function onClickChip(text: string) {
    switch (text) {
      case bestStr:
        setBest(true);
        setCheap(false);
        setQuick(false);
        setEarly(false);
        break;
      case cheapestStr:
        setBest(false);
        setCheap(true);
        setQuick(false);
        setEarly(false);
        break;
      case quickestStr:
        setBest(false);
        setCheap(false);
        setQuick(true);
        setEarly(false);
        break;
      case earliestStr:
        setBest(false);
        setCheap(false);
        setQuick(false);
        setEarly(true);
        break;
    }
  }

  function getDateTime(time: string, date: string) {
    return (
      <View style={styles.dateTime}>
        <Text style={styles.mainTime} numberOfLines={1}>
          {time}
        </Text>
        <Text style={styles.date} numberOfLines={1}>
          {date}
        </Text>
      </View>
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
        {getDateTime(airport1, location1)}
        {roundTrip ? <Divider /> : <OneSideDivider />}
        {getDateTime(airport2, location2)}
      </View>
    );
  }

  function getChips() {
    return (
      <View style={styles.chipGroup}>
        <FormChip
          label={bestStr}
          containerStyle={{
            flex: 1,
          }}
          unselectionBackground={GRAY_LIGHT}
          onClick={onClickChip}
          textStyle={{ color: best ? WHITE : TEXT_COLOR }}
          selected={best}
        />
        <FormChip
          label={cheapestStr}
          containerStyle={{
            flex: 1,
            marginLeft: 10,
          }}
          unselectionBackground={GRAY_LIGHT}
          textStyle={{ color: cheap ? WHITE : TEXT_COLOR }}
          onClick={onClickChip}
          selected={cheap}
        />
        <FormChip
          label={quickestStr}
          containerStyle={{
            flex: 1,
            marginLeft: 10,
          }}
          textStyle={{ color: quick ? WHITE : TEXT_COLOR }}
          unselectionBackground={GRAY_LIGHT}
          onClick={onClickChip}
          selected={quick}
        />
        <FormChip
          label={earliestStr}
          containerStyle={{
            flex: 1,
            marginLeft: 10,
          }}
          textStyle={{ color: early ? WHITE : TEXT_COLOR }}
          unselectionBackground={GRAY_LIGHT}
          onClick={onClickChip}
          selected={early}
        />
      </View>
    );
  }

  function getTravellersCount() {
    let count = 0;
    for (let value of travellersMap.values()) {
      count += value;
    }
    return count;
  }

  function getTravllerView() {
    return (
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <PlaneDep />
        <Text
          style={{
            ...styles.time,
          }}
          numberOfLines={1}
        >
          {`${getTravellersCount()} Voyageur`}
        </Text>
        <PlaneArrive />
      </View>
    );
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function getTopView() {
    return (
      <View style={styles.topViewRoot}>
        <View style={styles.topViewWrapper}>
          {getTravllerView()}
          {getFlightView(
            locationFrom?.PlaceId?.split("-")[0] ?? "SFO",
            locationFrom?.CountryName?.concat(" , ").concat(
              locationFrom?.CountryId?.split("-")[0] ?? ""
            ) ?? "San Francisco, USA",
            locationTo?.PlaceId?.split("-")[0] ?? "LHR",
            locationTo?.CountryName?.concat(" , ").concat(
              locationTo?.CountryId?.split("-")[0] ?? ""
            ) ?? "London, UK"
          )}
          <Text style={styles.time} numberOfLines={1}>
            {roundTrip
              ? moment(dateFrom)
                  .format("DD MMM")
                  .concat(" - ")
                  .concat(moment(dateTo).format("DD MMM"))
              : moment(dateFrom).format("MMM DD")}
          </Text>
        </View>
      </View>
    );
  }

  function getFlight(leg: Leg, price: number) {
    const destination = response?.Places.filter((place) => {
      return place.Id == leg.DestinationStation;
    })[0];
    const origin = response?.Places.filter((place) => {
      return place.Id == leg.OriginStation;
    })[0];
    const plane = response?.Carriers.filter((carrier) => {
      return carrier.Id == leg.Carriers[0];
    })[0];
    const accuracy = Math.floor(Math.random() * (100 - 90) + 90);
    const planePhoto =
      plane?.ImageUrl ?? "https://www.phaidon.com/resource/aa.jpg";

    return new Flight(
      planePhoto,
      moment(leg.Departure).format("hh:mm A"),
      moment(leg.Arrival).format("hh:mm A"),
      moment(leg.Departure).format("ddd, DD MMM"),
      moment(leg.Arrival).format("ddd, DD MMM"),
      origin?.Name ?? "",
      destination?.Name ?? "",
      origin?.Code ?? "",
      destination?.Code ?? "",
      minuteToTime(leg.Duration),
      price,
      accuracy,
      plane?.Name ?? "",
      "",
      "",
      leg.Stops.length
    );
  }

  function minuteToTime(duration: number): string {
    let m = Math.floor(duration % 60);
    let h = Math.floor((duration / 60) % 24);

    let hours = h < 10 ? "0" + h : h;
    let minutes = m < 10 ? "0" + m : m;

    return hours + "h " + minutes + "m";
  }

  function getList() {
    return (
      <FlatList
        data={response?.Itineraries}
        contentContainerStyle={{ paddingTop: 0, paddingBottom: 50 }}
        renderItem={({ item }) => getTicketItem(item)}
        keyExtractor={(index) => index.BookingDetailsLink.Body}
      />
    );
  }

  function getTicketItem(item: Itinerary) {
    const outboundLeg = response?.Legs.filter((leg) => {
      return leg.Id == item.OutboundLegId;
    })[0]!!;
    const depart = getFlight(outboundLeg, item.PricingOptions[0].Price);

    const InboundLeg = item.InboundLegId
      ? response?.Legs.filter((leg) => {
          return leg.Id == item.InboundLegId;
        })[0]!!
      : undefined;

    const arrival = item.InboundLegId ? getFlight(InboundLeg!!, 0) : undefined;

    return (
      <TicketItem
        wayOne={depart}
        wayTwo={arrival}
        onClick={() => {
          onClickItem(item, outboundLeg, InboundLeg);
        }}
        currency={response?.Currencies[0].Symbol ?? "€"}
      />
    );
  }

  function onClickItem(item: Itinerary, outboundLeg: Leg, inboundLeg?: Leg) {
    const outboundLegInfo = getLegDetails(outboundLeg);
    const inboundLegInfo = inboundLeg ? getLegDetails(inboundLeg!!) : undefined;

    navigation.navigate(TicketDetailsScreen, {
      itinerary: item,
      outboundLegInfo: outboundLegInfo,
      inboundLegInfo: inboundLegInfo,
      traveler: travellersMap,
      cabin: cabin,
    });
  }

  function getLegDetails(leg: Leg) {
    const LegPlanes = response?.Carriers.filter((carrier) => {
      return leg.Carriers.includes(carrier.Id);
    });

    const LegStops = response?.Places.filter((place) => {
      return leg.Stops.includes(place.Id);
    });

    const LegOrigin = response?.Places.filter((place) => {
      return leg.OriginStation == place.Id;
    });

    const LegDestinnation = response?.Places.filter((place) => {
      return leg.DestinationStation == place.Id;
    });

    const LegSegments = response?.Segments.filter((segment) => {
      return leg.SegmentIds.includes(segment.Id);
    });

    const LegSegmentsDetails: SegmentDetails[] = LegSegments?.map((segment) => {
      return {
        ...segment,
        Carrier: response?.Carriers.filter((carrier) => {
          return segment.Carrier == carrier.Id;
        })[0]!!,
        OriginStation: response?.Places.filter((place) => {
          return segment.OriginStation == place.Id;
        })[0]!!,
        DestinationStation: response?.Places.filter((place) => {
          return segment.DestinationStation == place.Id;
        })[0]!!,
      };
    })!!;

    const legDetails: LegDetails = {
      ...leg,
      Carriers: LegPlanes!!,
      Stops: LegStops!!,
      OriginStation: LegOrigin!!,
      DestinationStation: LegDestinnation!!,
      Segments: LegSegmentsDetails!!,
    };
    // console.log("LegDetails", legDetails);
    return legDetails;
  }

  function getFilterView() {
    return (
      <TouchableOpacity
        style={{ position: "absolute", bottom: 20, right: 20 }}
        onPress={() => {
          navigation.navigate(FilterNavigatorScreen);
        }}
      >
        <Filter />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      {getTopView()}
      {getChips()}
      {getList()}
      {getFilterView()}
      {isLoading ? <ActivityIndicatorView /> : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isLoading: state.isLoading[LIVE_PRICES],
    error: state.error[LIVE_PRICES],
    response: state.livePricesState.result,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<LivePricesRequestAction>) => {
  return {
    getLivePricesRequestAction: (query: Query) => {
      dispatch(getLivePricesRequestAction(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
