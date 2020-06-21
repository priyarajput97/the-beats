import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePlaylistComponent } from 'src/app/modals/create-playlist/create-playlist.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-my-playlists',
  templateUrl: './my-playlists.component.html',
  styleUrls: ['./my-playlists.component.scss']
})
export class MyPlaylistsComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private commonService: CommonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  createPlaylist() {
    this.dialog.open(CreatePlaylistComponent, {
      width: '350px',
      autoFocus: false,
      panelClass: 'custom-dialog-styles'
    }).afterClosed().subscribe(result => {
      if (result) this.commonService.openSnackBar('Playlist Added!', 2000);
    })
  }
}
