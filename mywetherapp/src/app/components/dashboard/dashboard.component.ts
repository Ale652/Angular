import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cities: City[] = [];
  newWether: any;
  value = '';
  @Input() type!: string;

  constructor(private httpService : HttpService){}

  addCity(zip:string) {
 
    this.newWether = this.httpService.getWeather(`${zip}`).subscribe(
      {
        next : data => {
          this.cities.push({
            zip: zip,
            name: data.name,
            coord: data.coord,
            country: data.sys.country,
            id: data.id,
            weather: data.weather,
            main: data.main
          });
       
        }
      }
      );
  }
}
