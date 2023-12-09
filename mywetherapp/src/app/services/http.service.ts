import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap, catchError} from 'rxjs/operators';
import {Weather} from '../models/weather';
import {FiveDayForecast} from '../models/fiveDayForecast';
import {WeatherFromAPI} from '../models/weatherFromAPI';


import {forkJoin, Observable} from 'rxjs';
 
@Injectable({
  providedIn:'root'
})
export class HttpService {
  BASE_URL: string = `https://api.openweathermap.org/data/2.5/weather?zip=`;
  FORECAST_URL: string = `https://api.openweathermap.org/data/2.5/forecast?zip=`;
  weatherAppKey: string = `3f02b3252b1d081b28c276989d79960f`;
 
  constructor(private http: HttpClient) {}
 
  getWeather(zip:string) {
    const url = `${this.BASE_URL}${zip},us&appid=${this.weatherAppKey}`;
 
    return this.http
      .get<WeatherFromAPI>(url);
  }
 
 
}
 