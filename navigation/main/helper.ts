import { RouteProp } from "@react-navigation/native";
import { Itinerary, LegDetails } from "../../src/model";

export const landingScreen = "landing";
export const IntroScreen = "Intro";
export const HomeNavigatorScreen = "HomeNavigator";
export const TicketDetailsScreen = "Ticket Details";
export const FilterNavigatorScreen = "FilterNavigator";

export type Params = {
  [landingScreen]: undefined;
  [IntroScreen]: undefined;
  [HomeNavigatorScreen]: undefined;
  [TicketDetailsScreen]: {
    itinerary: Itinerary;
    outboundLegInfo: LegDetails;
    inboundLegInfo: LegDetails;
    traveler: Map<string, number>;
    cabin: string;
    canBook: boolean;
  };
  [FilterNavigatorScreen]: undefined;
};

export type LandingScreenRouteProps = RouteProp<Params, "landing">;
export type IntroScreenRouteProps = RouteProp<Params, "Intro">;
export type HomeNavigatorScreenRouteProps = RouteProp<Params, "HomeNavigator">;
export type FilterNavigatorScreenRouteProps = RouteProp<
  Params,
  "FilterNavigator"
>;
export type TicketDetailsScreenRouteProps = RouteProp<Params, "Ticket Details">;
