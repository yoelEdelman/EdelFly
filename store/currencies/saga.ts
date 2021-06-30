import { call, put, takeEvery } from "redux-saga/effects";
import { Currencies } from "../../src/model";
import {
  getCurrenciesFailureAction,
  getCurrenciesSuccessAction,
} from "./actionCreators";
import { CurrenciesRequestAction, CURRENCIES_REQUEST } from "./actionTypes";
import { getCurrencies } from "./api";

function* handleResponse(action: CurrenciesRequestAction) {
  try {
    // console.log("Data Currencies...");
    const { data } = yield call(getCurrencies);
    console.log("Data Currencies result", data);
    const response: Currencies = data;
    yield put(getCurrenciesSuccessAction(response));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getCurrenciesFailureAction(errorMessage));
  }
}

export function* currenciesSaga() {
  console.log("currenciesSage");
  yield takeEvery(CURRENCIES_REQUEST, handleResponse);
}
