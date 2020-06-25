import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSongToPlaylistComponent } from 'src/app/modals/add-song-to-playlist/add-song-to-playlist.component';

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
    private dialog: MatDialog,
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

  addToPlaylist() {
    this.dialog.open(AddSongToPlaylistComponent, {
      width: '350px',
      autoFocus: false,
      data: { track: this.track },
      panelClass: 'custom-dialog-styles'
    }).afterClosed().subscribe(result => {
      result && this.commonService.openSnackBar('Song Added To Playlist!', 2000);
    });
  }

  seeArtist(artistId) {
    artistId && this.router.navigate([`/dashboard/artist/${artistId}`]);
  }
}
