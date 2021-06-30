// Modules, "." can be used as separator for sub modules
module Constants {
  export class String {
    readonly ONOARDING_1_TITLE = "Rechercher des vols";
    readonly ONOARDING_2_TITLE = "Réserver un vol";
    readonly ONOARDING_3_TITLE = "Cumuler des points";
    readonly ONOARDING_1_DESC =
      "Parcourez les vols, suivez les compagnies aériennes et comparez les prix pour trouver la meilleure option possible pour votre voyage.";
    readonly ONOARDING_2_DESC =
      "Trouvez un vol qui correspond à votre\n" +
        "destination et votre disponibilité, Réservez\n" +
        "instantanément en quelques clics.";
    // readonly ONOARDING_3_DESC =
    //   "Le billet électronique pour votre vol sera stocké sur votre appareil et dans le cloud de l'application stockage. Bon voyage!";
    readonly ONOARDING_3_DESC =
        "Votre réservation vous permet de gagner des points, que vous pourrez utiliser lors de votre prochaine réservation. Bon voyage!";
    readonly GET_STARTED = "Commencer";
    readonly CONTINUE = "Continue";
    readonly TERMS_CONDITIONS =
      "By selecting “Continue” you agree to the BookAir\n End User Privacy Policy";
    readonly SET_LOCATION_DESC =
      "Please set your location. This makes \nit possible for BookAir to give you better\ndog park recommendations.";
    readonly CURRENT_LOCATION = "Current location";
    readonly MIXED = "Mixte";
    readonly ECONOMY = "Économique";
    readonly PREMIUM_ECONOMY = "Économique premium";
    readonly BUSSINESS = "Affaires";
    readonly NON_STOP = "Sans escale";
    readonly FIRST = "Première classe";
    readonly GOOGLE = "Google";
    readonly FACEBOOK = "Facebook";
    readonly TWITTER = "Twitter";
    readonly PUSH_NOTI = "Notifications push actives";
    readonly EMAIL_NOTI = "Notifications par email";
    readonly SPECIAL_OFFERS = "Offres spéciales";
    readonly GREAT_GETWAYS = "De belles escapades";
    readonly AIRLINE1 = "Andes Lineas Aereas";
    readonly AIRLINE2 = "Alaska Airlines";
    readonly AIRLINE3 = "Copa Airlines";
    readonly AIRLINE4 = "Avianca";
    readonly AIRLINE5 = "Aerolineas Argentinas";
    readonly AIRLINE6 = "Flybondi";
    readonly AIRLINE7 = "Interjet";
    readonly AIRLINE8 = "Aeromexico";
    readonly SHOW_ALLIANCES = "Afficher les alliances";
    readonly ADULTS = "Adultes";
    readonly SENIOR = "Séniors";
    readonly YOUTH = "Jeunes";
    readonly CHILD = "Enfants";
    readonly SEAT_INFANTS = "Bébés place assise";
    readonly LAP_INFANTS = "Bébés sur les genoux";
    readonly ADULTS_DESC = "18-64";
    readonly SENIOR_DESC = "65+";
    readonly YOUTH_DESC = "12-17";
    readonly CHILD_DESC = "2-11";
    readonly SEAT_INFANTS_DESC = "Moins de 2 ans";
    readonly LAP_INFANTS_DESC = "Moins de 2 ans";
    readonly BOOK_NOW = "Sélectionner";
    readonly TICKET_BBAGGAGE_INFO =
      "1 bagage à main,\n*Des frais de bagages supplémentaires\n peuvent s'appliquer";
  }
  export class Network {
    readonly BASE_URL = "http://partners.api.skyscanner.net/apiservices/";
    readonly SKY_SCANNER_API_KEY = "prtl6749387986743898559646983194";
  }
}
const string = new Constants.String();
const network = new Constants.Network();

export { string, network };
