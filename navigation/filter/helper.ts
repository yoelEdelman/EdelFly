import { RouteProp } from "@react-navigation/native";

export const FilterScreen = "Filtres";
export const AirlinesScreen = "Compagnies aériennes";
export const DurationScreen = "Durée";
export const CabinScreen = "Cabine";

export type Params = {
  [FilterScreen]: undefined;
  [AirlinesScreen]: undefined;
  [DurationScreen]: undefined;
  [CabinScreen]: undefined;
};

export type FilterScreenRouteProps = RouteProp<Params, "Filtres">;
export type AirlinesScreenRouteProps = RouteProp<Params, "Compagnies aériennes">;
export type DurationScreenScreenRouteProps = RouteProp<Params, "Durée">;
export type CabinScreenScreenRouteProps = RouteProp<Params, "Cabine">;
