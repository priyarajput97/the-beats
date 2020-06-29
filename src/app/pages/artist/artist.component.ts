import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: any;
  artistTracks: any;

  swiperConfig = {
    slidesPerView: screen.width < 500 ? 3 : screen.width < 800 ? 4 : 5,
    spaceBetween: screen.width < 500 ? 3 : screen.width < 800 ? 6 : 10,
    freeMode: true,
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(window.innerWidth)
    this.getArtist(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  async getArtist(id) {
    try {
      if (id) {
        this.artist = await this.apiService.getArtist(id);
        const { tracks } = await this.apiService.getAlbumByArtist(id);
        this.artistTracks = tracks;
      }
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  seeTrack(trackId) {
    trackId && this.router.navigate([`/dashboard/track/${trackId}`]);
  }
}
