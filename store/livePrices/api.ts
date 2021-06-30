import { Data, Query } from "../../src/model";
import { getRequest, postUrlencodedRequestHeader } from "../../src/network/api";
import { livePricesEndPoint } from "../../src/network/endpoints";
import { network } from "../../util/constants";

export async function getLivePrices(query: Query): Promise<Data> {
  const params = new URLSearchParams();
  params.append("Adults", query.Adults.toString());
  params.append("Children", query.Children.toString());
  params.append("Infants", query.Infants.toString());
  params.append("ApiKey", query.ApiKey);
  params.append("GroupPricing", query.GroupPricing ? "true" : "false");
  params.append("CabinClass", query.CabinClass.replace(" ", ""));
  params.append("Country", query.Country);
  params.append("Currency", query.Currency);
  params.append("Locale", query.Locale);
  params.append("OriginPlace", query.OriginPlace);
  params.append("DestinationPlace", query.DestinationPlace);
  params.append("OutboundDate", query.OutboundDate);
  params.append("InboundDate", query.InboundDate ?? "");
  console.log("redirectUrl", params);
  let redirectUrl = await postUrlencodedRequestHeader(
    livePricesEndPoint,
    params
  );
  console.log("redirectUrl", redirectUrl, params);
  return await getRequest(
    `${redirectUrl.location}?apikey=${network.SKY_SCANNER_API_KEY}`
  );
}
