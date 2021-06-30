import { Data } from "../../src/model";
import { getRequest } from "../../src/network/api";
import { marketsEndPoint } from "../../src/network/endpoints";

export async function getMarkets(): Promise<Data> {
  return await getRequest(marketsEndPoint);
}
