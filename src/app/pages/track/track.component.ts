import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  track: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrack(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  async getTrack(id) {
    try {
      if (id) this.track = await this.apiService.getTrack(id);
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  seeArtist(artistId) {
    artistId && this.router.navigate([`/dashboard/artist/${artistId}`]);
  }
}
