import { Component } from '@angular/core';
import { StateService } from './services/state.service';
import { UtilService } from './services/utilService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mywetherapp';
  type: string = 'f';
  typeLink: string = 'f'

  constructor(private stateService: StateService, private utilService : UtilService) {
    this.type = 'f'; // Initial unit is Fahrenheit
  }

  updateType(){
    this.type = (this.type === 'f'?  'c' : 'f');
    this.typeLink = this.type;
    this.stateService.toggleTypeUnit(this.type);
    
  }
}
