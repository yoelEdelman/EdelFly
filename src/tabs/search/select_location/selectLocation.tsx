import { useNavigation, useRoute } from "@react-navigation/native";
import React, { Dispatch, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import { connect } from "react-redux";
import Icon from "../../../../assets/images/ic_back_cross.svg";
import PlaneArriveGray from "../../../../assets/images/ic_plane_arrive_gray.svg";
import PlaneDepGray from "../../../../assets/images/ic_plane_dep_gray.svg";
import {
  SearchHomeScreen,
  SelectLocationRouteProps,
} from "../../../../navigation/search/helper";
import { getLocationsRequestAction } from "../../../../store/locationSearch/actionCreators";
import {
  LOCATIONS,
  LocationsRequestAction,
} from "../../../../store/locationSearch/actionTypes";
import { StoreState } from "../../../../store/root/reducer";
import ActivityIndicatorView from "../../../../util/activityIndicator";
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  PRIMARY,
  WHITE,
} from "../../../../util/colors";
import Seperator from "../../../../util/seperator";
import { ApiProps, Locations, Place } from "../../../model";
import LocationItem from "./locationItem";
import styles from "./style";

interface Props extends ApiProps {
  getLocationsRequestAction: (query: string) => void;
  response: Locations | null;
}
let query = "";

const SelectLocation: React.FC<Props> = ({
  isLoading,
  error,
  getLocationsRequestAction,
  response,
}) => {
  const [showNearby, setShowNearby] = useState(false);
  const arrivalLocation = false;
  const navigation = useNavigation();
  const route = useRoute<SelectLocationRouteProps>();

  // console.log("queryquery    ", query);
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

  function navigateToSearchHomeScreen(place?: Place) {
    navigation.navigate(
      SearchHomeScreen,
      place
        ? route?.params.departure
          ? { locationFrom: place }
          : { locationTo: place }
        : {}
    );
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

  function getTitle() {
    return <Text style={styles.title}>{"Rechercher un lieu"}</Text>;
  }

  function getSearchBar() {
    return (
      <View style={styles.search_bar}>
        <TextInput
          style={styles.search_input}
          placeholder="Emplacement de recherche"
          placeholderTextColor={GRAY_DARK}
          onChangeText={(text) => {
            query = text;
            getLocationsRequestAction(text);
          }}
        />
      </View>
    );
  }

  function getNearbySwicth() {
    return (
      <TouchableOpacity style={styles.item_container} onPress={() => {}}>
        {arrivalLocation ? (
          <PlaneArriveGray width={20} height={20} />
        ) : (
          <PlaneDepGray width={20} height={20} />
        )}
        <Text
          style={{
            ...styles.location,
            marginHorizontal: 10,
            color: GRAY_DARK,
          }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {"Ajouter les aéroports à proximité"}
        </Text>
        <Switch
          value={showNearby}
          onValueChange={(val) => setShowNearby(val)}
          disabled={false}
          activeText={"On"}
          inActiveText={"Off"}
          circleSize={25}
          barHeight={30}
          circleBorderWidth={0}
          backgroundActive={PRIMARY}
          backgroundInactive={GRAY_MEDIUM}
          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
          innerCircleStyle={{
            alignItems: "center",
            justifyContent: "center",
          }} // style for inner animated circle for what you (may) be rendering inside the circle
          outerCircleStyle={{}} // style for outer animated circle
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
          switchWidthMultiplier={2.2} // multipled by the `circleSize` prop to calculate total width of the Switch
          switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />
      </TouchableOpacity>
    );
  }

  function getLocations() {
    return (
      query != "" && (
        <FlatList
          data={response?.Places}
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderSeparator}
          ListFooterComponent={renderSeparator}
          renderItem={({ item }) => (
            <LocationItem
              arrivalLocation={false}
              location={item.PlaceName ?? ""}
              shortForm={item.PlaceId?.split("-")[0] ?? ""}
              state={item.CountryName ?? ""}
              onClick={() => navigateToSearchHomeScreen(item)}
            />
          )}
          keyExtractor={(index) => index.PlaceId.toString()}
        />
      )
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      {getTitle()}
      {getSearchBar()}
      {getNearbySwicth()}
      {getLocations()}
      {isLoading ? <ActivityIndicatorView /> : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isLoading: state.isLoading[LOCATIONS],
    error: state.error[LOCATIONS],
    response: state.locationssState.result,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<LocationsRequestAction>) => {
  return {
    getLocationsRequestAction: (query: string) => {
      dispatch(getLocationsRequestAction(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation);
