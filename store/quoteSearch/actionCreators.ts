import { Data } from "../../src/model";
import * as actions from "./actionTypes";

export function getQuoteRequestAction(
  country: string,
  currency: string,
  locale: string,
  originPlace: string,
  destinationPlace: string,
  outboundPartialDate: string,
  inboundPartialDate: string
): actions.QuoteRequestAction {
  return {
    type: actions.QUOTES_REQUEST,
    country,
    currency,
    locale,
    originPlace,
    destinationPlace,
    outboundPartialDate,
    inboundPartialDate,
  };
}

export function getQuoteSuccessAction(data: Data): actions.QuoteSuccessAction {
  return {
    type: actions.QUOTES_SUCCESS,
    data,
  };
}

export function getQuoteFailureAction(
  error: string
): actions.QuoteFailureAction {
  return {
    type: actions.QUOTES_FAILURE,
    error,
  };
}
