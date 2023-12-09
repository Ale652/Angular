import {Main} from './main';

export interface WeatherFromAPI {
    dt_txt?: string;

    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: Main;
    visibility: number;
    wind: {
      deg: number;
      speed: number;
      gust: number;
    };
    rain: string;
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
    
  }

