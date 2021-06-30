import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import LeftDivider from "../../assets/images/ic_div_left.svg";
import RightDivider from "../../assets/images/ic_div_right.svg";
import Engine from "../../assets/images/ic_engine.svg";
import Layover from "../../assets/images/ic_layover.svg";
import VerticalDivider from "../../assets/images/ic_vertical_divider.svg";
import {
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  LIGHT_GRAY_BG,
  WHITE,
} from "../../util/colors";
import { Flight } from "../ticket/ticketItem";
import styles from "./style";
interface Props {
  origin: string;
  destination: string;
  wayOne: Flight;
  wayOneLayover?: Flight;
  wayTwo?: Flight;
  wayTwoLayover?: Flight;
}
const TicketDetailsItem: React.FC<Props> = ({
  origin,
  destination,
  wayOne,
  wayOneLayover,
  wayTwo,
  wayTwoLayover,
}) => {
  function getLocationTopView(origin: string, destination: string) {
    return (
      <View style={styles.topLocation}>
        <Text style={styles.location} numberOfLines={1}>
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

  function getFlightDetailTopView(flight: Flight) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: flight.flightLogoUrl }}
          style={{ ...styles.imageStyle }}
        />
        {flight.flightName && <Text style={{}}>{flight.flightName}</Text>}
      </View>
    );
  }
  function getTopView(origin: string, destination: string, flight: Flight) {
    return (
      <View
        style={{
          backgroundColor: WHITE,
          borderTopEndRadius: 10,
          borderTopLeftRadius: 10,
          borderBottomWidth: 0.5,
          borderColor: GRAY_MEDIUM,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        {getLocationTopView(origin, destination)}
        {getFlightDetailTopView(flight)}
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

  function getLayoverView(location: String) {
    return (
      <>
        <VerticalDivider style={{ alignSelf: "center" }} />
        <View
          style={{
            backgroundColor: GRAY_LIGHT,
            alignSelf: "center",
            width: "90%",
            alignItems: "center",
            flexDirection: "row",
            padding: 10,
          }}
        >
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
          <Text
            style={{
              ...styles.layover,
            }}
            numberOfLines={1}
          >
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
            {"30 Minutes"} {/* Difference of waylayover time and way time*/}
          </Text>
        </View>
        <VerticalDivider style={{ alignSelf: "center" }} />
      </>
    );
  }

  function getWayDetail(
    origin: string,
    destination: string,
    way: Flight,
    wayLayover?: Flight
  ) {
    return (
      <View
        style={{
          borderRadius: 10,
          margin: 20,
          borderWidth: 0.5,
          borderColor: GRAY_MEDIUM,
          display: "flex",
          backgroundColor: LIGHT_GRAY_BG,
        }}
      >
        {getTopView(origin, destination, way!)}
        <View style={{ paddingVertical: 10 }}>
          {getTicket(way!)}
          {wayLayover == undefined ? null : (
            <View>
              {getLayoverView(wayLayover.originLocation)}
              {getTicket(wayLayover!)}
            </View>
          )}
        </View>
      </View>
    );
  }

  function getSeperator() {
    return <View style={styles.seperator} />;
  }

  return (
    <>
      {getWayDetail(origin, destination, wayOne, wayOneLayover)}
      {wayTwo && getSeperator()}
      {wayTwo && getWayDetail(destination, origin, wayTwo, wayTwoLayover)}
    </>
  );
};

export default TicketDetailsItem;
