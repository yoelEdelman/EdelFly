import { Quote } from "../../src/model";
import { getRequest } from "../../src/network/api";
import { quoteEndPoint } from "../../src/network/endpoints";
import { network } from "../../util/constants";

export async function getQuote(
  country: string,
  currency: string,
  locale: string,
  originPlace: string,
  destinationPlace: string,
  outboundPartialDate: string,
  inboundPartialDate: string
): Promise<Quote> {
  console.log(
    `${quoteEndPoint}${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}/${inboundPartialDate}?apikey=${network.SKY_SCANNER_API_KEY}`
  );
  return await getRequest(
    `${quoteEndPoint}${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}/${inboundPartialDate}?apikey=${network.SKY_SCANNER_API_KEY}`
  );
}
