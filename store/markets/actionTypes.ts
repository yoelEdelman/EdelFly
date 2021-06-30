import { Data } from "../../src/model";

export const MARKETS = "actionTypes/MARKETS";

export const MARKETS_REQUEST = "actionTypes/MARKETS_REQUEST";
export interface MarketsRequestAction {
  type: typeof MARKETS_REQUEST;
}

export const MARKETS_SUCCESS = "actionTypes/MARKETS_SUCCESS";
export interface MarketsSuccessAction {
  type: typeof MARKETS_SUCCESS;
  user: Data;
}

export const MARKETS_FAILURE = "actionTypes/MARKETS_FAILURE";
export interface MarketsFailureAction {
  type: typeof MARKETS_FAILURE;
  error: string;
}

export type SignUpActions =
  | MarketsRequestAction
  | MarketsSuccessAction
  | MarketsFailureAction;
