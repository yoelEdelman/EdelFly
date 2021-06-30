import { Data } from "../../src/model";
import * as actions from "./actionTypes";

export function getBookedRequestAction(): actions.BookedRequestAction {
  return {
    type: actions.BOOKED_REQUEST,
  };
}

export function getBookedSuccessAction(
  data: Data
): actions.BookedSuccessAction {
  return {
    type: actions.BOOKED_SUCCESS,
    data,
  };
}

export function getBookedFailureAction(
  error: string
): actions.BookedFailureAction {
  return {
    type: actions.BOOKED_FAILURE,
    error,
  };
}
