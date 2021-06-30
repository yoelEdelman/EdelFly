import { Notifications } from "../../src/model";

export const NOTIFICATIONS = "actionTypes/NOTIFICATIONS";

export const NOTIFICATIONS_REQUEST = "actionTypes/NOTIFICATIONS_REQUEST";
export interface NotificationsRequestAction {
  type: typeof NOTIFICATIONS_REQUEST;
}

export const NOTIFICATIONS_SUCCESS = "actionTypes/NOTIFICATIONS_SUCCESS";
export interface NotificationsSuccessAction {
  type: typeof NOTIFICATIONS_SUCCESS;
  data: Notifications;
}

export const NOTIFICATIONS_FAILURE = "actionTypes/NOTIFICATIONS_FAILURE";
export interface NotificationsFailureAction {
  type: typeof NOTIFICATIONS_FAILURE;
  error: string;
}

export type NotificationsActions =
  | NotificationsRequestAction
  | NotificationsSuccessAction
  | NotificationsFailureAction;
