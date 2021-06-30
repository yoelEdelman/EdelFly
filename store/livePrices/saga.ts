import { call, put, takeEvery } from "redux-saga/effects";
import { Data } from "../../src/model";
import {
  getLivePricesFailureAction,
  getLivePricesSuccessAction,
} from "./actionCreators";
import { LivePricesRequestAction, LIVE_PRICES_REQUEST } from "./actionTypes";
import { getLivePrices } from "./api";

function* handleResponse(action: LivePricesRequestAction) {
  try {
    // console.log("Data LivePrices...");
    const { data } = yield call(getLivePrices, action.query);
    console.log("Data LivePrices result", data);
    const response: Data = data;
    yield put(getLivePricesSuccessAction(response));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getLivePricesFailureAction(errorMessage));
  }
}

export function* livePricesSaga() {
  console.log("livePricesSaga");
  yield takeEvery(LIVE_PRICES_REQUEST, handleResponse);
}
