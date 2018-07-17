import { Component, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})

export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(http: HttpClient) {        
        http.get(`${environment.api_url}` + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result as WeatherForecast[];
        }, error => console.error(error));
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}





