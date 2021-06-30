import { call, put, takeEvery } from "redux-saga/effects";
import { Locations } from "../../src/model";
import {
  getLocationsFailureAction,
  getLocationsSuccessAction,
} from "./actionCreators";
import { LocationsRequestAction, LOCATIONS_REQUEST } from "./actionTypes";
import { getLocations } from "./api";

function* handleResponse(action: LocationsRequestAction) {
  try {
    // console.log("Data Locations...");
    const { data } = yield call(getLocations, action.query);
    console.log("Data Locations result", data);
    const response: Locations = data;
    yield put(getLocationsSuccessAction(response));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getLocationsFailureAction(errorMessage));
  }
}

export function* locationsSaga() {
  console.log("locationsSaga");
  yield takeEvery(LOCATIONS_REQUEST, handleResponse);
}
