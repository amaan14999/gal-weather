import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type WeatherResponse = {
  weather: {
    main: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
};

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  forCountry(country: string): Observable<WeatherResponse> {
    const params = new URLSearchParams();
    params.set('APPID', '794ee95e63c5a32aaf88cd813fa2e425');
    params.set('q', country);

    return this.http.get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`
    );
  }
}
