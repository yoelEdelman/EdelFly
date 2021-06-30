// import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LOGO_IMG from "../../../assets/images/ic_logo.svg";
import { IntroScreen } from "../../../navigation/main/helper";
import { PRIMARY } from "../../../util/colors";
import { string } from "../../../util/constants";
import styles from "./style";

const Landing = () => {
  const navigation = useNavigation();
  function navigateToIntro() {
    navigation.navigate(IntroScreen);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY }}>
      <ScrollView
        overScrollMode="never"
        bounces={false}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.ScrollView}
      >
        <LOGO_IMG width={120} height={120} style={styles.logo} />
        <TouchableOpacity
          onPress={navigateToIntro}
          style={{ ...styles.primaryButton, flexDirection: "row" }}
        >
          <Text style={{ ...styles.appButtonText, flex: 1 }}>
            {string.GET_STARTED}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
