import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import {
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Back from "../../../assets/images/ic_back_cross.svg";
import Bag from "../../../assets/images/ic_bag.svg";
import Traveller from "../../../assets/images/ic_traveller.svg";
import Watchlist from "../../../assets/images/ic_watchlist.svg";
import { TicketDetailsScreenRouteProps } from "../../../navigation/main/helper";
import { LIGHT_GRAY_BG, PRIMARY, WHITE } from "../../../util/colors";
import { string } from "../../../util/constants";
import PrimaryButton from "../../../util/primaryButton";
import TicketDetailsItemNew from "../../../util/ticket_detail/ticketDetailsItemNew";
import styles from "./style";
const ticketDetails = () => {
  const navigation = useNavigation();
  const route = useRoute<TicketDetailsScreenRouteProps>();

  const itinerary = route.params?.itinerary;
  const outboundLegInfo = route.params?.outboundLegInfo;
  const inboundLegInfo = route.params?.inboundLegInfo;
  const cabin = route.params?.cabin;
  const canBook = route.params?.canBook ?? true;
  const travellersMap: Map<string, number> = route.params?.traveler;

  function getFlightView(airport1: string, airport2: string) {
    return (
      <View style={styles.flightView}>
        <Text style={styles.mainTime} numberOfLines={1}>
          {airport1}
        </Text>
        <Text style={styles.mainTime} numberOfLines={1}>
          {" - "}
        </Text>
        <Text style={styles.mainTime} numberOfLines={1}>
          {airport2}
        </Text>
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

  function getAirlineView() {
    return (
      <FlatList
        data={outboundLegInfo.Carriers}
        contentContainerStyle={{
          display: "flex",
          alignSelf: "center",
          flexDirection: "row",
        }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.ImageUrl }}
            style={{ ...styles.imageStyle }}
          />
        )}
        keyExtractor={(index) => index.toString()}
      />
    );
  }

  function getWatchIcon() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ position: "absolute", top: 12, left: 20 }}
      >
        <Watchlist />
      </TouchableOpacity>
    );
  }

  function getBackIcon() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ position: "absolute", top: 10, right: 0 }}
      >
        <Back />
      </TouchableOpacity>
    );
  }

  function getTime() {
    return (
      <Text style={styles.time} numberOfLines={1}>
        {moment(outboundLegInfo.Departure).format("ddd, DD MMM YY hh:mm A")}
        {" -- "}
        {moment(outboundLegInfo.Arrival).format("ddd, DD MMM YY hh:mm A")}
        {/* {"\n"}
        {moment(inboundLegInfo?.Departure).format("ddd, DD MMM YY hh:mm A")}
        {" - "}
        {moment(inboundLegInfo?.Arrival).format("ddd, DD MMM YY hh:mm A")} */}
      </Text>
    );
  }

  function getTravllerView() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Traveller />
        <Text style={{ ...styles.time, marginLeft: 5 }} numberOfLines={1}>
          {getTravellersCount() + " Voyageur"}
        </Text>
        <Text style={styles.time} numberOfLines={1}>
          {" - "}
        </Text>
        <Text style={styles.time} numberOfLines={1}>
          {outboundLegInfo.Stops.length + " Escale"}
        </Text>
      </View>
    );
  }

  function getTopView() {
    return (
      <View style={styles.topViewWrapper}>
        {getAirlineView()}
        {getFlightView(
          outboundLegInfo.OriginStation[0].Code,
          outboundLegInfo.DestinationStation[0].Code
        )}
        {getTime()}
        {getTravllerView()}
        {getBackIcon()}
        {canBook && getWatchIcon()}
      </View>
    );
  }

  function getList() {
    return (
      <TicketDetailsItemNew
        origin={outboundLegInfo.OriginStation[0].Name}
        destination={outboundLegInfo.DestinationStation[0].Name}
        outboundSegments={outboundLegInfo.Segments}
        inboundSegments={inboundLegInfo?.Segments}
        cabin={cabin}
      />
    );
  }

  function getPriceView() {
    return (
      <View style={styles.priceContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.price}>
            {itinerary.PricingOptions[0].Price + "€"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Bag style={{ margin: 5 }} />
            <Text style={styles.baggage}>{string.TICKET_BBAGGAGE_INFO}</Text>
          </View>
        </View>
        {canBook && (
          <PrimaryButton
            label={string.BOOK_NOW}
            onClick={() => {
              Linking.openURL(
                itinerary.PricingOptions[0].DeeplinkUrl
              ).catch((err) => console.error("Couldn't load page", err));
            }}
            containerStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
            textStyle={{ color: WHITE }}
          />
        )}
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: PRIMARY }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
        {getTopView()}
        {getPriceView()}
        {getList()}
      </SafeAreaView>
    </>
  );
};

export default ticketDetails;
