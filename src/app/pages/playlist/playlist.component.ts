import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConfirmationPopupComponent } from 'src/app/modals/confirmation-popup/confirmation-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: any;
  playlistId: string;
  playlistTitle: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private commonService: CommonService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.playlistId = this.activatedRoute.snapshot.paramMap.get('id');
    this.playlistTitle = this.activatedRoute.snapshot.paramMap.get('name')
    this.getPlaylist(this.playlistId);
  }

  async getPlaylist(id) {
    try {
      if (id) {
        const { items } = await this.apiService.getTracksByPlaylist(id);
        this.playlist = items;
      }
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  removeTrack(track) {
    this.dialog.open(ConfirmationPopupComponent, {
      width: '350px',
      autoFocus: false,
      data: {
        message: `Remove track '${track.track.name}' from '${this.playlistTitle}'?`
      },
      panelClass: 'custom-dialog-styles'
    }).afterClosed().subscribe(async result => {
      try {
        if (result) {
          const body = {
            tracks: [{ uri: track.track.uri }]
          }
          await this.apiService.removeSongFromPlaylist(this.playlistId, body);
          this.commonService.openSnackBar('Track Removed!', 2000);
          this.getPlaylist(this.playlistId);
        }
      } catch (error) {
        this.commonService.handleError(error);
      }
    });
  }

  seeTrack(trackId) {
    trackId && this.router.navigate([`/dashboard/track/${trackId}`]);
  }
}
