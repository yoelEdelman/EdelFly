import { Locations } from "../../src/model";
import { getRequest } from "../../src/network/api";
import { locationsAutoSuggestEndPoint } from "../../src/network/endpoints";

export async function getLocations(query: string): Promise<Locations> {
  return await getRequest(`${locationsAutoSuggestEndPoint}${query}`);
}
