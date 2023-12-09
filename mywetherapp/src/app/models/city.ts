import {Coord} from './coord';
import { Main } from './main';
import { Weather } from './weather';

export interface City {
    zip: string,
    name: string;
    coord: Coord;
    country: string;
    id: number;
    weather: Weather[];
    main: Main;
}
 
