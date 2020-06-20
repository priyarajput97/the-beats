import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAlbum(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  async getAlbum(id) {
    try {
      if (id) {
        this.album = await this.apiService.getAlbum(id);
        console.log(this.album)
      }
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
}
