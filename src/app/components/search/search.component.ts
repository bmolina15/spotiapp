import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  searchedArtists: any[] = [];
  loading: boolean;

  constructor(private spoti: SpotifyService) {}
  search(name: string) {
    this.loading = true;
    console.log(name);
    this.spoti.getArtists(name).subscribe((data: any) => {
      console.log(data);
      this.searchedArtists = data;
      this.loading = false;
    });
  }
}
