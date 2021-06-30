import { Data, Query } from "../../src/model";
import * as actions from "./actionTypes";

export function getLivePricesRequestAction(
  query: Query
): actions.LivePricesRequestAction {
  return {
    type: actions.LIVE_PRICES_REQUEST,
    query,
  };
}

export function getLivePricesSuccessAction(
  data: Data
): actions.LivePricesSuccessAction {
  return {
    type: actions.LIVE_PRICES_SUCCESS,
    data,
  };
}

export function getLivePricesFailureAction(
  error: string
): actions.LivePricesFailureAction {
  return {
    type: actions.LIVE_PRICES_FAILURE,
    error,
  };
}
