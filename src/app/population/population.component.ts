import { Component, OnInit } from '@angular/core';
import { PopulationDTO } from '../country/dto/population-dto';
import { CountryService } from '../country/service/country.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit{

  populationList: PopulationDTO[] = [];



  constructor(
    private countryService: CountryService,
  ) { }

  ngOnInit(): void {
    // this.getPopulation();
  }

  // public getPopulation() {
  //   this.countryService.getPopulation().subscribe((res: any) => {
  //     this.populationList = res['data'];
  //     console.log("Population: ", this.populationList)
  //   },
  //   (error) => {
  //     console.error("Error fetching population data:", error);
  //   });
  // }

}
