import { Data } from "../../src/model";
import { LivePricesActions, LIVE_PRICES_SUCCESS } from "./actionTypes";

export interface LivePricesState {
  result: Data | null;
}

const initialState: LivePricesState = {
  result: null,
};

export function livePricesReducer(
  state: LivePricesState = initialState,
  action: LivePricesActions
): LivePricesState {
  if (action.type === LIVE_PRICES_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else {
    return state;
  }
}
