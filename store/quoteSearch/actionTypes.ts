import { Data } from "../../src/model";

export const QUOTES = "actionTypes/QUOTES";

export const QUOTES_REQUEST = "actionTypes/QUOTES_REQUEST";
export interface QuoteRequestAction {
  type: typeof QUOTES_REQUEST;
  country: string;
  currency: string;
  locale: string;
  originPlace: string;
  destinationPlace: string;
  outboundPartialDate: string;
  inboundPartialDate: string;
}

export const QUOTES_SUCCESS = "actionTypes/QUOTES_SUCCESS";
export interface QuoteSuccessAction {
  type: typeof QUOTES_SUCCESS;
  data: Data;
}

export const QUOTES_FAILURE = "actionTypes/QUOTES_FAILURE";
export interface QuoteFailureAction {
  type: typeof QUOTES_FAILURE;
  error: string;
}

export type QuoteActions =
  | QuoteRequestAction
  | QuoteSuccessAction
  | QuoteFailureAction;
