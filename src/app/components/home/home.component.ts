import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['column-count: 4'],
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage;

  constructor(private spoti: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spoti.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      },
      (serviceError) => {
        this.loading = false;
        console.log(serviceError);
        this.error = true;
        this.errorMessage = serviceError.error.error.message;
      }
    );
  }
}
