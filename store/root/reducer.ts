import { combineReducers } from "redux";
import { bookedReducer } from "../booked/reducer";
import { currenciesReducer } from "../currencies/reducer";
import { livePricesReducer } from "../livePrices/reducer";
import { locationsReducer } from "../locationSearch/reducer";
import { notificationsReducer } from "../notification/reducer";
import { quotesReducer } from "../quoteSearch/reducer";
import errorReducer from "../utils/errorReducer";
import loadingReducer from "../utils/loadingReducer";
import { watchListReducer } from "../watchList/reducer";

const appReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  notificationsState: notificationsReducer,
  currencyState: currenciesReducer,
  locationssState: locationsReducer,
  quotesState: quotesReducer,
  livePricesState: livePricesReducer,
  bookedState: bookedReducer,
  watchListState: watchListReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type StoreState = ReturnType<typeof rootReducer>;
export default rootReducer;
