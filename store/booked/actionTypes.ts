import { Data } from "../../src/model";

export const BOOKED = "actionTypes/BOOKED";

export const BOOKED_REQUEST = "actionTypes/BOOKED_REQUEST";
export interface BookedRequestAction {
  type: typeof BOOKED_REQUEST;
}

export const BOOKED_SUCCESS = "actionTypes/BOOKED_SUCCESS";
export interface BookedSuccessAction {
  type: typeof BOOKED_SUCCESS;
  data: Data;
}

export const BOOKED_FAILURE = "actionTypes/BOOKED_FAILURE";
export interface BookedFailureAction {
  type: typeof BOOKED_FAILURE;
  error: string;
}

export type BookedActions =
  | BookedRequestAction
  | BookedSuccessAction
  | BookedFailureAction;
