import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { AddSongToPlaylistComponent } from './add-song-to-playlist/add-song-to-playlist.component';

@NgModule({
  declarations: [
    CreatePlaylistComponent,
    ConfirmationPopupComponent,
    AddSongToPlaylistComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ]
})
export class ModalsModule { }
