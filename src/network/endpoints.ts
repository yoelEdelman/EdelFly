import { network } from "../../util/constants";

export const marketsEndPoint = network.BASE_URL.concat(
  `reference/v1.0/countries/fr-FR?apikey=${network.SKY_SCANNER_API_KEY}`
);

export const locationsAutoSuggestEndPoint = network.BASE_URL.concat(
  `autosuggest/v1.0/FR/FR/fr-FR/?apiKey=${network.SKY_SCANNER_API_KEY}&query=`
);

// Browse quotes API call
// GET /browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}
// country The market country your user is in
// currency The currency you want the prices in
// locale The locale you want the results in (ISO locale)
// originPlace The origin place (see places)
// destinationPlace The destination place (see places)
// outboundPartialDate The outbound date (see dates)
// inboundPartialDate The return date (see dates). Use empty string for oneway trip.

export const quoteEndPoint = network.BASE_URL.concat("browsequotes/v1.0/");
export const livePricesEndPoint = network.BASE_URL.concat("pricing/v1.0/");

export const currenciesEndPoint = network.BASE_URL.concat(
  `reference/v1.0/currencies?apikey=${network.SKY_SCANNER_API_KEY}`
);

export const notificationsUrl =
  "https://run.mocky.io/v3/f9552c56-e205-40bd-b0cc-726ada0a8797";

export const bookedUrl =
  "https://run.mocky.io/v3/95bfaf70-af8b-4468-bec5-56878b140112";

export const watchListUrl =
  "https://run.mocky.io/v3/241331b8-b9f9-4bac-a9f6-482396c684cb";
