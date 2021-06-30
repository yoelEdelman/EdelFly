import { Locations } from "../../src/model";
import * as actions from "./actionTypes";

export function getLocationsRequestAction(
  query: string
): actions.LocationsRequestAction {
  return {
    type: actions.LOCATIONS_REQUEST,
    query,
  };
}

export function getLocationsSuccessAction(
  data: Locations
): actions.LocationsSuccessAction {
  return {
    type: actions.LOCATIONS_SUCCESS,
    data,
  };
}

export function getLocationsFailureAction(
  error: string
): actions.LocationsFailureAction {
  return {
    type: actions.LOCATIONS_FAILURE,
    error,
  };
}
