import { Data } from "../../src/model";
import { getRequest } from "../../src/network/api";
import { bookedUrl } from "../../src/network/endpoints";

export async function getBooked(): Promise<Data> {
  return await getRequest(bookedUrl);
}
