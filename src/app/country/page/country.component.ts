import { Component, OnInit } from '@angular/core';
import { CountryDTO } from '../dto/country-dto';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countriesList: CountryDTO[] = [];
  filteredCountriesList: CountryDTO[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  public getCountries() {
    this.countryService.getCountriesList().subscribe(
      { 
      next:(res: any) => {
        this.countriesList = res;
        console.log(res[0].name)
        this.filteredCountriesList = [...this.countriesList]; // Initialize filtered list with all countries
        // console.log("Countries: ", this.countriesList);
      },
      error:(error:any) => {
        console.error("Error fetching country data:", error);
      }
      // {next:countries =>()this.countriesList=countries}
    }
    );
  }

  public searchCountries(event: any) {
    const searchTerm = event.target.value;
    this.filteredCountriesList = this.countriesList.filter((country: CountryDTO) => {
      return country.country.common.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
