import { Notifications } from "../../src/model";
import { getRequest } from "../../src/network/api";
import { notificationsUrl } from "../../src/network/endpoints";

export async function getNotifications(): Promise<Notifications> {
  return await getRequest(notificationsUrl);
}
