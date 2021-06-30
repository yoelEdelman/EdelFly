import { useNavigation } from "@react-navigation/native";
import React, { Dispatch, useEffect } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import { getCurrenciesRequestAction } from "../../../../store/currencies/actionCreators";
import {
  CURRENCIES,
  CurrenciesRequestAction,
} from "../../../../store/currencies/actionTypes";
import { StoreState } from "../../../../store/root/reducer";
import ActivityIndicatorView from "../../../../util/activityIndicator";
import { GRAY_DARK, LIGHT_GRAY_BG } from "../../../../util/colors";
import Seperator from "../../../../util/seperator";
import { ApiProps, Currencies, Currency as currency } from "../../../model";
import SettingsItem from "../settingsItem";

interface Props extends ApiProps {
  getCurrenciesRequestAction: () => void;
  response: Currencies | null;
}

const Currency: React.FC<Props> = ({
  isLoading,
  error,
  getCurrenciesRequestAction,
  response,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    getCurrenciesRequestAction();
  }, []);

  function renderSeparator() {
    return <Seperator />;
  }

  function renderSection3() {
    return (
      <ScrollView style={{ marginBottom: 10 }}>
        {response?.Currencies.sort((a, b) =>
          a.Code > b.Code ? 1 : b.Code > a.Code ? -1 : 0
        ).map((item) => (
          <>
            <SettingsItem
              key={item.heading}
              iconRight={getCurrency(item.Symbol)}
              title={item.Code}
              onClick={() => {
                onClick(item);
              }}
              clickable={false}
            />
            {renderSeparator()}
          </>
        ))}
      </ScrollView>
    );
  }

  function onClick(currency: currency) {
    //USE HOWEVER YOU WANT
  }

  function getCurrency(txt: string) {
    return <Text style={{ color: GRAY_DARK }}>{txt}</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      {renderSection3()}
      {isLoading ? <ActivityIndicatorView /> : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isLoading: state.isLoading[CURRENCIES],
    error: state.error[CURRENCIES],
    response: state.currencyState.result,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CurrenciesRequestAction>) => {
  return {
    getCurrenciesRequestAction: () => {
      dispatch(getCurrenciesRequestAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
