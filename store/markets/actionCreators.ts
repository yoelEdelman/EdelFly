import { Data } from "../../src/model";
import * as actions from "./actionTypes";

export function getMarketsRequestAction(): actions.MarketsRequestAction {
  return {
    type: actions.MARKETS_REQUEST,
  };
}

export function getMarketsSuccessAction(
  user: Data
): actions.MarketsSuccessAction {
  return {
    type: actions.MARKETS_SUCCESS,
    user,
  };
}

export function getMarketsFailureAction(
  error: string
): actions.MarketsFailureAction {
  return {
    type: actions.MARKETS_FAILURE,
    error,
  };
}
