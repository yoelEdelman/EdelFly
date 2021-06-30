import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { LIGHT_GRAY_BG, WHITE } from "../../../../util/colors";
import Seperator from "../../../../util/seperator";
import { Flight } from "../../../../util/ticket/ticketItem";
import TicketDetailsItem from "../../../../util/ticket_detail/ticketDetailsItem";

const trips = () => {
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigation = useNavigation();
  function renderSeparator() {
    return <Seperator />;
  }
  function getList() {
    return (
      <FlatList
        data={numberList}
        contentContainerStyle={{
          paddingTop: 0,
          paddingBottom: 50,
          backgroundColor: WHITE,
        }}
        ItemSeparatorComponent={renderSeparator}
        bounces={false}
        overScrollMode="never"
        renderItem={({ item }) => (
          <TicketDetailsItem
            origin={"San Francisco"}
            destination={"London"}
            wayOne={
              new Flight(
                "http://logok.org/wp-content/uploads/2015/03/Qatar-Airways-logo.png",
                item + ":30 am",
                item + ":00 am",
                "Wed, 27 Nov",
                "Wed, 27 Nov",
                "San Francisco",
                "Barcelona",
                "SFO",
                "BRC",
                item + "h, 30 m",
                item * 200,
                (10 - item) * 10,
                "Qatar Airways",
                "Economy",
                "Boeing, 737"
              )
            }
            // return way
            wayTwo={
              item % 2 == 0
                ? new Flight(
                    "https://www.phaidon.com/resource/aa.jpg",
                    item + ":30 am",
                    item + ":00 am",
                    "Wed, 27 Nov",
                    "Wed, 27 Nov",
                    "London",
                    "Barcelona",
                    "LHR",
                    "BRC",
                    item + "h, 30 m",
                    item * 200,
                    (10 - item) * 10,
                    "American Airlines",
                    "Economy",
                    "Boeing, 222"
                  )
                : undefined
            }
          />
        )}
        keyExtractor={(index) => index.toString()}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      {getList()}
    </SafeAreaView>
  );
};

export default trips;
