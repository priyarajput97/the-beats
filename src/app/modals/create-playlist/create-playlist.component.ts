import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  playlistForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private commonService: CommonService,
    private dialogRef: MatDialogRef<CreatePlaylistComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.data ? this.createForm(this.data) : this.createForm();
  }

  createForm(data?) {
    this.playlistForm = this.formBuilder.group({
      name: [data ? data.name : null, Validators.required],
      public: [true],
      description: [data ? data.description : null]
    });
  }

  async createPlaylist() {
    try {
      if (this.data) {
        await this.apiService.editPlaylist(this.data.id, this.playlistForm.value);
      } else {
        await this.apiService.createPlaylist(this.playlistForm.value);
      }
      this.dialogRef.close(true);
    } catch (error) {
      this.commonService.handleError(error);
    }
  }
}
