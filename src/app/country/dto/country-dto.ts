export class CountryDTO {

    iso2: string;
    iso3: string;
    country: any
    cities: any[];
    flag: string;
    population: number;
    currency: string;


    constructor(data: any) {
        this.iso2 = data['iso2'];
        this.iso3 = data['iso3'];
        this.country = data['name']['common']
        this.cities = data['cities'];
        this.flag=data['flag'];
        this.population=data['population']
        this.currency=data['currency']
    }
}
