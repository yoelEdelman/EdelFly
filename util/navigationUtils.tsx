import React from "react";
import { Platform } from "react-native";
import deviceInfoModule from "react-native-device-info";
import Back from "../assets/images/ic_back_arrow.svg";

export function getHeaderStatusBarHeight() {
  return Platform.OS == "ios" ? (deviceInfoModule.hasNotch() ? 60 : 40) : 0;
}
export function getSettingsHeaderBackImage() {
  return (
    <Back
      style={{
        marginBottom: Platform.OS == "ios" ? 20 : 0,
        marginLeft: Platform.OS == "ios" ? 0 : -10,
      }}
    />
  );
}
