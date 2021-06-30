// To parse this data:
//
//   import { Convert, Data } from "./file";
//
//   const data = Convert.toData(json);

export interface ApiProps {
  isLoading?: boolean;
  error?: string | null;
}

export interface Data {
  Quotes: Quote[];
  Carriers: Carrier[];
  Places: Place[];
  Currencies: Currency[];
  Routes: Route[];
  Dates: Dates;
  Countries: Country[];
  SessionKey: string;
  Query: Query;
  Status: Status;
  Itineraries: Itinerary[];
  Legs: Leg[];
  Segments: Segment[];
  Agents: Agent[];
}

export interface Notifications {
  notifications: Notification[];
}

export interface Currencies {
  Currencies: Currency[];
}

export interface Notification {
  title: string;
  description: string;
  time: number;
  photo: string;
}

export interface Currency {
  Code: string;
  Symbol: string;
  ThousandsSeparator: string;
  DecimalSeparator: string;
  SymbolOnLeft: boolean;
  SpaceBetweenAmountAndSymbol: boolean;
  RoundingCoefficient: number;
  DecimalDigits: number;
}

export interface Locale {
  Code: string;
  Name: string;
}

export interface Locations {
  Places: Place[];
}

export enum Type {
  Country = "Country",
  Station = "Station",
}

export interface Quote {
  QuoteId: number;
  MinPrice: number;
  Direct: boolean;
  OutboundLeg: BoundLeg;
  InboundLeg?: BoundLeg;
  QuoteDateTime: Date;
}

export interface BoundLeg {
  CarrierIds: number[];
  OriginId: string;
  DestinationId: string;
  DepartureDate: Date;
}

export interface Route {
  Price?: number;
  QuoteDateTime?: Date;
  OriginId: number;
  DestinationId: number;
  QuoteIds?: number[];
}

export interface Dates {
  OutboundDates: BoundDate[];
  InboundDates: BoundDate[];
}

export interface BoundDate {
  PartialDate: string;
  QuoteDateTime: Date;
  Price: number;
  QuoteIds: number[];
}

export interface Continent {
  Id: string;
  Name: string;
  Countries: Country[];
}

export interface Country {
  Id?: string;
  Name: string;
  CurrencyId?: string;
  Cities?: City[];
  LanguageId?: string;
  Regions?: Region[];

  Code?: string;
}

export interface City {
  Id: string;
  Name: string;
  SingleAirportCity: boolean;
  CountryId: string;
  Location: string;
  IataCode?: string;
  Airports: Airport[];
  RegionId?: string;
}

export interface Airport {
  Id: string;
  Name: string;
  CityId: string;
  CountryId: string;
  Location: string;
  RegionId?: string;
}

export interface Region {
  Id: string;
  Name: string;
  CountryId: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toData(json: string): Data {
    return JSON.parse(json);
  }

  public static dataToJson(value: Data): string {
    return JSON.stringify(value);
  }
}

export interface Agent {
  Id: number;
  Name: string;
  ImageUrl: string;
  Status: Status;
  OptimisedForMobile: boolean;
  Type: AgentType;
}

export enum Status {
  UpdatesComplete = "UpdatesComplete",
}

export enum AgentType {
  Airline = "Airline",
  TravelAgent = "TravelAgent",
}

export interface Carrier {
  Id: number;
  Code: string;
  ImageUrl: string;
  DisplayCode: string;
  CarrierId: number;
  Name: string;
}

export interface Itinerary {
  OutboundLegId: string;
  InboundLegId?: string;
  PricingOptions: PricingOption[];
  BookingDetailsLink: BookingDetailsLink;
}

export interface BookingDetailsLink {
  Uri: string;
  Body: string;
  Method: Method;
}

export enum Method {
  Put = "PUT",
}

export interface PricingOption {
  Agents: number[];
  QuoteAgeInMinutes: number;
  Price: number;
  DeeplinkUrl: string;
}

export interface Leg {
  Id: string;
  SegmentIds: number[];
  OriginStation: number;
  DestinationStation: number;
  Departure: Date;
  Arrival: Date;
  Duration: number;
  JourneyMode: JourneyMode;
  Stops: number[];
  Carriers: number[];
  OperatingCarriers: number[];
  Directionality: Directionality;
  FlightNumbers: FlightNumber[];
}

export enum Directionality {
  Outbound = "Outbound",
}

export interface FlightNumber {
  FlightNumber: string;
  CarrierId: number;
}

export enum JourneyMode {
  Flight = "Flight",
}

export interface Place {
  Id: number;
  ParentId?: number;
  Code: string;
  Name: string;
  Type: Type;
  PlaceId: string;
  SkyscannerCode: string;
  IataCode?: string;
  CityName?: string;
  CityId?: string;
  PlaceName?: string;
  CountryId?: string;
  RegionId?: string;
  CountryName?: string;
}

export enum PlaceType {
  Airport = "Airport",
  City = "City",
  Country = "Country",
}

export interface Query {
  Country: string;
  Currency: string;
  Locale: string;
  Adults: number;
  Children: number;
  Infants: number;
  OriginPlace: string;
  DestinationPlace: string;
  OutboundDate: string;
  InboundDate?: string;
  LocationSchema?: string;
  CabinClass: string;
  GroupPricing: boolean;
  ApiKey: string;
}

export interface Segment {
  Id: number;
  OriginStation: number;
  DestinationStation: number;
  DepartureDateTime: Date;
  ArrivalDateTime: Date;
  Carrier: number;
  OperatingCarrier: number;
  Duration: number;
  FlightNumber: string;
  JourneyMode: JourneyMode;
  Directionality: Directionality;
}

export interface SegmentDetails {
  Id: number;
  OriginStation: Place;
  DestinationStation: Place;
  DepartureDateTime: Date;
  ArrivalDateTime: Date;
  Carrier: Carrier;
  OperatingCarrier: number;
  Duration: number;
  FlightNumber: string;
  JourneyMode: JourneyMode;
  Directionality: Directionality;
}

export interface LegDetails {
  Carriers: Carrier[];
  Stops: Place[];
  OriginStation: Place[];
  DestinationStation: Place[];
  Segments: SegmentDetails[];
  Id: string;
  SegmentIds: number[];
  Departure: Date;
  Arrival: Date;
  Duration: number;
  JourneyMode: JourneyMode;
  OperatingCarriers: number[];
  Directionality: Directionality;
  FlightNumbers: FlightNumber[];
}
