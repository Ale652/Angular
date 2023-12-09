import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { City } from 'src/app/models/city';
import { StateService } from 'src/app/services/state.service';
import { Subscription } from 'rxjs';
import { UtilService } from 'src/app/services/utilService';


@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.css']
})

export class WeatherSummaryComponent implements OnInit {
  @Input() city!: City;
  @Input() type!: string;
  subscription: Subscription = new Subscription();

  mainTemp !:number;
  temp_min !:number;
  temp_max !:number;

  constructor(private stateService: StateService, private utilService: UtilService) {}

  ngOnInit(): void {

    this.subscription = this.stateService.getTypeUnit().subscribe(
      (res) => {
        this.type = res;
        this.mainTemp = this.utilService.kelvinUnitTransform(this.type, this.city.main.temp);
        this.temp_min = this.utilService.kelvinUnitTransform(this.type, this.city.main.temp_min);
        this.temp_max = this.utilService.kelvinUnitTransform(this.type, this.city.main.temp_max);
        console.log(this.type);
      },
      (err) => {
        console.error(`An error occurred: ${err.message}`);
      });



  }

}
