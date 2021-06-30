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
import Tick from "../../../../assets/images/ic_round_tick.svg";
import { SignUpScreen } from "../../../../navigation/setting/helper";
import {
  GRAY_DARK,
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
const signIn = () => {
  const navigation = useNavigation();
  const [showSuccess, setShowSuccess] = useState(false);

  function login() {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  }
  function onClick(navigationScreen: string) {
    navigation.navigate(navigationScreen);
  }

  function navigateToSignup() {
    navigation.navigate(SignUpScreen);
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

  function renderSeparator() {
    return <Seperator />;
  }

  function renderInputs() {
    return (
      <View style={styles.input_container}>
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
        <TouchableOpacity
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Text style={styles.forgot_password}>{"Mot de passe oublié?"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderLoginBtn() {
    return (
      <PrimaryButton
        label={"Connexion"}
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
        onClick={login}
      />
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
      <TouchableOpacity
        style={{
          marginBottom: 40,
          alignSelf: "center",
        }}
        onPress={navigateToSignup}
      >
        <Text style={styles.paragraph}>{"S'inscrire"}</Text>
        <View
          style={{
            backgroundColor: PRIMARY,
            height: 2,
            paddingHorizontal: 40,
            borderRadius: 5,
          }}
        />
      </TouchableOpacity>
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
      {renderLoginBtn()}
      {renderSingupBtn()}
      {renderSection1()}
      {renderSeparator()}
      {renderSection2()}
      <Dialog
        isVisible={showSuccess}
        title="Successfully Signed In!"
        desc=""
        icon={<Tick />}
      />
    </SafeAreaView>
  );
};

export default signIn;
