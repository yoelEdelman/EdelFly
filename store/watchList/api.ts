import { Data } from "../../src/model";
import { getRequest } from "../../src/network/api";
import { watchListUrl } from "../../src/network/endpoints";

export async function getWatchList(): Promise<Data> {
  return await getRequest(watchListUrl);
}
