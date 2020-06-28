import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    AngularMaterialModule
  ]
})
export class PlaylistModule { }
