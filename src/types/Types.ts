type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type CountryType = {
  alpha3Code: string;
  borders: string[];
  capital: string;
  currencies: Currency[];
  flag: string;
  independent: boolean;
  area: string;
  languages: Language[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
};

export type CountriesType = {
  countries: CountryType[];
};
