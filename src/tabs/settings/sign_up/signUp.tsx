import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Switch } from "react-native-switch";
import Tick from "../../../../assets/images/ic_round_tick.svg";
import { SignInScreen } from "../../../../navigation/setting/helper";
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  LIGHT_GRAY_BG,
  PRIMARY,
  WHITE,
} from "../../../../util/colors";
import Dialog from "../../../../util/dialog/dialog";
import PrimaryButton from "../../../../util/primaryButton";
import Seperator from "../../../../util/seperator";
import { signInSection1, signInSection2 } from "../helper";
import SettingsItem from "../settingsItem";
import styles from "./style";

const signUp = () => {
  const navigation = useNavigation();
  const [emailDeals, setEmailDeals] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function signUp() {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  }

  function onClick(navigationScreen: string) {
    navigation.navigate(navigationScreen);
  }

  function navigateToSignIn() {
    navigation.navigate(SignInScreen);
  }

  function renderSeparator() {
    return <Seperator />;
  }

  function renderBackground() {
    return (
      <ImageBackground
        source={require("../../../../assets/images/ic_sign_in_bg.png")}
        style={styles.background}
        resizeMode={"stretch"}
      />
    );
  }

  function renderEmailDealsItem() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.forgot_password}>{"Envoyez-moi des offres par e-mail"}</Text>
        <Switch
          value={emailDeals}
          onValueChange={(val) => setEmailDeals(val)}
          disabled={false}
          activeText={"On"}
          inActiveText={"Off"}
          circleSize={20}
          barHeight={25}
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
          switchWidthMultiplier={2.5} // multipled by the `circleSize` prop to calculate total width of the Switch
          switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />
      </View>
    );
  }
  function renderInputs() {
    return (
      <View style={styles.input_container}>
        <TextInput style={{ paddingVertical: 10 }} placeholder="Nom d'utilisateur" />
        {renderSeparator()}
        <TextInput
          style={{ paddingVertical: 10 }}
          placeholder="Adresse e-mail"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        <TextInput
          secureTextEntry={true}
          style={{ paddingVertical: 10 }}
          placeholder="Mot de passe"
          placeholderTextColor={GRAY_DARK}
        />
        {renderSeparator()}
        {renderEmailDealsItem()}
      </View>
    );
  }

  function renderLoginBtn() {
    return (
      <TouchableOpacity
        style={{
          marginBottom: 40,
          alignSelf: "center",
        }}
        onPress={navigateToSignIn}
      >
        <Text style={styles.paragraph}>{"Connexion"}</Text>
        <View
          style={{
            backgroundColor: GRAY_DARK,
            height: 2,
            paddingHorizontal: 40,
            borderRadius: 5,
          }}
        />
      </TouchableOpacity>
    );
  }
  function renderHeadings() {
    return (
      <>
        <Text style={styles.header}>{"Bienvenue"}</Text>
        <Text style={styles.paragraph}>
            {"Nous vous aiderons à planifier le voyage \nle plus" +
            " confortable."}
        </Text>
      </>
    );
  }
  function renderSingupBtn() {
    return (
      <PrimaryButton
        label={"S'inscrire"}
        containerStyle={{
          paddingVertical: 0,
          paddingHorizontal: 0,
          marginVertical: 20,
        }}
        textStyle={{
          color: WHITE,
          paddingHorizontal: 60,
          paddingVertical: 10,
        }}
        onClick={signUp}
      />
    );
  }

  function renderSection1() {
    return (
      <View style={{ marginBottom: 10 }}>
        {signInSection1.map((item) => (
          <>
            {renderSeparator()}
            <SettingsItem
              key={item.heading}
              containerStyle={{ backgroundColor: WHITE }}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              title={item.heading}
              onClick={onClick}
            />
            {renderSeparator()}
          </>
        ))}
      </View>
    );
  }

  function renderSection2() {
    return (
      <View style={{ marginBottom: 10 }}>
        {signInSection2.map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              containerStyle={{ backgroundColor: WHITE }}
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              title={item.heading}
              onClick={onClick}
            />
            {renderSeparator()}
          </>
        ))}
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      {renderBackground()}
      {renderHeadings()}
      {renderInputs()}
      {renderSingupBtn()}
      {renderLoginBtn()}
      {renderSection1()}
      {renderSeparator()}
      {renderSection2()}
      <Dialog
        isVisible={showSuccess}
        title="Inscription réussie !"
        desc="Merci de vous joindre a nous."
        icon={<Tick />}
      />
    </SafeAreaView>
  );
};

export default signUp;
