import { Notifications } from "../../src/model";
import * as actions from "./actionTypes";

export function getNotificationsRequestAction(): actions.NotificationsRequestAction {
  return {
    type: actions.NOTIFICATIONS_REQUEST,
  };
}

export function getNotificationsSuccessAction(
  data: Notifications
): actions.NotificationsSuccessAction {
  return {
    type: actions.NOTIFICATIONS_SUCCESS,
    data,
  };
}

export function getNotificationsFailureAction(
  error: string
): actions.NotificationsFailureAction {
  return {
    type: actions.NOTIFICATIONS_FAILURE,
    error,
  };
}
