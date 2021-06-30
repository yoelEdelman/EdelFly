import { Data } from "../../src/model";
import * as actions from "./actionTypes";

export function getWatchListRequestAction(): actions.WatchListRequestAction {
  return {
    type: actions.WATCH_LIST_REQUEST,
  };
}

export function getWatchListSuccessAction(
  data: Data
): actions.WatchListSuccessAction {
  return {
    type: actions.WATCH_LIST_SUCCESS,
    data,
  };
}

export function getWatchListFailureAction(
  error: string
): actions.WatchListFailureAction {
  return {
    type: actions.WATCH_LIST_FAILURE,
    error,
  };
}
