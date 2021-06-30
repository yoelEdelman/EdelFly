import { Data } from "../../src/model";
import { QuoteActions, QUOTES_SUCCESS } from "./actionTypes";

export interface QuoteState {
  result: Data | null;
}

const initialState: QuoteState = {
  result: null,
};

export function quotesReducer(
  state: QuoteState = initialState,
  action: QuoteActions
): QuoteState {
  if (action.type === QUOTES_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else {
    return state;
  }
}
