import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Progress from "react-native-progress";
import Cross from "../../assets/images/ic_cross.svg";
import Divider from "../../assets/images/ic_divider.svg";
import HalfDivider from "../../assets/images/ic_divider_half.svg";
import HorizontalDivider from "../../assets/images/ic_horizintal_divider.svg";
import LeftDivider from "../../assets/images/ic_left_destination_bar.svg";
import RightDivider from "../../assets/images/ic_right_destination_bar.svg";
import { GRAY_LIGHT, PRIMARY } from "../../util/colors";
import styles from "./style";

export class Flight {
  flightLogoUrl: string;
  flightName?: string;
  flightType?: string;
  originTime: string;
  destTime: string;
  originDate: string;
  destDate: string;
  originLocation: string;
  destLocation: string;
  originTerminal: string;
  destTerminal: string;
  totalTime: string;
  price: number;
  timeAccuracy: number;
  plane?: string;
  stops?: number;

  constructor(
    flightLogoUrl: string,
    originTime: string,
    destTime: string,
    originDate: string,
    destDate: string,
    originLocation: string,
    destLocation: string,
    originTerminal: string,
    destTerminal: string,
    totalTime: string,
    price: number,
    timeAccuracy: number,
    flightName?: string,
    flightType?: string,
    plane?: string,
    stops?: number
  ) {
    this.flightLogoUrl = flightLogoUrl;
    this.originTime = originTime;
    this.destTime = destTime;
    this.originDate = originDate;
    this.destDate = destDate;
    this.originLocation = originLocation;
    this.destLocation = destLocation;
    this.originTerminal = originTerminal;
    this.destTerminal = destTerminal;
    this.totalTime = totalTime;
    this.price = price;
    this.timeAccuracy = timeAccuracy;
    this.flightName = flightName;
    this.flightType = flightType;
    this.plane = plane;
    this.stops = stops;
  }
}
interface Props {
  wayOne: Flight;
  wayTwo?: Flight;
  currency: string;
  cancellable: boolean;
  onClick?: () => void;
  onCancel?: () => {};
}
const TicketItem: React.FC<Props> = ({
  wayOne,
  wayTwo,
  currency,
  cancellable = false,
  onClick,
  onCancel,
}) => {
  function getDateTime(time: string, date: string) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            ...styles.mainTime,
          }}
          numberOfLines={1}
        >
          {time}
        </Text>

        <Text
          style={{
            ...styles.date,
          }}
          numberOfLines={1}
        >
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
        {getDateTime(flight.originTime, flight.originDate)}
        <HorizontalDivider />
        {getDateTime(flight.destTime, flight.destDate)}
      </View>
    );
  }

  function getFlightLocations(flight: Flight) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...styles.location,
          }}
          numberOfLines={1}
        >
          {flight.originTerminal}
        </Text>
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
        <Text
          style={{
            ...styles.location,
          }}
          numberOfLines={1}
        >
          {flight.destTerminal}
        </Text>
      </View>
    );
  }

  function getTicket(flight: Flight) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: flight.flightLogoUrl }}
          style={{ ...styles.imageStyle }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                ...styles.time,
              }}
              numberOfLines={1}
            >
              {"Précision du temps "}
            </Text>
            <Text
              style={{
                ...styles.location,
              }}
              numberOfLines={1}
            >
              {flight.timeAccuracy + " %"}
            </Text>
          </View>
          <Progress.Bar
            progress={flight.timeAccuracy / 100}
            width={120}
            style={{ marginStart: 5 }}
            unfilledColor={GRAY_LIGHT}
            borderWidth={0}
            color={PRIMARY}
          />

          {getFlightTime(flight)}
          {getFlightLocations(flight)}
        </View>
      </View>
    );
  }

  return (
    <>
      <TouchableOpacity
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
        }}
        onPress={onClick}
      >
        <ImageBackground
          source={require("../../assets/images/ic_ticket_bg.png")}
          style={styles.background}
          resizeMode={"stretch"}
        />
        <View style={{ flex: 3, flexWrap: "wrap" }}>
          {getTicket(wayOne!)}
          {wayTwo == undefined ? null : (
            <>
              <View
                style={{
                  backgroundColor: GRAY_LIGHT,
                  alignSelf: "center",
                  width: "90%",
                  height: 1,
                }}
              ></View>
              {getTicket(wayTwo!)}
            </>
          )}
        </View>

        <View
          style={{
            flex: 1.1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            {wayTwo == undefined ? <HalfDivider /> : <Divider />}

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text
                style={{
                  ...styles.price,
                }}
                numberOfLines={1}
              >
                {
                  ((wayTwo == undefined ? 0 : wayTwo?.price) + wayOne.price) + currency}
              </Text>

              <Text style={styles.airline} ellipsizeMode="tail">
                {wayOne.flightName}
              </Text>
              <Text
                style={{
                  ...styles.time,
                }}
                numberOfLines={1}
              >
                {wayOne.totalTime} {/*TODO: Add both times*/}
              </Text>
              {wayOne.stops ? (
                <Text
                  style={{
                    ...styles.time,
                  }}
                  numberOfLines={1}
                >
                  {wayOne.stops + " Escales"} {/*TODO: Add both times*/}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {cancellable && (
        <TouchableOpacity onPress={onCancel}>
          <Cross
            style={{
              bottom: 0,
              alignSelf: "center",
              padding: 10,
              margin: wayTwo == undefined ? 0 : 10,
              position: "absolute",
            }}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default TicketItem;
