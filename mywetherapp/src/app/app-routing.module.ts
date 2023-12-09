import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {WeatherDetailsComponent} from './components/weather-details/weather-details.component'

const routes: Routes = [
  {path: 'home/:type', component: HomeComponent},
  {path: 'weatherDetails/:id', component: WeatherDetailsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
