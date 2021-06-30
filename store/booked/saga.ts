import { call, put, takeEvery } from "redux-saga/effects";
import { Data } from "../../src/model";
import {
  getBookedFailureAction,
  getBookedSuccessAction,
} from "./actionCreators";
import { BookedRequestAction, BOOKED_REQUEST } from "./actionTypes";
import { getBooked } from "./api";

function* handleResponse(action: BookedRequestAction) {
  try {
    // console.log("Data Booked...");
    const { data } = yield call(getBooked);
    console.log("Data Booked result", data);
    const response: Data = data;
    yield put(getBookedSuccessAction(response));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getBookedFailureAction(errorMessage));
  }
}

export function* bookedSaga() {
  console.log("bookedSaga");
  yield takeEvery(BOOKED_REQUEST, handleResponse);
}
