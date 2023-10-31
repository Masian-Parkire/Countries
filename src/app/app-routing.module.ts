import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/page/country.component';
import { PopulationComponent } from './population/population.component';

const routes: Routes = [
  { path: 'countries', component: CountryComponent },
  { path: 'population', component: PopulationComponent },
  { path: '**', redirectTo: 'countries' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
