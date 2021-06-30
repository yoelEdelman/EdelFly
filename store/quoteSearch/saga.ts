import { call, put, takeEvery } from "redux-saga/effects";
import { Data } from "../../src/model";
import { getQuoteFailureAction, getQuoteSuccessAction } from "./actionCreators";
import { QuoteRequestAction, QUOTES_REQUEST } from "./actionTypes";
import { getQuote } from "./api";

function* handleResponse(action: QuoteRequestAction) {
  try {
    // console.log("Data Quote...");
    const { data } = yield call(
      getQuote,
      action.country,
      action.currency,
      action.locale,
      action.originPlace,
      action.destinationPlace,
      action.outboundPartialDate,
      action.inboundPartialDate
    );
    console.log("Data Quote result", data);
    const response: Data = data;
    yield put(getQuoteSuccessAction(response));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getQuoteFailureAction(errorMessage));
  }
}

export function* quotesSaga() {
  console.log("quotesSaga");
  yield takeEvery(QUOTES_REQUEST, handleResponse);
}
