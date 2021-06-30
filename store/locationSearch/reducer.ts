import { Locations } from "../../src/model";
import { LocationsActions, LOCATIONS_SUCCESS } from "./actionTypes";

export interface LocationsState {
  result: Locations | null;
}

const initialState: LocationsState = {
  result: null,
};

export function locationsReducer(
  state: LocationsState = initialState,
  action: LocationsActions
): LocationsState {
  if (action.type === LOCATIONS_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else {
    return state;
  }
}
