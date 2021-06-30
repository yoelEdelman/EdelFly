import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import SafeAreaView from "react-native-safe-area-view";
import Icon from "../../../../assets/images/ic_back_cross.svg";
import {
  SearchHomeScreen,
  SelectDateRouteProps,
} from "../../../../navigation/search/helper";
import { PRIMARY, SECONDARY, WHITE } from "../../../../util/colors";
import styles from "./style";

const SelectDate = () => {
  const navigation = useNavigation();
  const route = useRoute<SelectDateRouteProps>();
  const format = "YYYY-MM-DD";

  const [startingDate, setStartingDate] = useState(
    moment(route.params.dateFrom).format(format)
  );
  const [endingDate, setEndingDate] = useState(
    moment(route.params.dateTo).format(format)
  );

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
  }, [navigation, startingDate, endingDate]);

  function navigateToSearchHomeScreen() {
    if (startingDate == "") {
      Alert.alert(
        "Error",
        "No Date is selected.",
        [
          {
            text: "Select",
          },
        ],
        { cancelable: false }
      );
    } else {
      navigation.navigate(SearchHomeScreen, {
        dateFrom: moment(startingDate).toDate(),
        dateTo: moment(endingDate).toDate(),
      });
    }
  }

  function getTitle(msg: string) {
    return <Text style={styles.title}>{msg}</Text>;
  }

  function setBothDates(day: string) {
    setStartingDate(day);
    setEndingDate(day);
  }

  const onDayPress = (day: any) => {
    console.log("Selected day", day, new Date(day.timestamp));

    startingDate == ""
      ? setBothDates(day.dateString)
      : startingDate == day.dateString
      ? setBothDates("")
      : moment(startingDate).diff(moment(day.dateString), "days") <= 0
      ? setEndingDate(day.dateString)
      : setBothDates("");
  };

  const getSelectedDates = () => {
    const disabledDates: any = {};
    const start = moment(startingDate);
    const end = moment(endingDate);
    for (let m = moment(start); m.diff(end, "days") <= 0; m.add(1, "days")) {
      const formatedDate = m.format(format);
      const first = formatedDate == startingDate;
      const last = formatedDate == endingDate;
      disabledDates[formatedDate] = {
        selected: true,
        color: first || last ? SECONDARY : PRIMARY,
        startingDay: first,
        endingDay: last,
      };
    }
    return disabledDates;
  };

  function getWeekDaysView() {
    const DaysLetters = ["D", "L", "M", "M", "J", "V", "S"];
    return (
      <View style={styles.daysContatiner}>
        {DaysLetters.map((item) => (
          <Text style={styles.dayText}>{item}</Text>
        ))}
      </View>
    );
  }

  function getCalenderView() {
    return (
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {
          console.log("now these months are visible", months);
        }}
        onDayPress={onDayPress}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={24}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        theme={{
          monthTextColor: PRIMARY,
          textSectionTitleColor: PRIMARY,
          todayTextColor: PRIMARY,
          selectedDayTextColor: WHITE,
          selectedDayBackgroundColor: SECONDARY,
        }}
        hideDayNames={true}
        renderHeader={(date) => {
          const header = date.toString("MMMM yyyy");
          const [month, year] = header.split(" ");

          return (
            <View style={styles.calendarMonthView}>
              <Text style={styles.date}>{`${month}, ${year}`}</Text>
            </View>
          );
        }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType={"period"}
        // Collection of dates that have to be colored in a special way. Default = {}
        markedDates={{
          ...getSelectedDates(),
        }}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {getTitle("Sélectionner les dates")}
      {getWeekDaysView()}
      {getCalenderView()}
      {/* <View style={{ backgroundColor: PRIMARY }}>
        <PrimaryButton
          label={"Save Card"}
          onClick={() => {}}
          textStyle={{ color: PRIMARY }}
          containerStyle={{
            margin: 40,
            paddingHorizontal: 80,
            paddingVertical: 15,
            backgroundColor: WHITE,
          }}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default SelectDate;
