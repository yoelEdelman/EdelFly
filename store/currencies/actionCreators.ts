import { Currencies } from "../../src/model";
import * as actions from "./actionTypes";

export function getCurrenciesRequestAction(): actions.CurrenciesRequestAction {
  return {
    type: actions.CURRENCIES_REQUEST,
  };
}

export function getCurrenciesSuccessAction(
  data: Currencies
): actions.CurrenciesSuccessAction {
  return {
    type: actions.CURRENCIES_SUCCESS,
    data,
  };
}

export function getCurrenciesFailureAction(
  error: string
): actions.CurrenciesFailureAction {
  return {
    type: actions.CURRENCIES_FAILURE,
    error,
  };
}
