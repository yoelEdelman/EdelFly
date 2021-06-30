import { Currencies } from "../../src/model";
import { getRequest } from "../../src/network/api";
import { currenciesEndPoint } from "../../src/network/endpoints";

export async function getCurrencies(): Promise<Currencies> {
  return await getRequest(currenciesEndPoint);
}
