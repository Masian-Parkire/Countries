export class PopulationCountsDTO {

    year: string;
    value: string;
    sex: string;
    reliability: string;


    constructor(data: any) {
        this.year = data['year'];
        this.value = data['value'];
        this.sex = data['sex'];
        this.reliability = data['reliability'];
    }
}
