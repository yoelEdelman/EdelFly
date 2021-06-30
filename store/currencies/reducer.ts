import { Currencies } from "../../src/model";
import { CurrenciesActions, CURRENCIES_SUCCESS } from "./actionTypes";

export interface CurrenciesState {
  result: Currencies | null;
}

const initialState: CurrenciesState = {
  result: null,
};

export function currenciesReducer(
  state: CurrenciesState = initialState,
  action: CurrenciesActions
): CurrenciesState {
  if (action.type === CURRENCIES_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else {
    return state;
  }
}
