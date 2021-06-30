import { Currencies } from "../../src/model";

export const CURRENCIES = "actionTypes/CURRENCIES";

export const CURRENCIES_REQUEST = "actionTypes/CURRENCIES_REQUEST";
export interface CurrenciesRequestAction {
  type: typeof CURRENCIES_REQUEST;
}

export const CURRENCIES_SUCCESS = "actionTypes/CURRENCIES_SUCCESS";
export interface CurrenciesSuccessAction {
  type: typeof CURRENCIES_SUCCESS;
  data: Currencies;
}

export const CURRENCIES_FAILURE = "actionTypes/CURRENCIES_FAILURE";
export interface CurrenciesFailureAction {
  type: typeof CURRENCIES_FAILURE;
  error: string;
}

export type CurrenciesActions =
  | CurrenciesRequestAction
  | CurrenciesSuccessAction
  | CurrenciesFailureAction;
