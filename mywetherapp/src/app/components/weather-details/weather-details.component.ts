import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { WeatherFromAPI } from 'src/app/models/weatherFromAPI';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  zip!: number;
  cityDetails!: City;
  constructor(private route: ActivatedRoute, private httpService : HttpService) {
    this.zip = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.httpService.getWeather(`${this.zip}`).subscribe(
      {
        next : data => {
          this.cityDetails = {
            zip: this.zip.toString(),
            name: data.name,
            coord: data.coord,
            country: data.sys.country,
            id: data.id,
            weather: data.weather,
            main: data.main
          };
       
        }
      }
      );
  }

  // addCity(zip:string) {
 
  //   this.httpService.getWeather(`${zip}`).subscribe(
  //     {
  //       next : data => {
  //         this.cityDetails.push({
  //           zip: zip,
  //           name: data.name,
  //           coord: data.coord,
  //           country: data.sys.country,
  //           id: data.id,
  //           weather: data.weather,
  //           main: data.main
  //         });
       
  //       }
  //     }
  //     );
  // }

}
