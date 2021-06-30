import React from "react";
import { Text } from "react-native";
import WatchlistIcon from "../../assets/images/ic_tab_bookmark.svg";
import WatchlistIconFocused from "../../assets/images/ic_tab_bookmark_focus.svg";
import NotificationIcon from "../../assets/images/ic_tab_notification.svg";
import NotificationIconFocused from "../../assets/images/ic_tab_notification_focus.svg";
import SearchIcon from "../../assets/images/ic_tab_search.svg";
import SearchIconFocused from "../../assets/images/ic_tab_search_focus.svg";
import SettingsIcon from "../../assets/images/ic_tab_setting.svg";
import SettingsIconFocused from "../../assets/images/ic_tab_setting_focus.svg";
import Booked from "../../assets/images/ic_tab_user.svg";
import BookedFocused from "../../assets/images/ic_tab_user_focus.svg";
import { GRAY_DARK, PRIMARY } from "../../util/colors";

export const NotificationStack = "Notifications";
export const WatchlistStack = "Liste";
export const SearchStack = "Rechercher";
export const BookedStack = "Réservations";
export const SettingsStack = "Paramètres";

function getTabIconDimensions() {
  return {
    width: 24,
    height: 24,
  };
}

function getAddIconDimensions() {
  return {
    width: 70,
    height: 70,
  };
}

export function getFocusedIcon(name: string) {
  switch (name) {
    case NotificationStack:
      return <NotificationIconFocused {...getTabIconDimensions()} />;
    case SearchStack:
      return <SearchIconFocused {...getAddIconDimensions()} />;
    case WatchlistStack:
      return <WatchlistIconFocused {...getTabIconDimensions()} />;
    case BookedStack:
      return <BookedFocused {...getTabIconDimensions()} />;
    case SettingsStack:
      return <SettingsIconFocused {...getTabIconDimensions()} />;
  }
}

export function getIcon(name: string) {
  switch (name) {
    case NotificationStack:
      return <NotificationIcon {...getTabIconDimensions()} />;
    case SearchStack:
      return <SearchIcon {...getAddIconDimensions()} />;
    case WatchlistStack:
      return <WatchlistIcon {...getTabIconDimensions()} />;
    case BookedStack:
      return <Booked {...getTabIconDimensions()} />;
    case SettingsStack:
      return <SettingsIcon {...getTabIconDimensions()} />;
  }
}

export function getFocusedLabel(name: string) {
  switch (name) {
    case NotificationStack:
      return (
        <Text style={{ color: PRIMARY, fontSize: 10 }}>
          {" "}
          {NotificationStack}
        </Text>
      );
    case SearchStack:
      return <Text style={{ color: PRIMARY, fontSize: 10 }}> {""}</Text>;
    case WatchlistStack:
      return (
        <Text style={{ color: PRIMARY, fontSize: 10 }}> {WatchlistStack}</Text>
      );
    case BookedStack:
      return (
        <Text style={{ color: PRIMARY, fontSize: 10 }}> {BookedStack}</Text>
      );
    case SettingsStack:
      return (
        <Text style={{ color: PRIMARY, fontSize: 10 }}> {SettingsStack}</Text>
      );
  }
}

export function getLabel(name: string) {
  switch (name) {
    case NotificationStack:
      return (
        <Text style={{ color: GRAY_DARK, fontSize: 10 }}>
          {" "}
          {NotificationStack}
        </Text>
      );
    case SearchStack:
      return <Text style={{ color: GRAY_DARK, fontSize: 10 }}> {""}</Text>;
    case WatchlistStack:
      return (
        <Text style={{ color: GRAY_DARK, fontSize: 10 }}>
          {" "}
          {WatchlistStack}
        </Text>
      );
    case BookedStack:
      return (
        <Text style={{ color: GRAY_DARK, fontSize: 10 }}> {BookedStack}</Text>
      );
    case SettingsStack:
      return (
        <Text style={{ color: GRAY_DARK, fontSize: 10 }}> {SettingsStack}</Text>
      );
  }
}
