import { Locations } from "../../src/model";

export const LOCATIONS = "actionTypes/LOCATIONS";

export const LOCATIONS_REQUEST = "actionTypes/LOCATIONS_REQUEST";
export interface LocationsRequestAction {
  type: typeof LOCATIONS_REQUEST;
  query: string;
}

export const LOCATIONS_SUCCESS = "actionTypes/LOCATIONS_SUCCESS";
export interface LocationsSuccessAction {
  type: typeof LOCATIONS_SUCCESS;
  data: Locations;
}

export const LOCATIONS_FAILURE = "actionTypes/LOCATIONS_FAILURE";
export interface LocationsFailureAction {
  type: typeof LOCATIONS_FAILURE;
  error: string;
}

export type LocationsActions =
  | LocationsRequestAction
  | LocationsSuccessAction
  | LocationsFailureAction;
