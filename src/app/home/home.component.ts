import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type CountriesResponse, CountriesService } from '../countries.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  countries?: CountriesResponse;

  constructor(private countriesService: CountriesService) {
    countriesService.getCountries().subscribe((c) => {
      this.countries = c;
    });
  }
}
