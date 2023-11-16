import { WeatherResponse, WeatherService } from './../weather.service';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weather?: WeatherResponse;

  constructor(private weatherService: WeatherService) {}

  @Input()
  set country(country: string) {
    this.weatherService.forCountry(country).subscribe((w) => {
      this.weather = w;
    });
  }
}
