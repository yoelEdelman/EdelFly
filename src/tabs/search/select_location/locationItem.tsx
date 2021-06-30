import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PlaneArrive from "../../../../assets/images/ic_plane_arrive.svg";
import PlaneDep from "../../../../assets/images/ic_plane_dep.svg";
import styles from "./style";

interface Props {
  arrivalLocation: boolean;
  location: string;
  state: string;
  shortForm: string;
  onClick?: () => void;
}
const LocationItem: React.FC<Props> = ({
  arrivalLocation,
  shortForm,
  location,
  state,
  onClick,
}) => {
  return (
    <TouchableOpacity style={styles.item_container} onPress={onClick}>
      {arrivalLocation ? (
        <PlaneArrive width={20} height={20} />
      ) : (
        <PlaneDep width={20} height={20} />
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...styles.location,
            }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {location}
          </Text>
          <Text
            style={{
              ...styles.shortForm,
            }}
            numberOfLines={1}
          >
            {shortForm}
          </Text>
        </View>
        <Text style={styles.state} ellipsizeMode="tail">
          {state}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationItem;
