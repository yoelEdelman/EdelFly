import { RouteProp } from "@react-navigation/native";
import { Place } from "../../src/model";

export const SearchHomeScreen = "Rechercher un vol";
export const SelectLocationScreen = "Select Location";
export const SelectDateScreen = "Select Date";
export const SelectTravellerScreen = "Select Travller";
export const SearchResultScreen = "Search Result";

export type Params = {
  [SearchHomeScreen]: {
    dateFrom?: Date;
    dateTo?: Date;
    cabin?: string;
    travellersMap?: Map<string, number>;
    locationFrom?: Place;
    locationTo?: Place;
  };
  [SelectLocationScreen]: {
    departure?: boolean;
    location?: Place;
  };
  [SelectDateScreen]: {
    dateFrom: Date;
    dateTo: Date;
  };
  [SelectTravellerScreen]: {
    cabin?: string;
    travellersMap?: Map<string, number>;
  };
  [SearchResultScreen]: {
    roundTrip: boolean;
    dateFrom: Date;
    dateTo?: Date;
    cabin: string;
    travellersMap: Map<string, number>;
    locationFrom: Place;
    locationTo: Place;
  };
};

export type SearchHomeRouteProps = RouteProp<Params, "Rechercher un vol">;
export type SelectLocationRouteProps = RouteProp<Params, "Select Location">;
export type SelectDateRouteProps = RouteProp<Params, "Select Date">;
export type SelectTravellerRouteProps = RouteProp<Params, "Select Travller">;
export type SearchResultRouteProps = RouteProp<Params, "Search Result">;
