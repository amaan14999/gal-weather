import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Country = {
  country: string;
};

export type CountriesResponse = {
  error: boolean;
  msg: string;
  data: Country[];
};

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountriesResponse> {
    return this.http.get<CountriesResponse>(
      'https://countriesnow.space/api/v0.1/countries'
    );
  }
}
