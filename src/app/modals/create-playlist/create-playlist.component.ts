import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {

  playlistForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private commonService: CommonService,
    private dialogRef: MatDialogRef<CreatePlaylistComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.playlistForm = this.formBuilder.group({
      name: [null, Validators.required],
      public: [false],
      description: [null]
    });
  }

  async createPlaylist() {
    try {
      const response = await this.apiService.createPlaylist(this.playlistForm.value);
      response ? this.dialogRef.close(true) : this.dialogRef.close();
    } catch (error) {
      this.commonService.handleError(error);
    }
  }
}
