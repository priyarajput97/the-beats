import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [CreatePlaylistComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ]
})
export class ModalsModule { }
