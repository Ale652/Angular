import {Weather} from './weather';

export interface DetailWeather {
    name: string;
    fiveDayForecast: Weather[];
}