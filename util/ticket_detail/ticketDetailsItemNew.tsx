import moment from "moment";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LeftDivider from "../../assets/images/ic_div_left.svg";
import RightDivider from "../../assets/images/ic_div_right.svg";
import Engine from "../../assets/images/ic_engine.svg";
import Layover from "../../assets/images/ic_layover.svg";
import VerticalDivider from "../../assets/images/ic_vertical_divider.svg";
import { SegmentDetails } from "../../src/model";
import { GRAY_DARK, GRAY_LIGHT, GRAY_MEDIUM, WHITE } from "../colors";
import { Flight } from "../ticket/ticketItem";
import styles from "./style";
interface Props {
  origin: string;
  destination: string;
  outboundSegments: SegmentDetails[];
  inboundSegments?: SegmentDetails[];
  cabin: string;
}
const TicketDetailsItemNew: React.FC<Props> = ({
  origin,
  destination,
  outboundSegments,
  inboundSegments,
  cabin,
}) => {
  let layover = "";
  let layoverDate = new Date();

  function getLocationTopView(origin: string, destination: string) {
    return (
      <View style={styles.topLocation}>
        <Text style={styles.location} numberOfLines={2}>
          {origin}
        </Text>

        <Text
          style={{ ...styles.location, marginHorizontal: 0, color: GRAY_DARK }}
          numberOfLines={1}
        >
          {"à"}
        </Text>

        <Text style={styles.location}>{destination}</Text>
      </View>
    );
  }

  function getFlightDetailTopView(flightName: string, url: string) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={{ uri: url }} style={{ ...styles.imageStyle }} />
        <Text style={{}}>{flightName}</Text>
      </View>
    );
  }
  function getTopView(
    origin: string,
    destination: string,
    flightName: string,
    url: string
  ) {
    return (
      <View
        style={{
          backgroundColor: WHITE,
          borderTopEndRadius: 10,
          borderTopLeftRadius: 10,
          borderBottomWidth: 0.5,
          marginBottom: 20,
          borderColor: GRAY_MEDIUM,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        {getLocationTopView(origin, destination)}
        {getFlightDetailTopView(flightName, url)}
      </View>
    );
  }

  function getDateTime(
    time: string,
    date: string,
    location: string,
    alignItemsEnd: boolean = true
  ) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: alignItemsEnd ? "flex-end" : "flex-start",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text style={styles.mainTerminals} numberOfLines={1}>
          {location}
        </Text>
        <Text
          style={{
            ...styles.mainTime,
          }}
          numberOfLines={1}
        >
          {time}
        </Text>

        <Text style={styles.date} numberOfLines={1}>
          {date}
        </Text>
      </View>
    );
  }

  function getFlightTime(flight: Flight) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {getDateTime(
          flight.originTime,
          flight.originDate,
          flight.originTerminal,
          false
        )}
        <LeftDivider />
        <Text
          style={{
            ...styles.totalTime,
          }}
          numberOfLines={1}
        >
          {flight.totalTime}
        </Text>
        <RightDivider />
        {getDateTime(flight.destTime, flight.destDate, flight.destTerminal)}
      </View>
    );
  }

  function getFlightLocationsWithPlane(flight: Flight) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...styles.location,
            flex: 1,
            textAlign: "left",
          }}
          numberOfLines={1}
        >
          {flight.originLocation}
        </Text>
        <View style={styles.plane}>
          <Engine />
          <Text
            style={{
              ...styles.totalTime,
              margin: 0,
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}
            numberOfLines={1}
          >
            {flight.plane}
          </Text>
        </View>
        <Text
          style={{
            ...styles.location,
            flex: 1,
            textAlign: "right",
          }}
          numberOfLines={1}
        >
          {flight.destLocation}
        </Text>
      </View>
    );
  }

  function getFlightTypeView(type?: string) {
    return (
      type && (
        <View style={styles.flightType}>
          <Text
            style={{
              ...styles.flightTypeText,
            }}
            numberOfLines={1}
          >
            {type}
          </Text>
        </View>
      )
    );
  }

  function getTicket(flight: Flight) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          {getFlightTypeView(flight.flightType)}
          {getFlightTime(flight)}
          {getFlightLocationsWithPlane(flight)}
        </View>
      </View>
    );
  }

  function getLayoverView(
    location: String,
    layoverPrevDate: Date,
    layoverCurrentDate: Date
  ) {
    return (
      <>
        <VerticalDivider style={{ alignSelf: "center" }} />
        <View style={styles.layoverContainer}>
          <ImageBackground
            source={require("../../assets/images/ic_layover_bg.png")}
            style={styles.background}
            resizeMode={"stretch"}
          />
          <Layover />
          <Text
            style={{
              ...styles.layover,
              marginLeft: 5,
            }}
            numberOfLines={1}
          >
            {"Escale à "}
          </Text>
          <Text style={styles.layover} numberOfLines={1}>
            {location}
          </Text>
          <Text
            style={{
              ...styles.layover,
              flex: 1,
              textAlign: "right",
              marginLeft: 5,
            }}
            numberOfLines={1}
          >
            {getTimeDifference(layoverPrevDate, layoverCurrentDate)}
          </Text>
        </View>
        <VerticalDivider style={{ alignSelf: "center" }} />
      </>
    );
  }

  function getTimeDifference(start: Date, end: Date) {
    var m1 = moment(end, "DD-MM-YYYY HH:mm");
    var m2 = moment(start, "DD-MM-YYYY HH:mm");
    var m3 = m2.diff(m1, "minutes");
    var m4 = m2.diff(m1, "h");

    var numdays = Math.floor(m3 / 1440);
    var numhours = Math.floor((m3 % 1440) / 60);
    var numminutes = Math.floor((m3 % 1440) % 60);
    return (
      (numdays ? numdays + " jour(s) " : "") +
      (numhours ? numhours + " heures  " : "") +
      numminutes +
      " minutes"
    );
  }

  function getWayDetail(
    way: Flight,
    wayLayover: string,
    layoverPrevDate: Date,
    layoverCurrentDate: Date
  ) {
    return (
      <View style={{ paddingVertical: 0 }}>
        {getTicket(way!)}
        {wayLayover == "" ? null : (
          <View>
            {getLayoverView(wayLayover, layoverPrevDate, layoverCurrentDate)}
          </View>
        )}
      </View>
    );
  }

  function getSeperator() {
    return <View style={styles.seperator} />;
  }

  function getFlight(segment: SegmentDetails) {
    if (
      segment.DestinationStation.Name == destination ||
      segment.DestinationStation.Name == origin
    ) {
      layover = "";
      layoverDate = new Date();
    } else {
      layover = segment.DestinationStation.Name;
      layoverDate = segment.ArrivalDateTime;
    }
    return new Flight(
      segment.Carrier.ImageUrl,
      moment(segment.DepartureDateTime).format("hh:mm A"),
      moment(segment.ArrivalDateTime).format("hh:mm A"),
      moment(segment.DepartureDateTime).format("ddd, DD MMM"),
      moment(segment.ArrivalDateTime).format("ddd, DD MMM"),
      segment.OriginStation.Name,
      segment.DestinationStation.Name,
      segment.OriginStation.Code,
      segment.DestinationStation.Code,
      minuteToTime(segment.Duration),
      0,
      0,
      segment.Carrier.Name,
      cabin,
      "Vol # " + segment.FlightNumber
    );
  }

  function minuteToTime(duration: number): string {
    let m = Math.floor(duration % 60);
    let h = Math.floor((duration / 60) % 24);

    let hours = h < 10 ? "0" + h : h;
    let minutes = m < 10 ? "0" + m : m;

    return hours + "h " + minutes + "m";
  }
  return (
    <ScrollView
      // bounces={false}
      contentContainerStyle={{
        borderRadius: 10,
        borderWidth: 0.5,
        margin: 20,
        paddingBottom: 40,
        borderColor: GRAY_MEDIUM,
        display: "flex",
        backgroundColor: GRAY_LIGHT,
      }}
    >
      {getTopView(
        origin,
        destination,
        outboundSegments[0].Carrier.Name,
        outboundSegments[0].Carrier.ImageUrl
      )}
      {outboundSegments.map((item) =>
        getWayDetail(
          getFlight(item),
          layover,
          layoverDate,
          item.DepartureDateTime
        )
      )}
      {inboundSegments && getSeperator()}
      {inboundSegments &&
        getTopView(
          destination,
          origin,
          inboundSegments[0].Carrier.Name,
          inboundSegments[0].Carrier.ImageUrl
        )}
      {inboundSegments &&
        inboundSegments.map((item) =>
          getWayDetail(
            getFlight(item),
            layover,
            layoverDate,
            item.DepartureDateTime
          )
        )}
    </ScrollView>
  );
};

export default TicketDetailsItemNew;
