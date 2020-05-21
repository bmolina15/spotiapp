import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private spoti: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spoti.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spoti.getTopTracks(id).subscribe((tracks) => {
      console.log(tracks);
      this.topTracks = tracks;
    });
  }
}
