import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import ADD from "../../../../assets/images/ic_add_feedack.svg";
import {
  GRAY_DARK,
  GRAY_LIGHT,
  LIGHT_GRAY_BG,
  WHITE,
} from "../../../../util/colors";
import PrimaryButton from "../../../../util/primaryButton";
const feedback = () => {
  const navigation = useNavigation();

  function renderInfo() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 20, flex: 1, alignSelf: "flex-start" }}>
          <TextInput
            placeholder={"Ecrivez votre message ici..."}
            placeholderTextColor={GRAY_DARK}
            multiline={true}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: GRAY_LIGHT,
            alignItems: "center",
            padding: 20,
          }}
          onPress={() => {}}
        >
          <ADD />
        </TouchableOpacity>
        <PrimaryButton
          label={"Soumettre"}
          onClick={() => {}}
          textStyle={{ color: WHITE }}
          containerStyle={{ margin: 40 }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      {renderInfo()}
    </SafeAreaView>
  );
};

export default feedback;
