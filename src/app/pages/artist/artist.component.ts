import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getArtist(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  async getArtist(id) {
    try {
      if (id) {
        this.artist = await this.apiService.getArtist(id);
        console.log(this.artist);
      }
    } catch (error) {
      this.commonService.handleError(error);
    }
  }
}
