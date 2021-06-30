import { Data } from "../../src/model";
import { WatchListActions, WATCH_LIST_SUCCESS } from "./actionTypes";

export interface WatchListState {
  result: Data | null;
}

const initialState: WatchListState = {
  result: null,
};

export function watchListReducer(
  state: WatchListState = initialState,
  action: WatchListActions
): WatchListState {
  if (action.type === WATCH_LIST_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else {
    return state;
  }
}
