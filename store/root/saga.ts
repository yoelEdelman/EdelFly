import { all } from "redux-saga/effects";
import { bookedSaga } from "../booked/saga";
import { currenciesSaga } from "../currencies/saga";
import { livePricesSaga } from "../livePrices/saga";
import { locationsSaga } from "../locationSearch/saga";
import { marketsSaga } from "../markets/saga";
import { notificationSaga } from "../notification/saga";
import { quotesSaga } from "../quoteSearch/saga";
import { watchListSaga } from "../watchList/saga";

export function* rootSaga() {
  const sagasList = [
    marketsSaga(),
    notificationSaga(),
    locationsSaga(),
    quotesSaga(),
    livePricesSaga(),
    bookedSaga(),
    watchListSaga(),
    currenciesSaga(),
  ];
  yield all(sagasList);
}
