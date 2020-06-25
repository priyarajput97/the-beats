import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ApiService } from 'src/app/services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-song-to-playlist',
  templateUrl: './add-song-to-playlist.component.html',
  styleUrls: ['./add-song-to-playlist.component.scss']
})
export class AddSongToPlaylistComponent implements OnInit {

  playlists: Array<any>;
  selectedPlaylist: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private apiService: ApiService,
    private commonService: CommonService,
    private dialogRef: MatDialogRef<AddSongToPlaylistComponent>
  ) { }

  ngOnInit(): void {
    this.getMyPlaylists();
  }

  async getMyPlaylists() {
    try {
      const { items } = await this.apiService.getMyPlaylists();
      this.playlists = items;
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

  selectPlaylist(playlist) {
    this.selectedPlaylist = playlist.id;
  }

  async addSongToPlaylist() {
    try {
      if (this.data && this.data.track) {
        await this.apiService.addSongToPlaylist(this.selectedPlaylist, this.data.track.uri);
        this.dialogRef.close(true);
      }
    } catch (error) {
      this.commonService.handleError(error);
    }
  }

}
