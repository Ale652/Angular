import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  //  translates Kelvin to Fahrenheit or Celsius
  kelvinUnitTransform(type: string, kelvin: number) {
    const temp = type === 'f' ? Math.round( (kelvin - 273.15) * 9 / 5 + 32 ) : Math.round( kelvin - 273.15 );
    return temp;
  }
}
