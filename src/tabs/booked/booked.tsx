import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { Dispatch, useEffect } from "react";
import { FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import { TicketDetailsScreen } from "../../../navigation/main/helper";
import { getBookedRequestAction } from "../../../store/booked/actionCreators";
import { BOOKED, BookedRequestAction } from "../../../store/booked/actionTypes";
import { StoreState } from "../../../store/root/reducer";
import ActivityIndicatorView from "../../../util/activityIndicator";
import { LIGHT_GRAY_BG } from "../../../util/colors";
import { string as strings } from "../../../util/constants";
import TicketItem, { Flight } from "../../../util/ticket/ticketItem";
import {
  ApiProps,
  Data,
  Itinerary,
  Leg,
  LegDetails,
  SegmentDetails,
} from "../../model";
interface Props extends ApiProps {
  getBookedRequestAction: () => void;
  response: Data | null;
}

const Booked: React.FC<Props> = ({
  isLoading,
  error,
  getBookedRequestAction,
  response,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    getBookedRequestAction();
  }, []);

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
        // currency={response?.Currencies[0].Symbol ?? "$"}
        currency={"€"}
      />
    );
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
    return legDetails;
  }

  function onClickItem(item: Itinerary, outboundLeg: Leg, inboundLeg?: Leg) {
    const outboundLegInfo = getLegDetails(outboundLeg);
    const inboundLegInfo = inboundLeg ? getLegDetails(inboundLeg!!) : undefined;

    navigation.navigate(TicketDetailsScreen, {
      itinerary: item,
      outboundLegInfo: outboundLegInfo,
      inboundLegInfo: inboundLegInfo,
      traveler: getDefaultMap(),
      cabin: strings.ECONOMY,
      canBook: false,
    });
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      <FlatList
        data={response?.Itineraries}
        contentContainerStyle={{ paddingTop: 0, paddingBottom: 50 }}
        renderItem={({ item }) => getTicketItem(item)}
        keyExtractor={(index) => index.BookingDetailsLink.Body}
      />
      {isLoading ? <ActivityIndicatorView /> : null}
    </SafeAreaView>
  );
};
const mapStateToProps = (state: StoreState) => {
  return {
    isLoading: state.isLoading[BOOKED],
    error: state.error[BOOKED],
    response: state.bookedState.result,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<BookedRequestAction>) => {
  return {
    getBookedRequestAction: () => {
      dispatch(getBookedRequestAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booked);
