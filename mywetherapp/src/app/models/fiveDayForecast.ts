import {City} from './city';
import {WeatherFromAPI} from './weatherFromAPI';

export interface FiveDayForecast {
    city: City;
    cnt: number;
    code: number;
    list: WeatherFromAPI[];
}