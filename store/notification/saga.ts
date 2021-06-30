import { call, put, takeEvery } from "redux-saga/effects";
import { Notifications } from "../../src/model";
import {
  getNotificationsFailureAction,
  getNotificationsSuccessAction,
} from "./actionCreators";
import {
  NotificationsRequestAction,
  NOTIFICATIONS_REQUEST,
} from "./actionTypes";
import { getNotifications } from "./api";

function* handleResponse(action: NotificationsRequestAction) {
  try {
    // console.log("Data Notifications...");
    const { data } = yield call(getNotifications);
    console.log("Data Notifications result", data);
    const response: Notifications = data;
    yield put(getNotificationsSuccessAction(response));
  } catch (error) {
    console.log("Error", error.response.data);
    const errorMessage = "Something went wrong";
    yield put(getNotificationsFailureAction(errorMessage));
  }
}

export function* notificationSaga() {
  console.log("notificationSaga");
  yield takeEvery(NOTIFICATIONS_REQUEST, handleResponse);
}
