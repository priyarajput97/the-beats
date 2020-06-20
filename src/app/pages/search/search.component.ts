import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  tracks: Array<object>;
  albums: Array<object>;
  artists: Array<object>;
  playlists: Array<object>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      param && param.keyword && this.getSearchResults(param.keyword);
    });
  }

  async getSearchResults(keyword) {
    try {
      const { albums, tracks, artists, playlists } = await this.apiService.getSearchResults(keyword);
      this.albums = albums.items;
      this.tracks = tracks.items;
      this.artists = artists.items;
      this.playlists = playlists.items;
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  seeArtist(artistId) {
    artistId && this.router.navigate([`/dashboard/artist/${artistId}`]);
  }

  seeTrack(trackId) {
    trackId && this.router.navigate([`/dashboard/track/${trackId}`]);
  }

  seeAlbum(albumId) {
    albumId && this.router.navigate([`/dashboard/album/${albumId}`]);
  }
}
