import { Data } from "../../src/model";

export const WATCH_LIST = "actionTypes/WATCH_LIST";

export const WATCH_LIST_REQUEST = "actionTypes/WATCH_LIST_REQUEST";
export interface WatchListRequestAction {
  type: typeof WATCH_LIST_REQUEST;
}

export const WATCH_LIST_SUCCESS = "actionTypes/WATCH_LIST_SUCCESS";
export interface WatchListSuccessAction {
  type: typeof WATCH_LIST_SUCCESS;
  data: Data;
}

export const WATCH_LIST_FAILURE = "actionTypes/WATCH_LIST_FAILURE";
export interface WatchListFailureAction {
  type: typeof WATCH_LIST_FAILURE;
  error: string;
}

export type WatchListActions =
  | WatchListRequestAction
  | WatchListSuccessAction
  | WatchListFailureAction;
