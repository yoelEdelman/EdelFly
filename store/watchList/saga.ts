import { call, put, takeEvery } from "redux-saga/effects";
import { Data } from "../../src/model";
import {
  getWatchListFailureAction,
  getWatchListSuccessAction,
} from "./actionCreators";
import { WatchListRequestAction, WATCH_LIST_REQUEST } from "./actionTypes";
import { getWatchList } from "./api";

function* handleResponse(action: WatchListRequestAction) {
  try {
    // console.log("Data WatchList...");
    const { data } = yield call(getWatchList);
    console.log("Data WatchList result", data);
    const response: Data = data;
    yield put(getWatchListSuccessAction(response));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getWatchListFailureAction(errorMessage));
  }
}

export function* watchListSaga() {
  console.log("watchListSaga");
  yield takeEvery(WATCH_LIST_REQUEST, handleResponse);
}
