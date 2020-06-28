import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePlaylistComponent } from 'src/app/modals/create-playlist/create-playlist.component';
import { CommonService } from 'src/app/services/common.service';
import { ConfirmationPopupComponent } from 'src/app/modals/confirmation-popup/confirmation-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.scss']
})
export class MyPlaylistsComponent implements OnInit {

  playlists: Array<any>;

  constructor(
    private apiService: ApiService,
    private commonService: CommonService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMyPlaylists();
  }

  async  getMyPlaylists() {
    try {
      const { items } = await this.apiService.getMyPlaylists();
      this.playlists = items;
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  createPlaylist() {
    this.dialog.open(CreatePlaylistComponent, {
      width: '350px',
      autoFocus: false,
      panelClass: 'custom-dialog-styles'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.commonService.openSnackBar('Playlist Added!', 2000);
        this.getMyPlaylists();
      }
    });
  }

  editPlaylist(playlist) {
    this.dialog.open(CreatePlaylistComponent, {
      width: '350px',
      autoFocus: false,
      data: {
        name: playlist.name,
        description: playlist.description,
        id: playlist.id
      },
      panelClass: 'custom-dialog-styles'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.commonService.openSnackBar('Playlist Edited!', 2000);
        this.getMyPlaylists();
      }
    });
  }

  deletePlaylist(playlist) {
    try {
      this.dialog.open(ConfirmationPopupComponent, {
        width: '350px',
        autoFocus: false,
        data: {
          message: `Delete playlist ${playlist.name}?`
        },
        panelClass: 'custom-dialog-styles'
      }).afterClosed().subscribe(async result => {
        if (result) {
          await this.apiService.deletePlaylist(playlist.id);
          this.commonService.openSnackBar('Playlist Deleted!', 2000);
          this.getMyPlaylists();
        }
      });
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  seePlaylist(playlistId, playlistTitle) {
    playlistId && this.router.navigate([`/dashboard/playlist/${playlistId}/${playlistTitle}`]);
  }
}
