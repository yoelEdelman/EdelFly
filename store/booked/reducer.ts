import { Data } from "../../src/model";
import { BookedActions, BOOKED_SUCCESS } from "./actionTypes";

export interface BookedState {
  result: Data | null;
}

const initialState: BookedState = {
  result: null,
};

export function bookedReducer(
  state: BookedState = initialState,
  action: BookedActions
): BookedState {
  if (action.type === BOOKED_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else {
    return state;
  }
}
