import { call, put, takeEvery } from "redux-saga/effects";
import { Data } from "../../src/model";
import {
  getMarketsFailureAction,
  getMarketsSuccessAction,
} from "./actionCreators";
import { MarketsRequestAction, MARKETS_REQUEST } from "./actionTypes";
import { getMarkets } from "./api";

function* handleResponse(action: MarketsRequestAction) {
  try {
    const { data } = yield call(getMarkets);
    const response: Data = data;
    console.log("Data Countries", response.Countries);
    yield put(getMarketsSuccessAction(data));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getMarketsFailureAction(errorMessage));
  }
}

export function* marketsSaga() {
  console.log("marketsSaga saga");
  yield takeEvery(MARKETS_REQUEST, handleResponse);
}
