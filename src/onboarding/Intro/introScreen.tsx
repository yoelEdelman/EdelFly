import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { HomeNavigatorScreen } from "../../../navigation/main/helper";
import { GRAY_MEDIUM, SECONDARY, WHITE } from "../../../util/colors";
import { introScreens } from "./helper";
import ItemView from "./introScrollItem";
import styles from "./style";

const Intro = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");
  const [isLastItem, setisLastItem] = useState(false);
  const { currentPage: pageIndex } = sliderState;
  const navigation = useNavigation();

  function setSliderPage(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / (width - 1));
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
      setisLastItem(indexOfNextScreen == introScreens.length - 1);
    }
  }

  function navigateToLocationShareScreen() {
    navigation.navigate(HomeNavigatorScreen);
  }

  const [wasTap, setWasTap] = useState(false);
  const ref = useRef<ScrollView>(null);

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
      <SafeAreaView
        onTouchEnd={() => {
          wasTap
            ? ref.current?.scrollTo({
                x: (pageIndex + 1) * Dimensions.get("window").width,
              })
            : null;
        }}
        onTouchMove={() => {
          setWasTap(false);
        }}
        onTouchStart={() => {
          setWasTap(true);
        }}
        style={{ flex: 1, backgroundColor: SECONDARY }}
      >
        <View
          style={{
            flex: 1,
            height: "20%",
            width: "100%",
            position: "absolute",
            backgroundColor: WHITE,
          }}
        />
        <ScrollView
          ref={ref}
          overScrollMode="never"
          bounces={false}
          style={styles.scrollView}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
            setSliderPage(event);
          }}
        >
          {introScreens.map((screen) => (
            <ItemView
              key={screen.heading}
              screen={screen}
              onClick={navigateToLocationShareScreen}
            ></ItemView>
          ))}
        </ScrollView>

        <View style={styles.paginationWrapper}>
          {Array.from(Array(introScreens.length).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                {
                  backgroundColor: pageIndex === index ? WHITE : GRAY_MEDIUM,
                },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Intro;
