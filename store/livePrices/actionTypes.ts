import { Data, Query } from "../../src/model";

export const LIVE_PRICES = "actionTypes/LIVE_PRICES";

export const LIVE_PRICES_REQUEST = "actionTypes/LIVE_PRICES_REQUEST";
export interface LivePricesRequestAction {
  type: typeof LIVE_PRICES_REQUEST;
  query: Query;
}

export const LIVE_PRICES_SUCCESS = "actionTypes/LIVE_PRICES_SUCCESS";
export interface LivePricesSuccessAction {
  type: typeof LIVE_PRICES_SUCCESS;
  data: Data;
}

export const LIVE_PRICES_FAILURE = "actionTypes/LIVE_PRICES_FAILURE";
export interface LivePricesFailureAction {
  type: typeof LIVE_PRICES_FAILURE;
  error: string;
}

export type LivePricesActions =
  | LivePricesRequestAction
  | LivePricesSuccessAction
  | LivePricesFailureAction;
