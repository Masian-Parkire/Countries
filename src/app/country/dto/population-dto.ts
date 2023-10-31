import { PopulationCountsDTO } from "./population-counts-dto";

export class PopulationDTO {

    city: string;
    country: string;
    populationCounts: PopulationCountsDTO;


    constructor(data: any) {
        this.city = data['city'];
        this.country = data['country'];
        this.populationCounts = data['populationCounts'];
    }

    
}
