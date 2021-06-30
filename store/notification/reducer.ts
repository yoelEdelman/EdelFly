import { Notifications } from "../../src/model";
import { NotificationsActions, NOTIFICATIONS_SUCCESS } from "./actionTypes";

export interface NotificationsState {
  result: Notifications | null;
}

const initialState: NotificationsState = {
  result: null,
};

export function notificationsReducer(
  state: NotificationsState = initialState,
  action: NotificationsActions
): NotificationsState {
  if (action.type === NOTIFICATIONS_SUCCESS) {
    return {
      ...state,
      result: action.data,
    };
  } else {
    return state;
  }
}
